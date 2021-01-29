import logo from './logo.svg';
import './App.css';
import NameProp from './components/NameProp'
import Contacts from './components/Contacts'
import State from './components/State'

function App() {
  return (
    <div className="App">
    <NameProp name="Jessica"/>
    <Contacts name="Jessica" age="43" school="ElevenFifty" graduationYear="2021"/>
    <p>.................</p>
    <State />
    </div>
  );
}

export default App;
