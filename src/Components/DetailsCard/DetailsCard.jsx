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
               <div className="card h-[570px] mt-12  w-[700px] ml-56 bg-base-100 shadow-xl relative">
  <figure className=" "><img className="w-[1200px] h-[400px]" src={Image} alt="Basic needs" /></figure>
  
  
  <div className="card-body">
  <div className="overlay absolute top-64 bottom-[197px] inset-0 bg-black opacity-50"></div>
 <button onClick={handleAddDonations}  
 style={{backgroundColor:bg_Background, color:Title_Color}} className="btn  absolute bottom-52 left-0">{`Donate ${Price}`}</button>
    <h2 className="font-bold text-lg">{Title}</h2>
    <p>{Description?.text}</p>
    
    
  </div>
</div>
        </div>
    );
};

export default DetailsCard;