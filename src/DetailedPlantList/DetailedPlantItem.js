import React from 'react';
import './DetailedPlantList.css';

// img, name, genus, water, sun, & toxicity 
export default function DetailedPlantItem(props) {
  return <div className="detailed-plant-item">
    <img src={props.image} width={300} />
    <p>{props.name}</p>
    <p>{props.genus}</p>
    <p>{props.water}</p>
    <p>{props.sun}</p>
    <p>{props.toxicity}</p>
  </div>;
}
