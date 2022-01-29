import PlantItem from './PlantItem';

export default function PlantList(props) {
  return <div className="plant-list">
    <h2>The PlantList says Congratulations you rendered me!</h2>
    {props.plant.map((plant, i) => 
      <PlantItem 
        key={`${plant}-${i}`}
        plants={plant}
      />)
    }
  </div>;
}
