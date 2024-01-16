import './App.css';
import { Link,Route,Routes } from 'react-router-dom';
import Avaleht from './pages/Avaleht';
import Ostukorv from './pages/Ostukorv';
import LisaToode from './pages/LisaToode';
import NotFound from './pages/NotFound';
import Seaded from './pages/Seaded';
import { useState } from 'react';

function App() {
  const [kasTume, muudaTume] = useState (localStorage.getItem("kasTumeTeema") || "false" );

  const muudaTumedaks = () => {
    muudaTume ("true")
    localStorage.setItem("kasTumeTeema", "true");
      } 
  const muudaHeledaks = () => {
    muudaTume ("false")
    localStorage.setItem("kasTumeTeema", "false");
  }
  return (
    <div className={kasTume === "true" ? "tume" : "App"}>
        {kasTume=== "false" && <img style={{"width": "30px"}} onClick={muudaTumedaks} src="./tume.png" alt="" />}
        {kasTume=== "true" && <img style={{"width": "30px"}} onClick={muudaHeledaks} src="./hele.png" alt="" />}

      <Link to="/" >
        <img className="pilt" src="https://cdn.motor1.com/images/mgl/2b79K/s3/official-honda-africa-twin-specs-announced-.jpg" alt="" />
      </Link>
      <br /><br />
      <Link to="/ostukorv" >
        <button className="nupu-stiil">Ostukorv</button>
      </Link>
      
      <Link to="/lisa-toode" >
        <button className="nupu-stiil">Lisa toode</button>
      </Link>

      <Link to="/seaded" >  
      <button className="nupu-stiil">Seaded</button>
      </Link>

      <Routes>
        <Route path="" element= { <Avaleht/>} />
        <Route path="ostukorv" element= { <Ostukorv/> } />
        <Route path="lisa-toode" element= { <LisaToode/> } />
        <Route path="seaded" element= { <Seaded/> } />
        <Route path="*" element= { <NotFound/> } />
      </Routes>
    </div>
  );
}

export default App;