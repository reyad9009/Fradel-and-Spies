import React, { useContext } from "react";
import { Slide } from "react-awesome-reveal";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import { IoArrowBackOutline } from "react-icons/io5";
import Swal from "sweetalert2";

const UpdateMyFoods = () => {
  const { user } = useContext(AuthContext);
  const updateFood = useLoaderData();
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
  } = updateFood;

  const handleAddFood = (e) => {
      e.preventDefault();
  
      const formData = new FormData(e.target);
      const initialData = Object.fromEntries(formData.entries());
      const { ...updatedFood } = initialData;
  
      //console.log(updatedFood);
  
      fetch(`https://fradel-and-spies-server.vercel.app/my-foods/update/${_id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedFood),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.modifiedCount > 0) {
            Swal.fire({
              title: "Update Success!",
              text: `${updatedFood.foodName} Added Successfully`,
              icon: "success",
              confirmButtonText: "Ok",
            });
          }
        })
        .catch((error) => {
         // console.error("Error:", error);
        });
    };

  return (
    <div className="md:w-[100%] h-auto">
      <Slide>
        <h2 className="text-3xl text-center mb-16 font-bold">
          Update your Food here
        </h2>
      </Slide>
      <div className="mb-5">
        <Link to="/my-foods">
          <button className="btn flex items-center gap-3 font-bold">
            <IoArrowBackOutline />
            Back
          </button>
        </Link>
      </div>
      <div className="px-12 pt-10 pb-20 rounded-xl shadow-md">
        <form onSubmit={handleAddFood} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-y-10 gap-x-10 items-end">
          <div className="form-control">
            <label className="label">
              <span className="label-text font-bold">Item Name</span>
            </label>
            <input
              type="text"
              name="foodName"
              defaultValue={foodName}
              placeholder="Enter food name"
              className="input input-bordered focus:outline-[#fb5402] focus:border-[#ffffff]"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text font-bold">Food Image URL</span>
            </label>
            <input
              type="url"
              name="image"
              defaultValue={image}
              placeholder="Enter image URL"
              className="input input-bordered focus:outline-[#fb5402] focus:border-[#ffffff]"
              required
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text font-bold">Food Category Name</span>
            </label>
            <input
              type="text"
              name="category"
              defaultValue={category}
              placeholder="Enter category name"
              className="input input-bordered focus:outline-[#fb5402] focus:border-[#ffffff]"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text font-bold">Quantity</span>
            </label>
            <input
              type="text"
              name="quantity"
              defaultValue={quantity}
              placeholder="Enter Quantity"
              className="input input-bordered focus:outline-[#fb5402] focus:border-[#ffffff]"
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
              className="input input-bordered focus:outline-[#fb5402] focus:border-[#ffffff]"
              required
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text font-bold">Food Origin</span>
            </label>
            <input
              type="text"
              name="foodOrigin"
              defaultValue={foodOrigin}
              placeholder="Food Origin (Country)"
              className="input input-bordered focus:outline-[#fb5402] focus:border-[#ffffff]"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text font-bold">Description</span>
            </label>
            <textarea
              name="description"
              defaultValue={description}
              placeholder="Enter description"
              className="textarea textarea-bordered focus:outline-[#fb5402] focus:border-[#ffffff]"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text font-bold">User Email</span>
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
              <span className="label-text font-bold">User Name</span>
            </label>
            <input
              type="text"
              name="name"
              className="input input-bordered focus:outline-[#fb5402] focus:border-[#ffffff]"
              readOnly
              defaultValue={user?.displayName}
            />
          </div>

          <input
            type="submit"
            value="Update"
            className="btn font-bold bg-primary w-full"
          />
        </form>
      </div>
    </div>
  );
};

export default UpdateMyFoods;
