import React from "react";
import mission from "../../../assets/mission.svg";
import img_1 from "../../../assets/1.svg";
import img_2 from "../../../assets/2.svg";
import img_3 from "../../../assets/3.svg";
import img_4 from "../../../assets/4.svg";

const Mission = () => {
  return (
    <div className="flex flex-col justify-center items-center my-32 w-full">
      <h1 className="text-4xl font-bold mb-4">Our Mission</h1>
      <p className="text-center text-gray-600 max-w-2xl mb-10">
        At the heart of our mission is a commitment to bringing people together
        through exceptional food, sustainability, and innovation. We strive to
        create memorable dining experiences while supporting local communities
        and delivering the highest quality ingredients.
      </p>
      <div className="flex lg:flex-row flex-col justify-between items-center gap-8 w-[100%]">
        <div className="grid grid-cols-2 lg:gap-10 gap-5">
          <div className="flex flex-col items-center">
            <img src={img_1} alt="" className="" />
            <p className="text-lg font-bold mt-2 text-center">Fresh Ingredients</p>
          </div>
          <div className="flex flex-col items-center">
            <img src={img_2} alt="" className="" />
            <p className="text-lg font-bold mt-2 text-center">Sustainable Practices</p>
          </div>
          <div className="flex flex-col items-center">
            <img src={img_3} alt="" className="" />
            <p className="text-lg font-bold mt-2 text-center">Exceptional Chefs</p>
          </div>
          <div className="flex flex-col items-center">
            <img src={img_4} alt="" className="" />
            <p className="text-lg font-bold mt-2 text-center">Memorable Dining</p>
          </div>
        </div>
        <div>
          <img
            src={mission}
            alt="Mission Visual"
            className="w-[50rem]"
          />
        </div>
      </div>
    </div>
  );
};

export default Mission;
