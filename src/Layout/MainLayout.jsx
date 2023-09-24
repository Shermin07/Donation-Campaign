import { Outlet } from "react-router-dom";

import Header from "../Components/Header/Header";


const MainLayout = () => {
    return (
        <div className="mx-w-screen-xl max-auto mx-8 mt-2">
           <Header></Header>
           <div>
            <Outlet></Outlet>
            </div> 
        </div>
    );
};

export default MainLayout;