import { useState } from "react"


function Ostukorv() {
  const [ostukorv, uuendaOstukorv] = useState(["Coca", "Fanta", "Sprite", "Vichy"])
  const kustuta = (i) => {
    ostukorv.splice(i,1);
    uuendaOstukorv(ostukorv.slice())
  }
  const lisa = (klikitudToode) => {
    ostukorv.push(klikitudToode);
    uuendaOstukorv(ostukorv.slice());
  }
  return (
    <div>
      {ostukorv.length > 0 && <button onClick={() => uuendaOstukorv ([]) } >Tühjenda</button>} <br /><br />
      {ostukorv.length === 1 && <div>Ostukorvis on 1 ese </div>}
      {ostukorv.length > 1 && <div>Ostukorvis on {ostukorv.length} eset </div>}
      <br />
      {ostukorv.map((e,i)=> 
        <div key={i}> 
          {e} 
          <button onClick={() => kustuta (i) } >-</button> 
          <button onClick={() => lisa (e) } >+</button> 
        </div> )}
      { ostukorv.length === 0 && 
        <div>
        Ostukorv on tühi
        </div>}
    </div> 
    
  )
}

export default Ostukorv