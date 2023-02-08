import { useState } from "react"

function Tooted() {
  const [tooted, uuendaTooted] = useState(["Google P1", "Iphone 12 Mini" , "P5", "T1", "RS6"]);
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
      {toode} 
      <button onClick={ () => lisaOstukorvi (toode) }>Lisa ostukorvi</button>
      </div> )}


    </div>
  )
}

export default Tooted