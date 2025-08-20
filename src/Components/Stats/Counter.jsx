import React, { useState, useRef, useEffect } from "react";
import CountUp from "react-countup";
import { Fade } from "react-awesome-reveal";

const Counter = () => {
  const [inView, setInView] = useState(false);
  const counterRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const cardData = [
    { count: 10000, label: "Clients", duration: 4 },
    { count: 50000, label: "Freelancers", duration: 5 },
    { count: 1000, label: "Daily Tasks", duration: 4 },
    { count: 150, label: "Countries", duration: 3 },
  ];

  return (
    <div
      ref={counterRef}
      className="mt-8 mb-16 flex flex-col md:flex-row flex-wrap justify-center gap-6"
    >
      {cardData.map((card, index) => (
        <Fade key={index} cascade damping={0.2} triggerOnce>
          <div className="bg-white p-6 md:p-8 rounded-lg w-full sm:max-w-xs md:w-64 text-center shadow-md">
            <div className="text-4xl md:text-5xl font-bold text-[#FF4500]">
              {inView && <CountUp end={card.count} duration={card.duration} />}+
            </div>
            <p className="font-semibold text-xl md:text-2xl mt-3 dark:text-black">
              {card.label}
            </p>
          </div>
        </Fade>
      ))}
    </div>
  );
};

export default Counter;
