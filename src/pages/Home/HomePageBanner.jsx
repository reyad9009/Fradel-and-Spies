import React from "react";
import homePageBg from '../../assets/homePageBg.png';
import { Link } from "react-router-dom";
const HomePageBanner = () => {
  return (
    <div >
      <div className="card bg-base-100 dark:bg-gray-900/90 image-full relative overflow-hidden">
  {/* Add a subtle dark overlay in dark mode */}
  <div className="absolute inset-0 bg-black/10 dark:bg-black/40 z-10"></div>
  
  <figure>
    <img src={homePageBg} className="dark:brightness-95" />
  </figure>
  
  <div className="card-body flex lg:flex-col items-center mt-12 space-y-4 flex-wrap relative z-20">
    <h2 className="card-title text-6xl font-bold text-primaryColor dark:text-primaryColor/90 text-wrap text-center">
      Fresh, Tasty, and Always Exceptional
    </h2>
    <span className="text-center px-9 text-lg text-wrap dark:text-gray-300">
      Discover a world of flavorful delights crafted with the freshest
      ingredients and a passion for perfection. Every dish is a
      celebration of taste, quality, and excellence, made to satisfy your
      cravings and leave you coming back for more!
    </span>
    <div className="z-auto">
      <Link to="/foods">
        <button className="z-50 px-6 py-3 font-bold rounded-full bg-primary hover:bg-primary/90 dark:bg-primary/80 dark:hover:bg-primary text-white text-base transition-colors duration-300">
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
