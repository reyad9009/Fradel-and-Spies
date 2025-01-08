import React from "react";
import shef1 from "../../../assets/shef1.svg";
import shef2 from "../../../assets/shef2.svg";
import shef3 from "../../../assets/shef3.svg";

const Chefs = () => {
  return (
    <div className="flex flex-col justify-center items-center my-28">
      <h1 className="font-bold text-4xl mb-10">Meet Our Chefs</h1>
      <div className="flex lg:flex-row flex-col">
        <div className="flex flex-col justify-between items-center">
          <img src={shef3} alt="" />
          <h1 className="font-bold text-2xl">Dani Martinez</h1>
          <p className="text-center text-gray-600 mt-2 text-lg px-16 text-wrap">
            A culinary artist specializing in fusion cuisine, blending global
            flavors into unique, unforgettable dishes.
          </p>
        </div>
        <div className="flex flex-col justify-between items-center">
          <img src={shef1} alt="" />
          <h1 className="font-bold text-2xl">Alfredo Torres</h1>
          <p className="text-center text-gray-600 mt-2 text-lg px-16 text-wrap">
            An expert in traditional Italian cuisine, known for crafting
            handmade pasta and rich, authentic flavors.
          </p>
        </div>
        <div className="flex flex-col justify-between items-center">
          <img src={shef2} className="" alt="" />
          <h1 className="font-bold text-2xl">Daniel Gallego</h1>
          <p className="text-center text-gray-600 mt-2 text-lg px-16 text-wrap">
            A master of patisserie, creating exquisite desserts that are as
            stunning as they are delicious.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Chefs;
