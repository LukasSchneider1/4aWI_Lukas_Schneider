
import './App.css';
import GetAreas from './components/GetAreas';
import NavBar from './components/NavBar';
import Players from './components/SearchPlayer';
import './cssreset.css'


function App() {
  return (    
    <div className="App">          
      <NavBar></NavBar>  
      <GetAreas></GetAreas>                          
    </div>
  );
}

export default App;
