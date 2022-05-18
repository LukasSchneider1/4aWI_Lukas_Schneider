
import './App.css';
import Bundesliga from './components/Bundesliga';
import GetLeagues from './components/GetLeagues';
import NavBar from './components/NavBar';
import './cssreset.css'


function App() {
  return (    
    <div className="App">      
      <NavBar></NavBar>
      <div>
      <Bundesliga></Bundesliga>
      </div>                 
    </div>
  );
}

export default App;
