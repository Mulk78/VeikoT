import './App.css';
import { Link,  Route, Routes} from 'react-router-dom'

function App() {
  return (
    <div>
      <Link to="/" >
        <button>Avalehele</button>
      </Link>
      <Link to="/tagasiside">
        <button>Tagasiside</button>
      </Link>
<Routes>
  <Route path="/" exact element={ <div>Tere</div> }/>
  <Route path= "/tagasiside" exact element={ <div>Tagasisided :</div> } />
</Routes>
    </div>
  );
}

export default App;
