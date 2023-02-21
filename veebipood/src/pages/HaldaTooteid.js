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
      <div className={toode.aktiivne === true ? "aktiivne" : "mitteaktiivne"} key={jrkNr}>
        <div> {toode.nimi} </div>
        <div> {toode.hind} </div>
        <div> {toode.pilt} </div>
        <div> {toode.aktiivne} </div>
        <button onClick={ ()=> kustuta (jrkNr)}>Kustuta</button>
       <Link to= {"/muudatoode/" + jrkNr}>
       <button>Muuda</button>
       </Link>
      </div> )};
    </div>
  )
}

export default HaldaTooteid