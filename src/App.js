
import './App.css';
import Multiplier from './components/Multiplier';
import Coutner from './components/Coutner';
import Substraction from './components/Substraction';
import Divider from './components/Divider';
import MyContextState from './context/MyContextState';


function App() {
  return (
    <div className="App">
      <MyContextState>
      <Coutner/>
      <Multiplier/>
      <Substraction/>
      <Divider/>
      </MyContextState>
     
    </div>
  );
}

export default App;
