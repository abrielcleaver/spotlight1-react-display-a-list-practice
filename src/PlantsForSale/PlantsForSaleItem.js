import React from 'react';
import './PlantsForSale.css';


export default function PlantsForSaleItem(props) {
  return <div className="for-sale-item">
    <p>{props.name}</p>
    <p>{props.description}</p>
  </div>;
}
