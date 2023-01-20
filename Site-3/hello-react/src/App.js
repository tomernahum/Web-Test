import logo from './logo.svg';
import './App.css';
import HelloComponent from './HelloComponent';
import HelloComponentAlt from './HelloComponentAlt';
import CounterComponent from './counterComponent';
import TestComponent from './testComponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>

      <HelloComponent
        greetee="badguy"
        test="not used"
      />
      
      <TestComponent></TestComponent>
   
   
      <div> ----------------------------------------- </div>

      <HelloComponentAlt 
        greetee="World"
      />

      
      <CounterComponent/>

      <div style={{marginTop:"500px"}}/>
      <div>Testtttt</div>
    </div>

  );
}



export default App;
