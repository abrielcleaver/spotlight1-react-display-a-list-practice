
import React from 'react';

// img, name, genus, water, sun, & toxicity 
export default function DetailedPlantItem(props) {
  return <div className="detailed-plant-item">
    <img src={props.image} />
    
    {/* <p>{props.name}</p> */}
    <p>{props.genus}</p>
  </div>;
}
