
import { NavLink } from "react-router-dom";
const Navber = () => {
    return (
        <div>
          <nav>
            <ul>
                <li>
                <NavLink 
  to="/"
  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? " text-red-600 underline font-bold" : ""
  }
>
  Home
</NavLink>;
                </li>
            </ul>
          </nav>
        </div>
    );
};

export default Navber;