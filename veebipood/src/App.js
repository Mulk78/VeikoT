import './App.css';
import { Link, Route, Routes } from 'react-router-dom';
import Avaleht from "./pages/Avaleht";
import Lisatoode from"./pages/Lisatoode";
import Ostukorv from"./pages/Ostukorv";


function App() {
  return (
    <div className="App">
      <Link to="/">
      <img className="pilt"src="https://www.luckydaycompetitions.com/wp-content/uploads/2022/04/image00004-3-1024x768.jpeg" alt="" />
      </Link>
      <Link to="/ostukorv">
      <button classname="nupp">Ostukorvi</button>
      </Link>
      <Link to="/lisatoode">
      <span>Toodet lisama</span>
      </Link>
      

    <Routes>
      <Route path="" element={<Avaleht/>}/>
      <Route path="ostukorv" element={ <Ostukorv/>}/>
      <Route path="lisatoode" element= { <Lisatoode/>}/>
    </Routes>


    </div>
  );
}

export default App;
