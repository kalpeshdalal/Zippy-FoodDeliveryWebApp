import React from "react";
import OfferCard from "./Carousal";
import "react-multi-carousel/lib/styles.css";
import Navbar from "./Navbar";
import RestrauntCard from "./RestroCard";
import { Restrolist } from "./RestroCard";

import "./Home.css";


//config driven UI
const Home = () => {
  
  return (
    <div>
      <Navbar />
      <OfferCard />
      <div className="allcard">
        {Restrolist.map((restro, i) => (
          <RestrauntCard key={i} restro={restro} />
        ))}
      </div>
    </div>
  );
};

export default Home;
