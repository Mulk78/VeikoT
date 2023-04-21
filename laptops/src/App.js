import {Link, Route, Routes} from 'react-router-dom';
import './App.css';
import Avaleht from './Pages/Avaleht';
import VaataArvuteid from './Pages/VaataArvuteid';
import LisaArvuti from './Pages/LisaArvuti';
import Bikes from './Pages/bikes';

function App() {
  return (
  <div>
    <Link to="/">
    <button>Avalehele</button>
    </Link>
    <Link to="/all">
     <button>Vaata sülearvuteid</button>
    </Link>
    <Link to="/add">
      <button>Lisa sülearvuti</button>
    </Link>
    <Link to="/bikes">
      <button>Rattad</button>
    </Link>
<Routes>
<Route path="" exact element={<Avaleht/>} />
<Route path="all" exact element={<VaataArvuteid/>} />
<Route path="add" exact element={<LisaArvuti/>} />
<Route path="bikes" exact element={<Bikes/>} />
</Routes>
  </div>
  );
}

export default App;
