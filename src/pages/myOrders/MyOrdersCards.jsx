import React from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const MyOrdersCards = ({ myFoods, setMyFood, myFood }) => {
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
    date,
  } = myFoods;

  const handelDeleteMyOrder = (_id) => {
    //console.log(_id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://fradel-and-spies-server.vercel.app/my-orders/delete/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            // console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your coffee has been deleted.",
                icon: "success",
              });
              const remaining = myFood.filter(
                (equipmentCard) => equipmentCard._id !== _id
              );
              setMyFood(remaining);
            }
          });
      }
    });
  };
  return (
    <div className="flex justify-center items-center">
      <div className="flex flex-col lg:flex-row lg:justify-stretch gap-8 p-5 border dark:border-none dark:shadow-lg dark:shadow-[#000000] rounded-xl w-[22rem] lg:w-full">
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
            <span className="font-semibold text-base">Added Time: {date}</span>
            <span className="font-semibold text-base">Food Owner: {name}</span>
            <div>
              <Link>
                <button
                  onClick={() => handelDeleteMyOrder(_id)}
                  className={`btn bg-primary mt-4 text-white text-lg dark:border-none`}
                >
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
