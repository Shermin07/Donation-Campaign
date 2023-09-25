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
        localStorage.clear ;
        setDonations([]) ;
        setNotFound('No data found')
    }
    return (
        <div>
            {notFound ? <p className="h-[80vh] flex justify-center items-center">{notFound}</p> 
                :
            <div>
                {donations.length>0 && <button onClick={handleRemove}  className="px-7 rounded btn btn-success ml-[90px] md:ml-[250px] lg:ml-[360px] xl:ml-[500px] mt-4 font-semibold text-sm py-1  border-2">Delete all favorites</button>}
              
               
               
           
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
            {
               isShow ?  donations?.map(card => <DonationCard key={card.Id} card = {card}></DonationCard>) :

               donations?.slice(0,4).map(card => <DonationCard key={card.Id} card = {card}></DonationCard>)
            }
         </div>
         <button onClick={() => setIsShow(!isShow)} className="px-7 rounded btn  btn-success mt-4 ml-[120px] md:ml-[400px] xl:ml-[510px] font-semibold text-sm py-1  border-2">{isShow ? 'See Less' : 'See More'}</button>
         </div>
         }</div>
    );
};

export default Donation;