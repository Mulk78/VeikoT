import './App.css';
import { Link, Route, Routes } from 'react-router-dom';
import Avaleht from "./pages/Avaleht";
import Lisatoode from"./pages/Lisatoode";
import Ostukorv from"./pages/Ostukorv";
import Meist from"./pages/Meist";
import Seaded from"./pages/Seaded";


function App() {
  return (
    <div className="App">
      <Link to="/">
      <img className="pilt"src="https://www.luckydaycompetitions.com/wp-content/uploads/2022/04/image00004-3-1024x768.jpeg" alt="" />
      </Link>
      <br /><br />
      <div className="rectangle"></div>
      <br />
      <Link to="/ostukorv">
       <button classname="nupp">Ostukorvi</button>
      </Link>
      <Link to="/lisatoode">
        <button classname="nupp">Toodet lisama</button>
      </Link>
      <Link to="/Meist">
        <button classname="nupp">Meist</button>
      </Link>
      <Link to="/Seaded">
        <button classname="nupp">Seaded</button>
      </Link>
      

    <Routes>
      <Route path="" element={<Avaleht/>}/>
      <Route path="ostukorv" element={ <Ostukorv/>}/>
      <Route path="lisatoode" element= { <Lisatoode/>}/>
      <Route path="meist" element= { <Meist/>}/>
      <Route path="seaded" element= { <Seaded/>}/>
    </Routes>
<br />
<div>FOOTER</div>
    </div>
  );
}

export default App;
