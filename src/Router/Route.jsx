import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import Donation from "../Pages/Donation/Donation";


const myCreateRoute = createBrowserRouter([
    {
        path:'/',
        element: <MainLayout></MainLayout>,
        children:[

   {
        path:'/',
        element: <Home></Home>
   },
   {
    path:'/Donation',
    element:<Donation></Donation>
   }


        ]
    }

])

export default myCreateRoute;