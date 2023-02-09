import { useState } from "react"
import {Link} from "react-router-dom"

function Tooted() {                        // useState(["Google P1", "Iphone 12 Mini" , "P5", "T1", "RS6"])
  const [tooted, uuendaTooted] = useState(JSON.parse(localStorage.getItem("tooted")) || [] );
  const lisaOstukorvi = (klikitudToode)=> {
  const ostukorv = JSON.parse(localStorage.getItem("ostukorv"))||[];
  ostukorv.push(klikitudToode);
  localStorage.setItem("ostukorv", JSON.stringify(ostukorv));
   // sama asi, mis :
 // let ostuKorvLS = localStorage.getItem("ostukorv");
 // ostuKorvLS = JSON.parse(ostuKorvLS)||[];
 // ostuKorvLS.push(klikitudToode);
 // ostuKorvLS = JSON.stringify(ostukorv);
 // localStorage.setItem("ostukorv", ostuKorvLS);
}

  return (
    <div><br />
      {tooted.map((toode, jrkNr) => 
      <div key={jrkNr} >
      <Link to= {"/yksiktoode/" + jrkNr} >  
        <div> {toode.nimi} </div>
        <div> {toode.hind} </div>
        <div> {toode.pilt} </div>
        <div> {toode.aktiivne} </div>
      </Link>
      <button onClick={ () => lisaOstukorvi (toode) }>Lisa ostukorvi</button>
      </div> )}


    </div>
  )
}

export default Tooted