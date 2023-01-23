import {Link, Route, Routes } from 'react-router-dom';
import './App.css';
import Avaleht from './pages/avaleht';
import Seaded from './pages/seaded';
import Meist from './pages/meist';
import Kontakt from './pages/kontakt';

function App() {
  return (
    <div className="App">
      <br />
      <button className='nupp'>VEIKO KODUTÖÖ 1</button>
      <br /><br />
      <img className="main-picture"src="https://www.luckydaycompetitions.com/wp-content/uploads/2022/04/image00004-3-1024x768.jpeg" alt="" />
      <br /><br />
      <Link to="/"> <button>Avalehele</button></Link>
      <Link to="/meist"> <button>Meist</button> </Link>
      <Link to="/kontakt"> <button>Kontakt</button> </Link>
      <Link to="/seaded"> <button>Seaded</button> </Link>
      <Routes>
        <Route path=""element= { <Avaleht/>}/>
        <Route path="meist" element= {<Meist/>}/>
        <Route path="kontakt" element= {<Kontakt/>}/>
        <Route path="seaded" element= {<Seaded/>}/>
      </Routes>
    </div>
  );
}

export default App;
