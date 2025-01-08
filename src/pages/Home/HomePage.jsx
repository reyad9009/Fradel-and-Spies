import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import HomePageFoodsCards from "./HomePageFoodsCards";
import HomePageBanner from "./HomePageBanner";
import Mission from "./Mission.jsx/Mission";
import Chefs from "./Chefs/Chefs";

const HomePage = () => {
  const homeFood = useLoaderData();

  return (
    <div className="mt-12">
      <HomePageBanner></HomePageBanner>
      <Mission></Mission>
      <div>
        <h1 className="text-center font-bold text-4xl mt-20">
          Toop Selling Foods
        </h1>
      </div>
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-10 gap-x-10 items-end">
        {homeFood.map((foods) => (
          <HomePageFoodsCards
            foods={foods}
            key={foods._id}
          ></HomePageFoodsCards>
        ))}
      </div>
      <div className="flex justify-end mt-8">
        <Link to="/foods">
          <button className="px-6 py-3 font-bold rounded-lg bg-primaryColor text-white text-base mt-2 mb-2">
            See All Foods
          </button>
        </Link>
      </div>
      <div>
        <Chefs></Chefs>
      </div>
    </div>
  );
};

export default HomePage;
