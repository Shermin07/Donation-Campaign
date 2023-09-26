

const Banner = () => {
    return (
        <div>
          
          <div className="hero h-[500px]  top-0 right-0 " style={{backgroundImage: 'url(https://thumbs.dreamstime.com/b/good-health-good-life-female-hand-chalk-writing-text-blue-background-97044786.jpg)'}}>
  <div className="hero-overlay backdrop-blur-md bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content ">
    <div className="max-w-md">
      <h1 className="mb-5 text-2xl ml-3 md:ml-12 lg:ml-16 font-bold">I Grow By Helping People In Need</h1>
      <div>
      <input type="text" placeholder="Type here" className="input input-primary w-full max-w-xs relative" />
      <button className="btn btn-active btn-primary md:absolute md:top-42 md:right- -28">Search</button>
      
      </div>
     
     
    </div>
  </div>
</div>  
        </div>
    );
};

export default Banner;
