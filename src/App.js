import logo from './logo.svg';
import './App.scss';

function App() {
  return (
    <div className="App">
      <div className='header'> 
        <div className='header__button'>
          <span className='header__button__title'>ellorlove's</span>
          <span>custom components</span>
        </div>
      </div>
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
    </div>
  );
}

export default App;
