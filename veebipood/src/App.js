import './App.css';
import { Link, Route, Routes } from 'react-router-dom';
import Avaleht from "./pages/Avaleht";
import Lisatoode from"./pages/Lisatoode";
import Ostukorv from"./pages/Ostukorv";
import Meist from"./pages/Meist";
import Seaded from"./pages/Seaded";
import { useState } from 'react';
import { useRef } from 'react';


function App() {
  const [sisselogitud, muudaSisselogitud]=useState ("ei");
  const [sonum, muudaSonum] = useState ("");
  const KasutajaNimiRef = useRef ();
  const paroolRef = useRef ();

  const logiSisse = () => {
    if (paroolRef.current.value === "123"){
      muudaSisselogitud("jah");
      muudaSonum(KasutajaNimiRef.current.value + " ,oled sisse logitud!");
    }else{
      muudaSonum("Vale parool!");
    }
  }
  const logiValja = () => {
    muudaSisselogitud("ei");
    muudaSonum ("Oled välja logitud");
    }  
  

  return (
    <div className="App">
      <div>{sonum}</div>
      {sisselogitud === "ei" && <div><br />
      <label>Kasutajanimi</label><br />
      <input ref={KasutajaNimiRef} type="text" /><br />
      <label>Parool</label><br />
      <input ref={paroolRef}  type="password" /><br />
      </div> }

      { sisselogitud === "ei" && <button onClick={logiSisse} >Logi sisse</button>}
      { sisselogitud === "jah" && <button onClick={logiValja} >Logi välja</button>}
      <br />
      <br />
      <div>Joone all on varasem kodutöö</div>
      <br />
      <div className="rectangle"></div>
      <br />
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
