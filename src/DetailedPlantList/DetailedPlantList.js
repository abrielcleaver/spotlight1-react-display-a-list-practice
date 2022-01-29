import DetailedPlantItem from './DetailedPlantItem';

export default function DetailedPlantList(props) {
  return <div className="detailed-plant-list">
    <h2>Congratulations you rendered DetailedPlantList!</h2>
    {props.dplant.map((dplant, i) => 
      <DetailedPlantItem
        key={`${dplant}-${i}`}
        // {...dplant}
        genus={dplant.genus}
        image={dplant.image}
        name={dplant.name}
        water={dplant.water}
        sun={dplant.sun}
        toxicity={dplant.toxicity}
      />)
    }

  </div>;
}

