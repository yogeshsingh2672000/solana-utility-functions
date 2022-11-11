import { useState } from 'react';
import './App.css';
import NavBar from './Components/NavBar/NavBar';
import AirdropSol from './Components/Utilities/AirdropSol/AirdropDevnet';
import GetBalance from './Components/Utilities/GetBalance/GetBalance';

function App() {

  return (
    <div className="App">
      <NavBar />
      {/* <GetBalance /> */}
      <AirdropSol />
    </div>
  );
}

export default App;
