import Cards from "../../Components/Cards/Cards";
import { useLoaderData } from "react-router-dom";

import Banner from "../../Components/Header/Banner/Banner";


const Home = () => {
    const cards = useLoaderData();
    return (
        <div>
          <div className="mt-6 mb-4"> <Banner ></Banner></div>
        <Cards cards = {cards}></Cards>
        </div>
    );
};

export default Home;