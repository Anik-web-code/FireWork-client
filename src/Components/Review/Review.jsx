import React from "react";
import Reviews from "./Reviews";

const reviews = [
  {
    id: 1,
    category: "Dev & IT",
    quote:
      "Haris came in and helped us transfer knowledge from our departing developer, meeting a serious deadline, without fail. His knowledge and experience are exceptional.",
    freelancer: "Haris S.",
    role: "Full‑Stack Developer",
    date: "Apr 7, 2025",
    rating: 5.0,
    photoUrl:
      "https://i.postimg.cc/SRZLzT9G/c1-D22w-QKB2g-Wknjchhx-y0-TRK2-I69w-3-I-zd-Wb0-Hdd-ZRm02x-EX5-EXGjx-Se-RDAC.webp",
  },
  {
    id: 2,
    category: "Design & Creative",
    quote:
      "Ezzan did an amazing job editing my videos—fast turnaround, great attention to detail, and very easy to work with. He follows directions well and delivers high‑quality work consistently. Highly recommend him!",
    freelancer: "Ezzan S.",
    role: "Video editor",
    date: "Mar 14, 2025",
    rating: 5.0,
    photoUrl:
      "https://i.postimg.cc/bJp1VcHT/c1m87-Nhiyu-Q15o-QXX3yt-Qtyhj-R-f-YDZJlpvd3nay-Sy-W7-STPc2-FZQip-Pzo7-DMF2-Hcg.webp",
  },
  {
    id: 3,
    category: "AI Services",
    quote:
      "Rick is a fantastic AI/ML engineer with specialization in LLMs, delivering end-to-end solutions. We had a few concepts when we started the work; ultimately, he delivered a working solution. Looking forward to working with him again.",
    freelancer: "Richard C.",
    role: "AI/ML engineer",
    date: "Mar 28, 2025",
    rating: 5.0,
    photoUrl:
      "https://i.postimg.cc/bvjndcMh/c13-P5m6hd-ULPQEl9-OSPZf-OYN0-Byn0-O9-Xxso-Jk7-bj-Jgd-G9-Jj-XK2-Pqy1f9w9-U6-Lb2j-R-1.jpg",
  },
  {
    id: 4,
    category: "Sales & Marketing",
    quote:
      "We loved working with Jibran and his team. They are very professional and know what they are doing. Very responsive and actually take the time to understand the project and are very methodical and thoughtful about how to approach each project. They are very knowledgeable and creative. We will definitely work with them again.",
    freelancer: "Jibran Z.",
    role: "Social media posts and marketing",
    date: "Mar 10, 2025",
    rating: 5.0,
    photoUrl:
      "https://i.postimg.cc/Qx29nZjT/c1a-S0-EII9-SWh-VI5-M3b5-U0bb-HMz-X5-Oyp2ya-D-h5-XBYqhnlz-Pd-Vp-QO2-Kfa9-RGow-KEDl-G.webp",
  },
  {
    id: 5,
    category: "Writing & Translation",
    quote:
      "Michael is very skilled and highly professional. Understood the assignment, followed instructions, and was also able to be flexible and creative. One of the rare copywriters I've worked with who can come up with something outside the box, but still on brand. Would definitely hire him again!",
    freelancer: "Michael L.",
    role: "Email marketing ",
    date: "Jan 31, 2025",
    rating: 5.0,
    photoUrl:
      "https://i.postimg.cc/fy3yBBFC/c168o2zp-N1-Lavw3-IM3o-YDSov-Nh-LClh5-Ms-NQe-PMXlz-Ai2sao-NWOup-Ami-KT-e93t-Y9h.webp",
  },
  {
    id: 6,
    category: "Admin & Customer Support",
    quote:
      "Ahmed was a great asset to our team. He brought a keen eye for inefficiencies, applied process rigor, and expertly configured ClickUp to ensure sustainable usage and management moving forward. His insights and structured approach have had a lasting impact on our workflows.",
    freelancer: "Ahmed A.",
    role: "Technical Project Manager",
    date: "Feb 5, 2025",
    rating: 5.0,
    photoUrl:
      "https://i.postimg.cc/y8CxyhTh/c1qc-Yqh4w-Sn-K0ifxobxu-Ra-Suh-Xs4t-Us-MPO6-Ny9-Yucuon-ZSti-SO-qb-Rl-Wqmil-M-jd-W.webp",
  },
];

const Review = () => {
  return (
    <div className="w-[96%] mx-auto p-4 md:w-[90%] lg:w-[80%] mt-20">
      <h1 className="text-[40px] font-medium text-center mb-6 dark: text-black">
        Real Reviews From Our Clients
      </h1>
      <div className="grid grid-cols-1 justify-center md:grid-cols-2 lg:grid-cols-3 place-items-center dark:text-black">
        {reviews.map((review) => {
          return <Reviews key={review.id} review={review}></Reviews>;
        })}
      </div>
    </div>
  );
};

export default Review;
