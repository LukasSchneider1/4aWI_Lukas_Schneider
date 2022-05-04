import './App.css';
import ButtonRow from './components/ButtonRow';
import SuperButton from './components/SuperButton';
import List from './components/List';
import ButtonSendar from './components/ButtonSendar';
import Card from './components/Card';
import Vote from './components/Vote';

function App() {
  return (
    <div className="App">
      <div className="Container">
      <Vote candidate="John" age="30"></Vote>
      <Vote candidate="Sepp" age="40"></Vote>
      <Vote candidate="Hans" age="22"></Vote>
      </div>
    </div>
  );
}

export default App;
