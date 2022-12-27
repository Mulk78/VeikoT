import './App.css';
import { Link, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <div>
      <Link to="/"><button>Avaleht</button></Link>
      <Link to="/lisategelane"><button>Lisa tegelane</button></Link>
      <Link to="/valitudtegelased"><button>Valitud tegelased</button></Link>
      <img className= "main-picture" src="https://upload.wikimedia.org/wikipedia/commons/1/19/Disney-logo.jpg" alt="" />
      <Routes>
        <Route path="" exact element= { <div>Avaleht</div> } />
        <Route path="lisategelane" exact element= { <div>Lisa tegelane</div> } />
        <Route path="valitudtegelased" exact element= { <div>Valitud tegelased</div> } />
      </Routes>
    </div>
  );
}

export default App;
