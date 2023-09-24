import BasicNeedsCard from "../BasicNeedsCard/BasicNeedsCard";



const Cards = ({cards}) => {
    
    return (
        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 mt-12">
            {
                cards?.map(card => <BasicNeedsCard key={card.id} card = {card}></BasicNeedsCard>)
            }
          </div>
        </div>
    );
};

export default Cards;