import React, { useContext, useState } from "react";
import { Slide } from "react-awesome-reveal";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import { IoArrowBackOutline } from "react-icons/io5";
import moment from "moment";
import { toast } from "react-toastify";
import Swal from "sweetalert2";

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

  const [quantity, setQuantity] = useState(defaultQuantity || 1);

  const handleQuantityChange = (e) => {
    const inputValue = parseInt(e.target.value) || 0;
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
    if (quantity < 0) {
      toast.warn(`Quantity cannot be negative`);
      return;
    }

    const formData = new FormData(e.target);
    const initialData = Object.fromEntries(formData.entries());

    const purchasedFood = {
      ...initialData,
      quantity: initialData.quantity,
      foodId: _id,
      image: image,
    };
    console.log(purchasedFood);

    const updatedQuantity = {
      quantity: String(quantity),
    };
    console.log(updatedQuantity);

    // First POST request to purchase the food
    const purchaseRequest = fetch("http://localhost:5000/foods/purchase", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(purchasedFood),
    });

    const updateRequest = fetch(`http://localhost:5000/food/${_id}`, {
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

          if (purchaseData.insertedId || updateData.modifiedCount) {
            Swal.fire({
              title: "Success!",
              text: `${foodName} Purchased and Database Updated Successfully`,
              icon: "success",
              confirmButtonText: "Ok",
            });
            e.target.reset();
          }
        }
      })
      .catch((error) => {
        // console.error("Error:", error);
        // toast.error("An error occurred. Please try again later.");
      });
  };

  return (
    <div className="md:w-[100%] h-auto">
      <Slide>
        <h2 className="text-3xl text-center mb-16 font-bold">
          Add your Food here
        </h2>
      </Slide>
      <div className="mb-5">
        <Link to={`/foods/details/${_id}`}>
          <button className="btn flex items-center gap-3 font-bold">
            <IoArrowBackOutline />
            Back
          </button>
        </Link>
      </div>
      <div className="flex flex-col lg:flex-row p-6 border rounded-xl w-[22rem] lg:w-full">
        <figure>
          <img src={image} className="w-[70rem]" alt="" />
        </figure>

        <div className="flex items-center justify-center w-[100%] ">
          <form
            onSubmit={FoodPurchase}
            className="pl-6 w-full grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-y-10 gap-x-6 items-end"
          >
            <div className="form-control">
              <label className="label">
                <span className="label-text font-bold">Food Name</span>
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
                <span className="label-text font-bold">Price</span>
              </label>
              <input
                type="text"
                name="price"
                defaultValue={price}
                placeholder="Enter price"
                className="input input-bordered focus:outline-[#f55353] focus:border-[#ffffff]"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-bold">Quantity</span>
              </label>
              <input
                type="number"
                name="quantity"
                onChange={handleQuantityChange}
                defaultValue={quantity}
                required
                className="input input-bordered focus:outline-[#f55353] focus:border-[#ffffff]"
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text font-bold">Buyer Name</span>
              </label>
              <input
                type="text"
                name="name"
                className="input input-bordered focus:outline-[#f55353] focus:border-[#ffffff]"
                readOnly
                defaultValue={user?.displayName}
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-bold">Buyer Email</span>
              </label>
              <input
                type="email"
                name="email"
                className="input input-bordered focus:outline-[#f55353] focus:border-[#ffffff]"
                readOnly
                defaultValue={user?.email}
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-bold">Purchase Date</span>
              </label>
              <input
                name="date"
                className=" text-left pt-2 input input-bordered focus:outline-[#f55353] focus:border-[#ffffff]"
                readOnly
                value={moment().format("L")}
              />
            </div>
            <input
              type="submit"
              value="Purchase"
              className="btn text-white font-bold bg-button w-full"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default FoodPurchase;

// const FoodPurchase = (e) => {
//   e.preventDefault();
//   if (quantity > defaultQuantity) {
//     toast.warn(`You can buy only ${defaultQuantity}`);
//     return;
//   }
//   if (quantity < 0) {
//     toast.warn(`You can buy only ${defaultQuantity}`);
//     return;
//   }
//   const formData = new FormData(e.target);
//   const initialData = Object.fromEntries(formData.entries());
//   const purchasedFood = {
//     ...initialData,
//     foodId: _id,
//     image: image,
//   };
//   console.log(purchasedFood);
//   fetch("http://localhost:5000/foods/purchase", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(purchasedFood),
//   })
//     .then((res) => res.json())
//     .then((data) => {
//       if (data.insertedId) {
//         Swal.fire({
//           title: "Success!",
//           text: `${foodName} Purchase Successfully`,
//           icon: "success",
//           confirmButtonText: "Ok",
//         });
//         e.target.reset();
//       }
//     })
//     .catch((error) => {
//       console.error("Error:", error);
//     });

//     const updatedPriceData = {
//       price: prices,
//     };
//     console.log(updatedPriceData);

//   fetch(`food/${_id}`, {
//     method: "PATCH",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(updatedPriceData),
//   })
//     .then((res) => res.json())
//     .then((data) => {
//       console.log(data);
//     });
// };
