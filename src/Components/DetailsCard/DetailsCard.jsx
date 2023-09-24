

const DetailsCard = ({card}) => {
    const {Image,Title,Category_name,Description,Price} = card ||{};
    return (
        <div>
               <div className="card h-[570px] mt-12  w-[700px] ml-56 bg-base-100 shadow-xl">
  <figure className=" "><img className="w-[1200px] h-[400px]" src={Image} alt="Basic needs" /></figure>
  <div className="card-body">
    <h2 className="font-bold text-lg">{Title}</h2>
    <p>{Description?.text}</p>
    
    
  </div>
</div>
        </div>
    );
};

export default DetailsCard;