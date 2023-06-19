import { useState } from 'react';
import './App.css';
import Cardcompo from './components/cardcompo'
import { personJson } from './json/persondetail'

function App() {
  const [personData, setPersondata] = useState(personJson)
  return (
    <div className="App">
      <Cardcompo data={personData} />
    </div>
  );
}

export default App;
