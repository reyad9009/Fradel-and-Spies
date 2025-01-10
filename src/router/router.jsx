import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import AddFood from "../pages/addFood/AddFood";
import AllFoods from "../pages/allFoods/AllFoods";
import SingleFood from "../pages/singleFoods/SingleFood";
import FoodPurchase from "../pages/singleFoods/FoodPurchase";
import MyAddedFoods from "../pages/myFoods/MyAddedFoods";
import UpdateMyFoods from "../pages/myFoods/UpdateMyFoods";
import MyOrders from "../pages/myOrders/MyOrders";
import HomePage from "../pages/Home/HomePage";
import Gallery from "../pages/gallery/Gallery";
import Error from "../pages/error/Error";
import PrivateRout from "./PrivateRout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <HomePage></HomePage>,
        loader: () =>
          fetch("https://fradel-and-spies-server.vercel.app/home-foods"),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/add-food",
        element: (
          <PrivateRout>
            <AddFood></AddFood>
          </PrivateRout>
        ),
      },
      {
        path: "/foods",
        element: <AllFoods></AllFoods>,
        loader: () => fetch("https://fradel-and-spies-server.vercel.app/foods"),
      },
      {
        path: "/foods/details/:id",
        element: <SingleFood></SingleFood>,
        loader: ({ params }) =>
          fetch(
            `https://fradel-and-spies-server.vercel.app/foods/details/${params.id}`
          ),
      },
      {
        path: "/foods/details/purchase/:id",
        element: (
          <PrivateRout>
            <FoodPurchase></FoodPurchase>
          </PrivateRout>
        ),
        loader: ({ params }) =>
          fetch(
            `https://fradel-and-spies-server.vercel.app/foods/details/purchase/${params.id}`
          ),
      },
      {
        path: "/my-foods",
        element: (
          <PrivateRout>
            <MyAddedFoods></MyAddedFoods>
          </PrivateRout>
        ),
      },
      {
        path: "/my-foods/update/:id",
        element: (
          <PrivateRout>
            <UpdateMyFoods></UpdateMyFoods>
          </PrivateRout>
        ),
        loader: ({ params }) =>
          fetch(
            `https://fradel-and-spies-server.vercel.app/my-foods/update/${params.id}`
          ),
      },
      {
        path: "/my-orders",
        element: (
          <PrivateRout>
            <MyOrders></MyOrders>
          </PrivateRout>
        ),
      },
      {
        path: "/gallery",
        element: <Gallery></Gallery>,
      },

      //https://fradel-and-spies-server.vercel.app/foods/details/purchase/67746a62f9cd0f3b095a8d36
    ],
  },
]);
export default router;
