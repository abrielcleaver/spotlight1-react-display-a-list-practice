import './App.css';
// import your arrays here
import PlantList from './PlantList/PlantList';
import { plants } from './PlantList/plants-data';

function App() {
  return (
    <div className="App">
        Render all your lists here. Pass the arrays as props.
      <div>
        <PlantList plant={plants} />
      </div>
    </div>
  );
}

export default App;
