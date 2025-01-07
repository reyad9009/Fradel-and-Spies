import React from "react";
import homePageBg from "../../assets/homePageBg.svg";
import { Link, useLoaderData } from "react-router-dom";
import HomePageFoodsCards from "./HomePageFoodsCards";

const HomePage = () => {
  const homeFood = useLoaderData();

  return (
    <div className="mt-12 relative ">
      <div className="card bg-base-100 image-full">
        <figure>
          <img src={homePageBg} className="" alt="Shoes" />
        </figure>
        <div className="card-body flex flex-col items-center justify-center mt-[5%] space-y-4">
          <h2 className="card-title text-6xl font-bold text-primaryColor">
            Fresh, Tasty, and Always Exceptional
          </h2>
          <p className="text-center px-9 text-lg">
            Discover a world of flavorful delights crafted with the freshest
            ingredients and a passion for perfection. Every dish is a
            celebration of taste, quality, and excellence, made to satisfy your
            cravings and leave you coming back for more!
          </p>
          <div className="">
            <Link to="/foods">
              <button className="px-6 py-3 font-bold rounded-full bg-primaryColor text-white text-base">
                See All Foods
              </button>
            </Link>
          </div>
        </div>
      </div>

      <div>
        <h1 className="text-center font-bold text-4xl mt-16">
          Toop Selling Foods
        </h1>
      </div>
      <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-10 gap-x-10 items-end">
        {homeFood.map((foods) => (
          <HomePageFoodsCards
            foods={foods}
            key={foods._id}
          ></HomePageFoodsCards>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
