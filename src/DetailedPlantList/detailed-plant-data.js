import monstera from './plant-images/monstera-deliciosa.jpg';
import radiatorPlant from './plant-images/radiator-plant.jpg';
import philodendron from './plant-images/philodendron.jpg';

export const detailedPlants = [
  {
        // img, name, genus, water, sun, & toxicity 
    image: monstera,
    name: 'Swiss Cheese plant',
    genus: 'Monstera  Deliciosa',
    water: 'Regular waterings during growing season every one to two weeks. During fall and winter only water occasionally. It is important for the soil to dry out slightly between waterings. ',
    sun: 'Bright indirect sunlight, partial shade',
    toxicity: 'Toxic to cats and dogs.',
  },
  {
    image: radiatorPlant, 
    name: 'Radiator Plant',
    genus: 'Peperomia',
    water: 'It\'s better to keep this plant on the dry side so it doesn\'t need frequent watering to thrive. The surface of the soil should be dry before the next watering. ',
    sun: 'Full or partial sunlight',
    toxicity: 'Considered non-toxic and pet-friendly.',
  },
    
  {
    image: philodendron,
    name: 'Philodendron',
    genus: 'Philodendron',
    water: 'Water when the top inch of soil is dried out. Reduce your waterings during winter.',
    sun: 'Partial sunlight',
    toxicity: 'Toxic to pets and humans if ingested.',
  },
];
