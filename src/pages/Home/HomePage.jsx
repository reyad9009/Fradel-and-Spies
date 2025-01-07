import React from "react";
import homePageBg from "../../assets/homepagebg.svg";
import { Link, useLoaderData } from "react-router-dom";
import HomePageFoodsCards from "./HomePageFoodsCards";

const HomePage = () => {
  const homeFood = useLoaderData();

  return (
    <div className="mt-12 relative ">
      <figure>
        <img src={homePageBg} alt=""/>
        <Link to="/foods">
          <button className="absolute right-[4rem] top-[31rem] bg-white px-10 py-3 rounded-xl text-3xl">
            Get Foods
          </button>
        </Link>
      </figure>
      <div>
        <h1 className="text-center font-bold text-4xl mt-16">Toop Selling Foods</h1>
      </div>
      <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-10 gap-x-10 items-end">
        {
            homeFood.map((foods) => (<HomePageFoodsCards foods={foods} key={foods._id}></HomePageFoodsCards>))
        }
      </div>
    </div>
  );
};

export default HomePage;
