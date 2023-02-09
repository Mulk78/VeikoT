import { useState } from "react"

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
       <button>Muuda</button>
      </div> )};
    </div>
  )
}

export default HaldaTooteid