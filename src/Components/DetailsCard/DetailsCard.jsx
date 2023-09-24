

const DetailsCard = ({card}) => {
    const {Image,Title,Category_name,Description,Price} = card ||{};
    return (
        <div>
               <div className="card h-[470px]   bg-base-100 shadow-xl">
  <figure><img className="h-[300px] rounded" src={Image} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="font-bold text-lg">{Title}</h2>
   <h2>{Description.text}</h2>
    
    
  </div>
</div>
        </div>
    );
};

export default DetailsCard;