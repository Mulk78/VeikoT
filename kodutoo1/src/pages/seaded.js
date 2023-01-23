import {useState} from "react"

function Seaded() {
const [kujundus, muudaKujundus] = useState(localStorage.getItem("veebilehe_kujundus"));
const tumeLeht = () => {
    localStorage.setItem("veebilehe_kujundus", "dark_mode");
    muudaKujundus("dark_mode");
}
const heleLeht = () => {
    localStorage.setItem("veebilehe_kujundus", "light_mode");
    muudaKujundus("light_mode");
}
const ColoredMode = () => {
    localStorage.setItem("veebilehe_kujundus", "colored_mode"); 
    muudaKujundus ("colored_mode");
}


    return ( <div>
        <br />
        <div>Seadistused</div>
        <br />
    <button onClick={tumeLeht}>Tume leht</button>
    <button onClick={heleLeht}>Hele leht</button>
    <button onClick={ColoredMode}>Värviline leht</button>
    {kujundus === "dark_mode" && <div>Tume Leht</div> }
    {kujundus === "light_mode" && <div>Hele Leht</div> }
    {kujundus === "colored_mode" && <div>Värviline Leht</div> }
    <br />
    
    </div> );
}

export default Seaded;