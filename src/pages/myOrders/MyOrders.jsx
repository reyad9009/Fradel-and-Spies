import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import MyOrdersCards from "./MyOrdersCards";

const MyOrders = () => {
  const [myFood, setMyFood] = useState([]);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    // Fetch data for the logged-in user's email
    fetch(`http://localhost:5000/my-orders/${user?.email}`)
      .then((res) => res.json())
      .then((data) => setMyFood(data)) // Set data to state

  }, [user?.email]); // Re-fetch when userEmail changes
  return (
    <div>
      <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-y-10 gap-x-10 items-end">
        {myFood.map((myFoods) => (
          <MyOrdersCards setMyFood={setMyFood} myFood={myFood}  myFoods={myFoods} key={myFoods._id}></MyOrdersCards>
        ))}
      </div>
    </div>
  );
};

export default MyOrders;
