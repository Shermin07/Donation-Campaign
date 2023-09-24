import { NavLink } from "react-router-dom";
import Logo from "../Logo/Logo";


const Header = () => {
    return (
        <div className=" ">
           <div className="flex  justify-between  items-center   ">
        <Logo></Logo>
           <nav className=" ">
            <ul className="flex   gap-4 ">
           
                <li>
                <NavLink 
  to="/"
  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? " text-red-600 underline font-bold" : ""
  }
>
  Home
</NavLink>
                </li>

                <li>
                <NavLink 
  to="/Donation"
  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? " text-red-600 underline font-bold" : ""
  }
>
  Donation
</NavLink>
                </li>


                <li>
                <NavLink 
  to="/Statistics"
  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? " text-red-600 underline font-bold" : ""
  }
>
  Statistics
</NavLink>
                </li>


                </ul>
          </nav>

            </div>


        </div>
    );
};

export default Header;