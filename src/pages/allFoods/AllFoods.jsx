import React, { useContext, useState } from "react";
import { useLoaderData } from "react-router-dom";
import AllFoodsDetails from "./AllFoodsDetails";
import allFoodBg from "../../assets/allFoodbg.svg";
import { AuthContext } from "../../provider/AuthProvider";
import Loading from "../loading/Loading";

const AllFoods = () => {
  const allFoods = useLoaderData();
  const [searchQuery, setSearchQuery] = useState("");
  const { loading } = useContext(AuthContext);

  // Filter foods based on the search query
  const filteredFoods = allFoods.filter((food) =>
    food.foodName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="w-[100%] mt-12 flex flex-col justify-center items-center">
      {loading ? (
        <Loading></Loading>
      ) : (
        <>
          <div className="relative">
            <figure className="flex justify-center items-center">
              <img src={allFoodBg} alt="" />
              <h1 className="absolute lg:text-6xl lg:top-[5rem] lg:left-[32rem] font-bold top-5">
                All Foods
              </h1>
            </figure>
          </div>
          <h1 className="text-center font-bold text-4xl mt-16 mb-10">
            Choice Your Foods
          </h1>
          {/* Search Bar */}
          <div className="mb-10 flex justify-center w-[100%]">
            <input
              type="text"
              placeholder="Search foods by name..."
              className="input input-bordered lg:w-1/2 text-lg p-4 focus:outline-[#fb5402] focus:border-transparent"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          {/* Display Filtered Foods */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-10 gap-x-10 items-end">
            {filteredFoods.length > 0 ? (
              filteredFoods.map((food) => (
                <AllFoodsDetails key={food._id} allFoods={food} />
              ))
            ) : (
              <p className="text-center col-span-full text-2xl text-primaryColor font-bold ">
                No foods found.
              </p>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default AllFoods;
