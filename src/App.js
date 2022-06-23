import { useEffect, useState } from 'react';
import { getFlowers } from './services/fetch-utils';
import FlowerList from './FlowerList';

import './App.css';

function App() {
  const [flowers, setFlowers] = useState([]);

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
      </header>
    </div>
  );
}
export default App;
