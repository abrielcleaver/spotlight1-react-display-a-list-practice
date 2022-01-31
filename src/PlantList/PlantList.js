import PlantItem from './PlantItem';

export default function PlantList(props) {
  return <div className="plant-list">
    <h3>Abriel loves these plants:</h3>
    {props.plant.map((plant, i) => 
      <PlantItem 
        key={`${plant}-${i}`}
        plant={plant}
      />)
    }
  </div>;
}
