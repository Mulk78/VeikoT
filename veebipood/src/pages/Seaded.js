import { useState } from "react";

function Seaded() {
   const [keel, uuendakeel] = useState (localStorage.getItem("keel") || "EE" );
   
   // sama, mis function muudaKeel () {}
const muudaKeelEE = () => {
    uuendakeel ("EE");
    // localStorage salvestab brauseri lokaalmällu selle seade
    localStorage.setItem("keel" , "EE");
   }
const muudaKeelEN = () => {
    uuendakeel ("EN");
    localStorage.setItem("keel" , "EN");
       }
const muudaKeelRU = () => {
    uuendakeel ("RU");
    localStorage.setItem("keel" , "RU");
           }

  return (
    <div>
        <br />
        <button onClick={muudaKeelEE} >Eesti</button>
        <button onClick={muudaKeelEN} >English</button>
        <button onClick={muudaKeelRU} >Russian</button>
        <br />
        {keel === "EE" && <div>Leht on eesti keeles</div>}
        {keel === "EN" && <div>Page in in english</div>}
        {keel === "RU" && <div>Leht_on_vene_keeles RU</div>}
    </div>
  )
}

export default Seaded