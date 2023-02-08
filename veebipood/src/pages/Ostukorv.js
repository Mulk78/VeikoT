import { useState } from "react"
import { Link } from "react-router-dom"


function Ostukorv() {
  const [ostukorv, uuendaOstukorv] = useState(JSON.parse(localStorage.getItem("ostukorv")));

  const kustuta = (i) => {
    ostukorv.splice(i,1);
    uuendaOstukorv(ostukorv.slice())
    localStorage.setItem("ostukorv", JSON.stringify(ostukorv));
  }
  const tyhjenda = () => {
     uuendaOstukorv ([])
  }
  const lisa = (klikitudToode) => {
    ostukorv.push(klikitudToode);
    uuendaOstukorv(ostukorv.slice());
    localStorage.setItem("ostukorv", JSON.stringify(ostukorv));
  }
  return (
    <div>
      {ostukorv.length > 0 && <button onClick={tyhjenda} >Tühjenda</button>} <br /><br />
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