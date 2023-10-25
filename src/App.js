import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar.js';
import Card from './Card.js';

function App() {
  return (
      <div className="App">
          <Navbar />
          <h1>CS 230L</h1>
          <h2>Section-002</h2>
          <p>WVU ID: 800373658</p>
          <p>Hi I am Skyler Putney</p>
         <Card />
    </div>
  );
}

export default App;
