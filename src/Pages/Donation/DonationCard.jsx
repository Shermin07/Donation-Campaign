/* eslint-disable no-unused-vars */


const DonationCard = ({card}) => {
    const {Id,Image,Title,Category_name,Description,Price ,bg_Background,bg_Category,text_Color,Title_Color} = card ||{};
    return (
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-3 mt-10">

              <div className="card card-side w-[378px] md:w-[350px] lg:w-[460px] xl:w-[600px] bg-base-100 shadow-xl">
  <figure className="w-ull" ><img className="h-[235px] md:h-[250px] w-full" src={Image} alt="Movie"/></figure>
  <div className="card-body">
    <h2  style={{color: text_Color}} className="card-title">{Category_name.text}</h2>
    <h2  style={{color: text_Color}} >{Price}</h2>
    <p  style={{color: text_Color}} >{Title}</p>
    <div className="card-actions ">
        <button  style={{backgroundColor: bg_Background, color: Title_Color}}  className="px-7 rounded font-semibold text-sm py-1  border-2">View Details</button>
     
    </div>
  </div>
</div>


        </div>

        
    );
};

export default DonationCard;