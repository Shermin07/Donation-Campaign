

const Banner = () => {
    return (
        <div>
          
          <div className="hero h-[500px]   top-0 right-0 " style={{backgroundImage: 'url(${})'}}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-2xl font-bold">I Grow By Helping People In Need</h1>
      <div>
      <input type="text" placeholder="Type here" className="input input-primary w-full max-w-xs relative" />
      <button className="btn btn-active btn-primary absolute top-42 right- -28">Search</button>
      
      </div>
     
     
    </div>
  </div>
</div>  
        </div>
    );
};

export default Banner;
