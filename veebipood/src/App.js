import './App.css';
import { Link, Route, Routes } from 'react-router-dom';
import Avaleht from "./pages/Avaleht";
import Lisatoode from"./pages/Lisatoode";
import Ostukorv from"./pages/Ostukorv";
import Meist from"./pages/Meist";
import Seaded from"./pages/Seaded";
import Poed from './pages/Poed';
import Books from "./pages/Books";
import Numbrid from './pages/Numbrid';
import Hinnad from "./pages/Hinnad"
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
      <br />
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
       <button className="nupp">Ostukorvi</button>
      </Link>
      <Link to="/lisatoode">
        <button className="nupp">Toodet lisama</button>
      </Link>
      <Link to="/Meist">
        <button className="nupp">Meist</button>
      </Link>
      <Link to="/Seaded">
        <button className="nupp">Seaded</button>
      </Link>
      <Link to="/Poed">
        <button className="nupp">Poed</button>
      </Link>
      <Link to="/Books">
        <button className="nupp">Books</button>
      </Link>
      <Link to="/Numbrid">
        <button className='nupp'>Numbrid</button>
      </Link>
      <Link to="/hinnad">
        <button className='nupp'>Hinnad</button>
      </Link>
      
      

    <Routes>
      <Route path="" element={<Avaleht/>}/>
      <Route path="ostukorv" element={ <Ostukorv/>}/>
      <Route path="lisatoode" element= { <Lisatoode/>}/>
      <Route path="meist" element= { <Meist/>}/>
      <Route path="seaded" element= { <Seaded/>}/>
      <Route path="poed" element= { <Poed/>}/>
      <Route path="books" element= { <Books/>}/>
      <Route path="numbrid" element= { <Numbrid/>}/>
      <Route path="hinnad" element= { <Hinnad/>}/>
    </Routes>
<br />
<div>Veiko veebipood</div>
    </div>
  );
}

export default App;
