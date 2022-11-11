import './App.css';
import NavBar from './Components/NavBar/NavBar';
import Spinner from './Components/Spinner/Spinner';
import Utilities from './Components/Utilities/Utilities';

function App() {

  return (
    <div className="App">
      <NavBar />
      <Utilities />
      {/* <Spinner /> */}
    </div>
  );
}

export default App;
