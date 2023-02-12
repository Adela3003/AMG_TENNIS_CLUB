import React from "react";
import "./RentACourt.css";
import clayCourt from "../../assets/clayCourt.jpg";
import grassCourt from "../../assets/grassCourt.jpg";
import hardCourt from "../../assets/hardCourt.jpeg";

const RentACourt = () => {
  return (
  <div>
    <h2 className="title">WE OFFER YOU 3 TYPES OF COURTS</h2> 
    <div className="courts">
     <div className="container1">
      <img className="img" src={clayCourt} alt="clayCourt" />
      <p className="type">Clay</p>
     </div>
     <div className="container2">
      <img className="img" src={grassCourt} alt="grassCourt" />
      <p className="type">Grass</p>
     </div>
     <div className="container3">
      <img className="img" src={hardCourt} alt="hardCourt" />
      <p className="type">Hard</p>
     </div>
    </div>
    <h2 className="price">PRICES FOR RENTAL</h2>
    <article className="prices">
      <h3 className="type">Clay</h3>
      <ul className="type">
         <li> Monday - Friday : 06:00 - 17:00 -- 10 euro/h </li>
         <li> Monday - Friday : 17:00 - 23:00 -- 15 euro/h </li>
         <li> Saturday - Sunday : 08:00 - 22:00 -- 13 euro/h </li>
      </ul>
      <h3 className="type">Grass</h3>
      <ul className="type">
         <li> Monday - Friday : 06:00 - 17:00 -- 14 euro/h </li>
         <li> Monday - Friday : 17:00 - 23:00 -- 20 euro/h </li>
         <li> Saturday - Sunday : 08:00 - 22:00 -- 17 euro/h </li>
      </ul>
      <h3 className="type">Hard</h3>
      <ul className="type">
         <li> Monday - Friday : 06:00 - 17:00 -- 12 euro/h </li>
         <li> Monday - Friday : 17:00 - 23:00 -- 17 euro/h </li>
         <li> Saturday - Sunday : 08:00 - 22:00 -- 15 euro/h </li>
      </ul>
    </article>
    <div className="info">Call us at 0040737624891 or send us an email at amg.club@tennis.com to make a reservation!</div>
   </div>
  );
};

export default RentACourt;
