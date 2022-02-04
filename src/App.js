import './App.css';
// import your arrays here
import PlantList from './PlantList/PlantList';
import { plants } from './PlantList/plants-data';

import DetailedPlantList from './DetailedPlantList/DetailedPlantList';
import { detailedPlants } from './DetailedPlantList/detailed-plant-data';

import PlantsForSaleList from './PlantsForSale/PlantsForSaleList';
import { products } from './PlantsForSale/for-sale-data';

import PeopleWhoLovePlantsList from './PeopleWhoLovePlantsList/PeopleWhoLovePlantsList';
import { people } from './PeopleWhoLovePlantsList/people-data';

function App() {
  return (
    <div className="App">
      <header>
        <h1>
          Welcome to Abriel&apos;s Plant Lists! 
        </h1>
          These were all created by passing the arrays as props. :)
      </header>
      <div>
        <PlantList plant={plants} />
      </div>
      <div>
        <DetailedPlantList dplant={detailedPlants} />
      </div>
      <div>
        <PlantsForSaleList forsale={products}/>
      </div>
      <div>
        <PeopleWhoLovePlantsList person={people}/>
      </div>
    </div>
  );
}

export default App;
