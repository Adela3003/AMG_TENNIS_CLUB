import React from "react";
import "./index.css";
import court from "../../assets/court.jpg";
import Accordion from "../../components/Accordion/Accordion";

const Home = () => {
  return (
    <div>
       <img className="court" 
         src={court}
         alt="court" />
       <div className="aboutUs">
          <Accordion title="ABOUT US" content="Easily accessible both by personal car and public transport, 
            AMG TENNIS CLUB satisfies your need for movement and detachment from everyday stress. The tennis centre is placed in the middle of a generous area and surrounded by a semi-wild nature, 
            which makes it the perfect place to go to and play tennis with your friends or a professional coach. 
            AMG TENNIS CLUB was founded in 2015 and over the years our showcase has been enriched with many trophies from both professional players and amateurs." />
       </div>
    </div>
  );
};

export default Home;
