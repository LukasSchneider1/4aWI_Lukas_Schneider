import './App.css';
import ButtonRow from './components/ButtonRow';
import SuperButton from './components/SuperButton';
import List from './components/List';
import ButtonSendar from './components/ButtonSendar';
import Card from './components/Card';

function App() {
  return (
    <div className="App">
      <List></List>
      <ButtonSendar></ButtonSendar>
      <Card></Card>
    </div>
  );
}

export default App;
