import './App.css';
import { Link, Route, Routes } from 'react-router-dom'
import Avaleht from './pages/avaleht';
import Lisategelane from './pages/lisategelane';
import Valitudtegelased from './pages/valitudtegelased'

function App() {
  return (
    <div>
      <Link to="/"><button>Avaleht</button></Link>
      <Link to="/lisategelane"><button>Lisa tegelane</button></Link>
      <Link to="/valitudtegelased"><button>Valitud tegelased</button></Link>
      <img className= "main-picture" src="https://upload.wikimedia.org/wikipedia/commons/1/19/Disney-logo.jpg" alt="" />
      <Routes>
        <Route path=""element= { <Avaleht/> } />
        <Route path="lisategelane" element= { < Lisategelane/> } />
        <Route path="valitudtegelased" exact element= { <Valitudtegelased/> } />
      </Routes>
    </div>
  );
}

export default App;
