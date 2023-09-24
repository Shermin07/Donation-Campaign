import { Outlet } from "react-router-dom";
import Navber from "../Components/Header/Navber/Navber";


const MainLayout = () => {
    return (
        <div>
            <Navber></Navber>
           <div>
            <Outlet></Outlet>
            </div> 
        </div>
    );
};

export default MainLayout;