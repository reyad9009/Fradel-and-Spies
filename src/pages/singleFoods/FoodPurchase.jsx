import React, { useContext, useState } from "react";
import { Slide } from "react-awesome-reveal";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import { IoArrowBackOutline } from "react-icons/io5";
import moment from "moment";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import { AiFillLayout } from "react-icons/ai";

const FoodPurchase = () => {
  const foodPurchase = useLoaderData();
  const { user } = useContext(AuthContext);

  const {
    _id,
    image,
    foodName,
    category,
    quantity: defaultQuantity,
    price,
    email,
    name,
    foodOrigin,
    description,
  } = foodPurchase;
  const [food, setFood] = useState("");

  const [quantity, setQuantity] = useState(defaultQuantity || 0);

  const handleQuantityChange = (e) => {
    const inputValue = parseInt(e.target.value) || 1;
    const newInt = defaultQuantity - inputValue;
    setQuantity(newInt);
    
  };
  console.log(quantity);

  const FoodPurchase = (e) => {
    e.preventDefault();

    if (quantity > defaultQuantity) {
      toast.warn(`You can buy only ${defaultQuantity}`);
      return;
    }

    if (quantity <= 0) {
      toast.warn("Quantity must be greater than zero.");
      return;
    }

    if (quantity === 0) {
      toast.warn("Quantity must be greater than zero.");
      return;
    }

    const formData = new FormData(e.target);
    const initialData = Object.fromEntries(formData.entries());

    const purchasedFood = {
      ...initialData,
      quantity: parseInt(initialData.quantity),
      foodId: _id,
      image: image,
      description: description,
      foodOrigin: foodOrigin,
    };
    //console.log(purchasedFood);

    const updatedQuantity = {
      quantity: String(defaultQuantity - purchasedFood.quantity),
    };
    //console.log(updatedQuantity);

    // First POST request to purchase the food
    const purchaseRequest = fetch("https://fradel-and-spies-server.vercel.app/foods/purchase", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(purchasedFood),
    });

    // const UserPurchaseRequest = fetch(
    //   "https://fradel-and-spies-server.vercel.app/food/Purchase/user",
    //   {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify(purchasedFood),
    //   }
    // );

    const updateRequest = fetch(`https://fradel-and-spies-server.vercel.app/food/${_id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedQuantity),
    });

    // Handle both requests simultaneously
    Promise.all([purchaseRequest, updateRequest])
      .then(async ([purchaseRes, updateRes]) => {
        if (purchaseRes.ok && updateRes.ok) {
          const purchaseData = await purchaseRes.json();
          const updateData = await updateRes.json();
         // const UserPurchaseData = await userPurchaseReq.json();

          if (
            purchaseData.insertedId ||
            updateData.modifiedCount
           // UserPurchaseData.insertedId
          ) {
            Swal.fire({
              title: "Success!",
              text: `${foodName} Purchased and Database Updated Successfully`,
              icon: "success",
              confirmButtonText: "Ok",
            });
            e.target.reset();
            setFood(e.target.reset());
          }
        }
      })
      .catch((error) => {
        // console.error("Error:", error);
        // toast.error("An error occurred. Please try again later.");
      });
  };

  return (
    <div className="md:w-[100%] flex flex-col justify-center items-center h-auto pt-12">
      <Slide>
        <h2 className="text-3xl text-center mb-16 font-bold">
          Purchase your food
        </h2>
      </Slide>
      <div className="mb-5 flex items-center">
        <Link to={`/foods`}>
          <button className="btn flex items-center gap-3 font-bold">
            <IoArrowBackOutline />
            Back
          </button>
        </Link>
        <div>
          {quantity === 0 && (
            <p className="text-red-500 font-bold ml-3 text-wrap lg:pr-0 pr-5">
              {user?.displayName || "User"}, you cannot buy this item because it
              is not available.
            </p>
          )}
          {user?.email === email && (
            <p className="text-red-500 font-bold ml-3 text-wrap lg:pr-0 pr-5">
              {user?.displayName || "User"}, you cannot purchase your own food
              item.
            </p>
          )}
        </div>
      </div>

      <div className="flex flex-col lg:flex-row p-6 border dark:border-none rounded-xl w-[22rem] lg:w-full">
        <figure>
          <img src={image} className="w-[70rem]" alt="" />
        </figure>

        <div className="flex items-center justify-center w-[100%] ">
          <form
            onSubmit={FoodPurchase}
            className="dark:text-black lg:pl-6 w-full grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 lg:gap-y-10 gap-y-3 gap-x-6 items-end"
          >
            <div className="form-control">
              <label className="label">
                <span className="label-text font-bold dark:text-white">Food Name</span>
              </label>
              <input
                type="text"
                name="foodName"
                defaultValue={foodName}
                placeholder="Enter food name"
                className="input input-bordered focus:outline-black focus:border-[#ffffff]"
                required
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text font-bold dark:text-white">Price</span>
              </label>
              <input
                type="text"
                name="price"
                defaultValue={price}
                placeholder="Enter price"
                className="input input-bordered focus:outline-[#fb5402] focus:border-[#ffffff]"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-bold dark:text-white">Quantity</span>
              </label>
              <input
                type="number"
                name="quantity"
                onChange={handleQuantityChange}
                defaultValue={quantity}
                required
                className="input input-bordered focus:outline-[#fb5402] focus:border-[#ffffff]"
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text font-bold dark:text-white">Buyer Name</span>
              </label>
              <input
                type="text"
                name="name"
                className="input input-bordered focus:outline-[#fb5402] focus:border-[#ffffff]"
                readOnly
                defaultValue={user?.displayName}
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-bold dark:text-white">Buyer Email</span>
              </label>
              <input
                type="email"
                name="email"
                className="input input-bordered focus:outline-[#fb5402] focus:border-[#ffffff]"
                readOnly
                defaultValue={user?.email}
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-bold dark:text-white">Purchase Date</span>
              </label>
              <input
                name="date"
                className=" text-left pt-2 input input-bordered focus:outline-[#fb5402] focus:border-[#ffffff]"
                readOnly
                value={moment().format("L")}
              />
            </div>
            <input
              type="submit"
              value="Purchase"
              className="btn text-white font-bold bg-primary w-full"
              disabled={defaultQuantity <= 0 || user?.email === email}
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default FoodPurchase;
