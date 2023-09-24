/* eslint-disable no-unused-vars */

import { Link } from "react-router-dom";


const BasicNeedsCard = ({card}) => {
    const {Id,Image,Title,Category_name,Description,Price} = card ||{};
    

    
    return (
        <div>
          <Link to={`/DonationDetails/${Id}`} > <div className="card card-compact  bg-base-100 shadow-xl  ">
  <figure><img src={Image} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className ={`text-${Category_name.textColor}`} >{Category_name.text}</h2>
    <p >{Title}</p>
   
  </div>
</div> </Link>
        </div>
    );
};

export default BasicNeedsCard;