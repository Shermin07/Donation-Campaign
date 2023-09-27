import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import Donation from "../Pages/Donation/Donation";
import Statistics from "../Pages/Statistics/Statistics";
import DonationDetails from "../Pages/DonationDetails/DonationDetails";
import Error from "../Pages/Error/Error";


const myCreateRoute = createBrowserRouter([
    {
        path:'/',
        element: <MainLayout></MainLayout>,
        errorElement: <Error></Error>,
        children:[

   {
        path:'/',
        element: <Home></Home>,
        loader: ()=> fetch('/data.json')
   },
   {
    path:'/Donation',
    element:<Donation></Donation>,
    loader: ()=> fetch('./data.json')
    
   },
   {
    path:'/Statistics',
    element:<Statistics></Statistics>,
    loader: ()=> fetch('./data.json')
   },
   {
    path:'/DonationDetails/:Id',
    element: <DonationDetails></DonationDetails>,
    loader: () => fetch('./data.json')
   }


        ]
    }

])

export default myCreateRoute;