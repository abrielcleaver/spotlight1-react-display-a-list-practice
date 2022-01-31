import PlantItem from './PlantItem';

export default function PlantList(props) {
  return <div className="plant-list">
    <h2>Abriel loves these plants:</h2>
    {props.plant.map((plant, i) => 
      <PlantItem 
        key={`${plant}-${i}`}
        plant={plant}
      />)
    }
  </div>;
}
