import React from "react";
import Slider from "./Slider";
import FeaturedTasks from "./FeaturedTasks";
import Review from "../Review/Review";
import { Helmet } from "react-helmet-async";
import Stats from "../Stats/Stats";

const Homepage = () => {
  return (
    <div className="mt-5">
      <Helmet>
        <title>Home</title>
      </Helmet>
      <Slider></Slider>
      <FeaturedTasks></FeaturedTasks>
      <Review></Review>
      <Stats></Stats>
    </div>
  );
};

export default Homepage;
