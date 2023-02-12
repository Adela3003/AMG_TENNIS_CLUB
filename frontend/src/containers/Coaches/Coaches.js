import React, { useEffect, useState } from "react";
//import data from "../../data";
import "./Coaches.css";
import axios from 'axios';

function Coaches () {
  const [coaches, setCoaches] = useState([]);
  useEffect(() => {
      const fetchData = async() => {
        const result = await axios.get('/api/coaches');
        setCoaches(result.data);
      };
      fetchData();
  }, []);
  return (
    <div >
      <div className="coaches">
       { coaches.map(coach => (
        <div className="coach" key={coach.name}>
          <img className="imag" src={coach.image} alt={coach.name} />
          <div className="coach-info">
          <p> {coach.name}</p>
          <p> {coach.age}</p>
          <p> {coach.description}</p>
          </div>
        </div>
      ))}
      </div>
   </div>
  );
};

export default Coaches;
