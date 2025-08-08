import React from "react";

const Reviews = ({ review }) => {
  return (
    <div className="p-4 bg-[#FFFFFF] rounded-[16px] w-[375px] shadow-sm mb-5">
      <h1 className="text-[20px] font-medium mb-3">{review.category}</h1>
      <div className="text-[18px] text-justify h-[230px] mb-6">
        {review.quote}
      </div>
      <div className="flex justify-between">
        <div>
          <h1 className="font-medium text-[18px] mb-2">
            Work done by {review.freelancer}
          </h1>
          <h1 className="text-[16px] mb-2">{review.role}</h1>
          <h1 className="text-[16px] mb-2">{review.date}</h1>
        </div>
        <div>
          <img className="h-24 w-24 rounded-full" src={review.photoUrl} alt="" />
        </div>
      </div>
      <h1 className="text-[18px]">Rating: ⭐⭐⭐⭐⭐</h1>
    </div>
  );
};

export default Reviews;
