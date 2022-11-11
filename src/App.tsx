import { useState } from 'react';
import './App.css';
import NavBar from './Components/NavBar/NavBar';
import AirdropSol from './Components/Utilities/AirdropSol/AirdropDevnet';
import GetBalance from './Components/Utilities/GetBalance/GetBalance';
import Utilities from './Components/Utilities/Utilities';

function App() {

  return (
    <div className="App">
      <NavBar />
      <Utilities />
    </div>
  );
}

export default App;
