import { useEffect, useState } from "react";
import DonationCard from "./DonationCard";


const Donation = () => {
    

    const [donations, setDonations] = useState([]) ;
    const [notFound, setNotFound] = useState(false);
    const [isShow, setIsShow] = useState(false) ;
    

    useEffect(() =>{
        const favoritieDonations = JSON.parse(localStorage.getItem('favorities'));
        if(favoritieDonations){
            setDonations(favoritieDonations);
        }
        else{
setNotFound('No data found')
        }

    } ,[]);
    const handleRemove = () =>{
        localStorage.clear() ;
        setDonations([]) ;
        setNotFound('No data found')
    }
    return (
        <div className=" md:ml-4 lg:ml-3 xl:ml-0 mb-7">
            {notFound ? <p className="h-[80vh] flex justify-center items-center">{notFound}</p> 
                :
            <div>
                {donations.length>7 && <button onClick={handleRemove}  className="px-7 rounded btn btn-success ml-[90px] md:ml-[250px] lg:ml-[360px] xl:ml-[500px] mt-4 font-semibold text-sm py-1  border-2">Delete all favorites</button>}
              
               
               
           
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
            {
               isShow ?  donations?.map(card => <DonationCard key={card.Id} card = {card}></DonationCard>) :

               donations?.slice(0,4).map(card => <DonationCard key={card.Id} card = {card}></DonationCard>)
            }
         </div>
         <button onClick={(e) =>{ setIsShow(!isShow); e.target.classList.add('hidden')}} className="px-7 rounded btn  btn-success mt-4 ml-[120px] md:ml-[290px] lg:ml-[400px] xl:ml-[550px] font-semibold text-sm py-1  border-2">See All</button>
         </div>
         }</div>
    );
};

export default Donation;