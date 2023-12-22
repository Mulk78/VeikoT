// import logo from './logo.svg'; (kaldkriipsud tõstavad selle rea koodist välja)
import './App.css';
import { Link,Route,Routes } from 'react-router-dom';
import Avaleht from './pages/Avaleht';
import Ostukorv from './pages/Ostukorv';
import LisaToode from './pages/LisaToode';
import NotFound from './pages/NotFound';

function App() {
  return (
    <div className="App">
      <Link to="/avaleht" >
        <img className="pilt" src="https://cdn.motor1.com/images/mgl/2b79K/s3/official-honda-africa-twin-specs-announced-.jpg" alt="" />
      </Link>
      
      <Link to="/ostukorv" >
        <button className="nupu-stiil">Ostukorv</button>
      </Link>

      <Link to="/lisa-toode" >
        <button className="nupu-stiil">Lisa toode</button>
      </Link>

      <Routes>
        <Route path="avaleht" element= { <Avaleht/>} />
        <Route path="ostukorv" element= { <Ostukorv/> } />
        <Route path="lisa-toode" element= { <LisaToode/> } />
        <Route path="*" element= { <NotFound/> } />
      </Routes>
    </div>
  );
}

export default App;