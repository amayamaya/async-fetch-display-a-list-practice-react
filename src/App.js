import { useEffect, useState } from 'react';
import { getFlowers, getHerbs, getVines, getPlants } from './services/fetch-utils';
import FlowerList from './FlowerList';
import HerbList from './HerbList';
import VineList from './VineList';
import FancyList from './FancyList';

import './App.css';

function App() {
  const [flowers, setFlowers] = useState([]);
  const [herbs, setHerbs] = useState([]);
  const [vines, setVines] = useState([]);
  const [plants, setPlants] = useState([]);

  useEffect(() => {
    async function fetchPlantsData() {
      const plantData = await getPlants();
      setPlants(plantData);
    }

    fetchPlantsData();
  }, []);

  useEffect(() => {
    async function fetchVinesData() {
      const vineData = await getVines();
      setVines(vineData);
    }

    fetchVinesData();
  }, []);

  useEffect(() => {
    async function fetchHerbsData() {
      const herbData = await getHerbs();
      setHerbs(herbData);
    }

    fetchHerbsData();
  }, []);

  useEffect(() => {
    async function fetchFlowersData() {
      const data = await getFlowers();
      setFlowers(data);
    }
    fetchFlowersData();
  }, []);

  return (
    <div>
      <header className="App-header">
        <FlowerList flowers={flowers} />
        <HerbList herbs={herbs} />
        <FancyList plants={plants} />
        <VineList vines={vines} />
      </header>
    </div>
  );
}
export default App;
