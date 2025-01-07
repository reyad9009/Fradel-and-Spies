import React from "react";
import { Link } from "react-router-dom";

const HomePageFoodsCards = ({ foods }) => {
  const {
    _id,
    image,
    foodName,
    category,
    totalQuantity,
    price,
    email,
    name,
    foodOrigin,
    description,
    foodId,
  } = foods;
  return (
    <div>
      <div>
        <div className="card card-compact lg:w-[25rem] lg:h-[10] w-[22rem] flex flex-col border">
          <figure className="">
            <img className="w-[100%]" src={image} />
          </figure>
          <div className="card-body flex flex-grow justify-end ml-4">
            <span className="card-title font-bold text-2xl">{foodName}</span>
            <span className="font-semibold text-base">Price: {price} $</span>

            <span className="font-semibold text-base">
              Total Purchase: {totalQuantity}
            </span>
            <span className="font-semibold text-base">
              Food Origin: {foodOrigin}
            </span>
            <div className="card-actions justify-start">
              <Link to={`/foods/details/${_id}`}>
                <button className="px-6 py-3 font-bold rounded-full bg-primaryColor text-white text-base mt-2 mb-2">
                  View Details
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
     
    </div>
  );
};

export default HomePageFoodsCards;
