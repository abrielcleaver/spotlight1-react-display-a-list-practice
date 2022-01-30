import React from 'react';

export default function PlantsForSaleItem(props) {
  return <div>
    <p>{props.name}</p>
    <p>{props.description}</p>
  </div>;
}
