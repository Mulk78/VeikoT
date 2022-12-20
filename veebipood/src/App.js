import './App.css';
import { Link, Route, Routes } from 'react-router-dom';
import Avaleht from "./pages/Avaleht";
import Lisatoode from"./pages/Lisatoode";
import Ostukorv from"./pages/Ostukorv";


function App() {
  return (
    <div className="App">
      <Link to="/">
      <img className="pilt"src="https://www.scania.com/content/www/group/en/home/products-and-services/trucks/s-series/_jcr_content/root/responsivegrid/responsivegrid_copy/responsivegrid_816603832/responsivegrid/responsivegrid_copy/image.coreimg.90.992.jpeg/1583834851284.jpeg" alt="" />
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
