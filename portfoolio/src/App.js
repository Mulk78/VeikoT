import './App.css';
import { Link, Route, Routes } from 'react-router-dom';
import Courses from './pages/Courses';
import Hobbies from './pages/Hobbies';
import Work from './pages/Work';

function App() {
  return (
    <div classname="App">
      <img className="main-picture" src="https://www.luckydaycompetitions.com/wp-content/uploads/2022/04/image00004-3-1024x768.jpeg" alt="" />
      <div className="rectangle"></div>

      <div className="navigation-pictures">
        <Link className="main-link" to="Work">
         <img src="https://cdn.webshopapp.com/shops/76444/files/318214644/1024x1024x2/retro-3-spoke-steering-wheel-choose-your-options.jpg" alt="" />
        <p>Tööde lehele</p>
        </Link>
        <Link className="main-link" to="Hobbies">
        <img src="https://cdn.webshopapp.com/shops/76444/files/390807617/1024x1024x2/stainless-polished-exhaust-tip-129mm-with-seamed-e.jpg" alt="" />
        <p>Hobide lehele</p>
        </Link>
        <Link classname="main-link" to="Courses">
        <img src="https://cdn.webshopapp.com/shops/76444/files/347347689/1024x1024x2/vivid-led-lightbar-with-2-colour-strobe-function.jpg" alt="" />
        <p>Kursuste lehele</p>
        </Link>
      </div>

     <Routes>
      <Route path="work" element={ <Work/>} />
      <Route path="hobbies" element={ <Hobbies/>} />
      <Route path="courses" element={ <Courses/>} />
     </Routes>
    </div>
  );
}

export default App;
