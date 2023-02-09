import { useState } from "react"
import { Link } from "react-router-dom";

function HaldaTooteid() {
  const [tooted, uuendaTooted] = useState(JSON.parse(localStorage.getItem("tooted")) || [] );
  const kustuta = (index) => {
    tooted.splice(index,1);
    uuendaTooted(tooted.slice());
    localStorage.setItem("tooted", JSON.stringify(tooted));
  }

  return (
    <div>
      {tooted.map((toode, jrkNr) => 
      <div key={jrkNr}>
       {toode}
       <button onClick={ ()=> kustuta (jrkNr)}>Kustuta</button>
       <Link to= {"/muudatoode/" + jrkNr}>
       <button>Muuda</button>
       </Link>
      </div> )};
    </div>
  )
}

export default HaldaTooteid