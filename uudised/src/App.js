import './App.css' ;
import { Route, Routes } from 'react-router-dom';
import Avaleht from './pages/Avaleht';
import Uudised from './pages/Uudised';
import Meist from './pages/Meist';
import Kontakt from './pages/Kontakt';

function App() {
  return (
    <div>
      <link to="/">
        <button>Avalehele</button>
      </link>
      <link to="/uudised">
        <button>Uudiste lehele</button>
      </link>
      <link to="/kontakt">
        <button>Võta meiega ühendust</button>
      </link>
      <link to="/meist">
        <button>Info meist</button>
      </link>
      <Routes>        
      <Route path=' ' element={<Avaleht/>}/>
      <Route path='uudised' element={<Uudised/>}/>
      <Route path='kontakt' element={<Kontakt/>}/>
      <Route path='meist' element={<Meist/>}/>
      </Routes>
    </div>
  );
}

export default App;
