import React from "react";
import homePageBg from '../../assets/homePageBg.svg';
import { Link } from "react-router-dom";
const HomePageBanner = () => {
  return (
    <div>
      <div className="card bg-base-100 image-full">
        <figure>
          <img src={homePageBg} className="" alt="Shoes" />
        </figure>
        <div className="card-body flex flex-col items-center justify-center mt-[5%] space-y-4 flex-wrap">
          <h2 className="card-title text-6xl font-bold text-primaryColor text-wrap">
            Fresh, Tasty, and Always Exceptional
          </h2>
          <p className="text-center px-9 text-lg text-wrap">
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
    </div>
  );
};

export default HomePageBanner;
