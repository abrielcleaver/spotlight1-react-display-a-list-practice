// import './DetailedPlantList.css';
import DetailedPlantItem from './DetailedPlantItem';

export default function DetailedPlantList(props) {
  return <div>
    <h3>Check out more information on these plants below!</h3>
    <div className="detailed-plant-list">
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
        />
      )}
    </div>

  </div>;
}

