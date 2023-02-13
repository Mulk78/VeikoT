import './App.css';
import { Link, Route, Routes } from 'react-router-dom';
import Tagasiside from './Pages/Tagasiside';
import TagasisideAndjad from './Pages/TagasisideAndjad';

function App() {
  return (
    <div>
      <Link to="/">
        <button>Avalehele</button>
      </Link>
      <Link to="/tagasiside">
        <button>Tagasiside</button>
      </Link>
      <Link to="/TagasisideAndjad" >
        <button>Tagasiside andjad</button>
      </Link>
<Routes>
  <Route path="/" exact element={ <div>TERE!</div> } ></Route>
  <Route path="/tagasiside" exact element= { <Tagasiside/> } ></Route>
  <Route path="/TagasisideAndjad" exact element= { <TagasisideAndjad/> } ></Route>
</Routes>

    </div>
  );
}

export default App;
