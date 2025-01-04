import React from "react";
import { Link } from "react-router-dom";

const MyOrdersCards = ({ myFood }) => {
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
    date
  } = myFood;
  return (
    <div>
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
             Added Time: {date}
            </span>
            <span className="font-semibold text-base">
              Food Owner: {name}
            </span>
         

            
            <div>
              <Link >
                <button className={`btn bg-[#f55353] mt-4 text-white text-lg`}>
                  Delete
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyOrdersCards;
