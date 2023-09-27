/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { Link } from "react-router-dom";
import Swal from 'sweetalert2'


const DetailsCard = ({card}) => {
    const {Id,Image,Title,Category_name,Description,Price ,bg_Background,bg_Category,text_Color,Title_Color} = card ||{};

const handleAddDonations = () =>{
     
const addFavoritiesArray = [];
    const favoritieDonations = JSON.parse(localStorage.getItem('favorities'));
    if(!favoritieDonations){
      addFavoritiesArray.push(card);
      localStorage.setItem('favorities',JSON.stringify(addFavoritiesArray));

      Swal.fire('Good job','Donation added succesfully !');
     
    }
    else{
       const isExist = favoritieDonations.find(card => card.Id=== Id)
       if(!isExist){
        addFavoritiesArray.push(...favoritieDonations, card);
        localStorage.setItem('favorities',JSON.stringify(addFavoritiesArray));
        Swal.fire('Good job','Donation added succesfully !');

       }
       else{
        Swal.fire('Good job','No duplicate !');
       }
    }
};
    
    return (
        <div>
               <div className="card lg:h-[570px] mt-12  lg:w-[700px] lg:ml-36 xl:ml-72 bg-base-100 shadow-xl relative">
  <figure><img className="w-full" src={Image} alt="Basic needs" /></figure>
  
  <div className="overlay absolute top-[140px] bottom-[241px] xl:top-[300px] xl:bottom-[160px] md:top-[340px] md:bottom-[160px] lg:top-72 lg:bottom-[181px] inset-0 bg-black opacity-50"></div>
  <div className="card-body">

 <button onClick={handleAddDonations}  
 style={{backgroundColor:bg_Background, color:Title_Color}} className="btn  absolute bottom-[260px]   lg:bottom-52 lg:left-3 md:bottom-48 md:left-9">{`Donate ${Price}`}</button>
    <h2 className="font-bold text-lg">{Title}</h2>
    <p className="text-sm">{Description?.text}</p>
    
    
  </div>
</div>
        </div>
    );
};

export default DetailsCard;