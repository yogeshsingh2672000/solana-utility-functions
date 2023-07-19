import React from 'react'
import './App.css';
import Layout from './components/Layout';
import UserState from './context/userContext/UserState';

function App() {
  return (
    <div className="App relative">
      <UserState>
        <Layout/>
      </UserState>
    </div>
  );
}

export default App;
