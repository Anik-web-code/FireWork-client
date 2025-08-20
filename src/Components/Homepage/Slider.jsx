import React, { useState, useEffect } from "react";
import { NavLink } from "react-router";

const slides = [
  {
    bg: "https://i.postimg.cc/jSfRz2JZ/best-freelancer-tools-main.jpg",
    title: "Connecting clients in need to freelancers who deliver",
    desc: "A trusted platform where businesses and individuals find skilled freelancers to get quality work done — fast, reliable, and hassle-free. Whether it's design, writing, development, or marketing, we connect you with the right talent who delivers real results.",
  },
  {
    bg: "https://i.postimg.cc/hvPw8zQ1/1000-F-566120168-s-EHJJGOc-Qp-C0nt2o-YIv3d-TBFOq-R44-Eb-V.jpg",
    title: "Your project, our passion",
    desc: "From concept to completion, our freelancers bring creativity and expertise to every project. Whether you’re launching a startup or scaling your business, find professionals who share your vision and make it happen.",
  },
  {
    bg: "https://i.postimg.cc/5yRPwPVf/860.jpg",
    title: "Hire experts, anytime, anywhere",
    desc: "Get access to top talent across the globe—on demand. Post your task, review bids, and start collaborating in minutes. Quality work, transparent pricing, and deadlines met, every time.",
  },
];

const Slider = () => {
  const [current, setCurrent] = useState(0);
  const lastIndex = slides.length - 1;

  const goNextSlide = () =>
    setCurrent((prev) => (prev === lastIndex ? 0 : prev + 1));
  const goPreviousSlide = () =>
    setCurrent((prev) => (prev === 0 ? lastIndex : prev - 1));

  useEffect(() => {
    const interval = setInterval(goNextSlide, 5000);
    return () => clearInterval(interval);
  });

  return (
      <div className="w-[96%] md:w-[90%] lg:w-[80%] mx-auto rounded-[16px] relative overflow-hidden mt-10">
      <div
        className="flex transition-transform duration-700"
        style={{
          width: `${slides.length * 100}%`,
          transform: `translateX(-${current * (100 / slides.length)}%)`,
        }}
      >
        {slides.map(({ bg, title, desc }, indx) => (
          <div
            key={indx}
            className="bg-cover bg-center h-[500px] md:h-screen flex-shrink-0 p-7"
            style={{
              width: `${100 / slides.length}%`,
              backgroundImage: `url('${bg}')`,
            }}
          >
            <h1 className="text-[40px] sm:text-[56px] md:text-[80px] text-white font-medium mb-8">
              {title}
            </h1>
            <p className="text-[16px] md:text-[32px] text-white font-medium mb-10">
              {desc}
            </p>
            <NavLink to="/addtask">
              <button className="bg-[#FF4500] text-white px-4 py-2 text-[20px] rounded-[8px] hover:bg-[#FF450090]">
                Add Task
              </button>
            </NavLink>
            <NavLink to="/browsetask">
              <button className="bg-[#FF4500] ml-4 text-white px-4 py-2 text-[20px] rounded-[8px] hover:bg-[#FF450090]">
                Browse Task
              </button>
            </NavLink>
          </div>
        ))}
      </div>
      <button
        onClick={goPreviousSlide}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-[#00000050] text-white p-2 rounded-full hover:bg-[#00000080]"
      >
        ‹
      </button>
      <button
        onClick={goNextSlide}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-[#00000050] text-white p-2 rounded-full hover:bg-[#00000080]"
      >
        ›
      </button>

      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-2">
        {slides.map((_, indx) => (
          <button
            key={indx}
            onClick={() => setCurrent(indx)}
            className={`h-3 w-3 rounded-full ${
              indx === current ? "bg-white" : "bg-[#ffffff50]"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Slider;
