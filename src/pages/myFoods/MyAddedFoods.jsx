import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import MyAddedFoodsCard from "./MyAddedFoodsCard";
import axios from "axios";

const MyAddedFoods = () => {
  const [myFood, setMyFood] = useState([]);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    
    // fetch(`https://fradel-and-spies-server.vercel.app/my-foods/${user?.email}`)
    //   .then((res) => res.json())
    //   .then((data) => setMyFood(data))
    
    // Fetch data for the logged-in user's email
    axios
      .get(
        `https://fradel-and-spies-server.vercel.app/my-foods/${user?.email}`,
        {
          withCredentials: true,
        }
      )
      .then((res) => setMyFood(res.data));
  }, [user?.email]);
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-10 gap-x-10 items-end">
        {myFood.map((myFood) => (
          <MyAddedFoodsCard myFood={myFood} key={myFood._id}></MyAddedFoodsCard>
        ))}
      </div>
    </div>
  );
};

export default MyAddedFoods;
