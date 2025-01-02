import React from "react";
import { IoArrowBackOutline } from "react-icons/io5";
import { Link, useLoaderData } from "react-router-dom";

const SingleFood = () => {
  const singleFood = useLoaderData();
  const {
    _id,
    image,
    foodName,
    category,
    quantity,
    price,
    email,
    name,
    foodOrigin,
    description,
  } = singleFood;

  return (
    <div>
      <div className="mb-5">
        <Link to="/foods">
          <button className="btn flex items-center gap-3 font-bold">
            <IoArrowBackOutline />
            Back
          </button>
        </Link>
      </div>
      <div className="flex flex-col lg:flex-row lg:justify-stretch gap-16 p-6 border rounded-xl w-[22rem] lg:w-full">
        <figure>
          <img src={image} className="w-[800px] rounded-lg" />
        </figure>

        <div className="flex items-center w-[100%]  justify-between">
          <div className="flex flex-col space-y-2">
            <span className="card-title font-bold text-2xl">{foodName}</span>
            <span className="font-semibold text-base">Price: {price} $</span>

            <span className="font-semibold text-base">
              Quantity: {quantity}
            </span>
            <span className="font-semibold text-base">
              Food Origin: {foodOrigin}
            </span>
            <span className="font-semibold text-base">
              Category: {category}
            </span>
            <span className="font-semibold text-base">
              Description: {description}
            </span>
            <div>
              <Link to={`/foods/details/purchase/${_id}`}>
                <button className="btn bg-[#f55353] mt-4 text-white text-lg">
                  Purchase
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleFood;
