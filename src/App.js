import './App.css';
// import your arrays here
import PlantList from './PlantList/PlantList';
import { plants } from './PlantList/plants-data';

import DetailedPlantList from './DetailedPlantList/DetailedPlantList';
import { detailedPlants } from './DetailedPlantList/detailed-plant-data';

import PlantsForSaleList from './PlantsForSale/PlantsForSaleList';

function App() {
  return (
    <div className="App">
        Render all your lists here. Pass the arrays as props.
      <div>
        <PlantList plant={plants} />
      </div>
      <div>
        <DetailedPlantList dplant={detailedPlants} />
      </div>
      <div>
        <PlantsForSaleList />
      </div>
    </div>
  );
}

export default App;
