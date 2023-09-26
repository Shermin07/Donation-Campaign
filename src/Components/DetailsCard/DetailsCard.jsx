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
  <figure className=" "><img className="w-[400px] md:w-[710px] md:h-[500px] lg:w-[1200px] lg:h-[400px]" src={Image} alt="Basic needs" /></figure>
  
  
  <div className="card-body">
  <div className="overlay absolute top-[130px] bottom-[280px] md:top-[400px] md:bottom-[180px] lg:top-72 lg:bottom-[181px] inset-0 bg-black opacity-50"></div>
 <button onClick={handleAddDonations}  
 style={{backgroundColor:bg_Background, color:Title_Color}} className="btn  absolute bottom-72   lg:bottom-52 lg:left-0 md:bottom-48 md:left-9">{`Donate ${Price}`}</button>
    <h2 className="font-bold text-lg">{Title}</h2>
    <p className="text-sm">{Description?.text}</p>
    
    
  </div>
</div>
        </div>
    );
};

export default DetailsCard;