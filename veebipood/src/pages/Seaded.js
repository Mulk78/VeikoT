import { useRef, useState } from "react";

function Seaded() {
   const [keel, uuendakeel] = useState (localStorage.getItem("keel") || "EE" );
   const emailViide = useRef ();
   const telefonViide = useRef();
   
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
    const salvestaEmail = () => {
    localStorage.setItem("email", emailViide.current.value );
           }
    const salvestaTelefon = () => {
    localStorage.setItem("telefon", telefonViide.current.value);
        }

  return (
    <div>
        <br />
        <label>"E-mail"</label>
        <input ref={emailViide} type="text" />
        <button onClick={salvestaEmail}>Sisesta</button>
        <br />
        <br />
        <label>"Telefon"</label>
        <input ref={telefonViide} type="text" />
        <button onClick={salvestaTelefon}>Sisesta</button>
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