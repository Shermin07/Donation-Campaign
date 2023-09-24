
import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import DetailsCard from "../../Components/DetailsCard/DetailsCard";


const DonationDetails = () => {
const [card, setCard] = useState({}) ;
    
    

   const {Id} = useParams() ;
   const cards = useLoaderData() ;
   
    console.log(cards);
    useEffect(() =>{
        const findDetails = cards?.find(card => card.Id === Id)
        setCard(findDetails) 
    }
        ,[Id, cards])
   

    
    return (
        <div>
             <DetailsCard card = {card}></DetailsCard>
        </div>
    );
};

export default DonationDetails;