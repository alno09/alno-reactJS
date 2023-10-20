import logo from './logo.svg';
import './App.css';
import Komponen from "./tugas";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Komponen />
      </header>
    </div>
  );
}

export default App;
