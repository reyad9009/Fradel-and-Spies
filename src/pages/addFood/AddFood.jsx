import React, { useContext } from "react";
import { Slide } from "react-awesome-reveal";
import { AuthContext } from "../../provider/AuthProvider";
import Swal from "sweetalert2";

const AddFood = () => {
  const { user } = useContext(AuthContext);
  const handleAddFood = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const initialData = Object.fromEntries(formData.entries());
    const { ...newFood } = initialData;

    //console.log(newFood);

    fetch("http://localhost:5000/food", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newFood),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: `${newFood.foodName} Added Successfully`,
            icon: "success",
            confirmButtonText: "Ok",
          });
          e.target.reset();
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div className="md:w-[100%] h-auto">
      <Slide>
        <h2 className="text-3xl text-center mb-16 font-bold">
          Add your Food here
        </h2>
      </Slide>
      <div className="px-12 pt-10 pb-20 rounded-xl shadow-md">
        <form
          onSubmit={handleAddFood}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-y-10 gap-x-10 items-end"
        >
          <div className="form-control">
            <label className="label">
              <span className="label-text font-bold">Item Name</span>
            </label>
            <input
              type="text"
              name="foodName"
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
            value="Add Item"
            className="btn font-bold bg-primaryColor w-full"
          />
        </form>
      </div>
    </div>
  );
};

export default AddFood;


// https://i.ibb.co.com/qF4v8bm/Beef-Steak.png
// https://i.ibb.co.com/6WMrZgz/Chicken-Biryani.png
// https://i.ibb.co.com/X79V0HQ/Creme-Brulee.png
// https://i.ibb.co.com/b2qsFbM/Croissant.png
// https://i.ibb.co.com/3YVH6Rc/Falafel-Wrap.png
// https://i.ibb.co.com/m6hqYC5/Kimchi-Fried-Rice.png
// https://i.ibb.co.com/v3VCZHK/Margherita-Pizza.png
// https://i.ibb.co.com/TwQrsp3/Pad-Thai.png
// https://i.ibb.co.com/n8kmwwN/Pav-Bhaji.png
// https://i.ibb.co.com/kcCMRdr/Sushi-Platter.png
// https://i.ibb.co.com/3NVYV2R/Tacos-Al-Pastor.png
// https://i.ibb.co.com/bzy4gV5/Tom-Yum-Soup.png

