import logo from './logo.svg';
import './App.css';
import Mensaje from './Mensaje';

const num1 = 3
const num2 = 9



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

      <div>
        <p>El resultado es:</p>
        {num1 + num2}
        <br/>
        <p>El mensaje es: </p>
        <Mensaje message='parametro desde mensaje, hola' color='cyan'/>
      </div>
    </div>
  );
}

export default App;
