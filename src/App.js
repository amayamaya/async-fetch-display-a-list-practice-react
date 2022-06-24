import { useEffect, useState } from 'react';
import { getFlowers, getHerbs } from './services/fetch-utils';
import FlowerList from './FlowerList';

import './App.css';
import HerbList from './HerbList';

function App() {
  const [flowers, setFlowers] = useState([]);
  const [herbs, setHerbs] = useState([]);

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
      </header>
    </div>
  );
}
export default App;
