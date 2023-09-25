/* eslint-disable no-unused-vars */

import { Link } from "react-router-dom";


const BasicNeedsCard = ({card}) => {
    const {Id,Image,Title,Category_name,Description,Price,bg_Background,bg_Category,text_Color,Title_Color} = card ||{};
    
  
    
    return (
        <div  >
          <Link to={`/DonationDetails/${Id}`} > <div className="card card-compact  bg-base-100 shadow-xl  ">
  <figure><img className="w-full" src={Image} alt="Basic needs" /></figure>

  <div className="pb-3 " style={{backgroundColor: `${bg_Background}`}} >
    <h2 className="pl-4" style={{backgroundColor: `${bg_Category}`}, { color: `${text_Color}`}} >{Category_name.text}</h2>
    <p className="pl-4" style={{color: `${Title_Color}`}}  >{Title}</p>
   
  </div>
</div> </Link>
        </div>
    );
};

export default BasicNeedsCard;