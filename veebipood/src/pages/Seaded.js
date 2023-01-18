import { useRef, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';

function Seaded() {
   const [keel, uuendakeel] = useState (localStorage.getItem("keel") || "EE" );
   const emailViide = useRef ();
   const telefonViide = useRef();
   const aadressViide = useRef();
   
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
    emailViide.current.value = "";
    toast.success("Email lisatud!", {position: "top-center"});
        }
    const salvestaTelefon = () => {
    localStorage.setItem("telefon", telefonViide.current.value);
    telefonViide.current.value = "";
    toast.success("Telefon lisatud!", {position: "top-center"});
        }
    const salvestaAadress = () => {
    localStorage.setItem("aadress", aadressViide.current.value);
    aadressViide.current.value = "";
    toast.success("Aadress lisatud!",{position: "top-left"});
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
        <br />
        <label>"Aadress"</label>
        <input ref={aadressViide} type="text" />
        <button onClick={salvestaAadress}>Sisesta</button>
        <br /><br />
        <button onClick={muudaKeelEE} >Eesti</button>
        <button onClick={muudaKeelEN} >English</button>
        <button onClick={muudaKeelRU} >Russian</button>
        <br />
        {keel === "EE" && <div>Leht on eesti keeles</div>}
        {keel === "EN" && <div>Page in in english</div>}
        {keel === "RU" && <div>Leht on vene keeles RU</div>}
        <ToastContainer />
    </div>
  )
}

export default Seaded