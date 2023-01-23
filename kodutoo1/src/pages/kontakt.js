import { useState } from "react";
function Kontakt() {
const [aadress, määraAadress]=useState("Tallinn")
const [telefon, määraTelefon]=useState("53null6866null")
const [email, määraEmail]=useState("on@olemas.ee")
const [ingliseKeelne, määraIngliseKeelne]= useState("false");

const English = () => {
    määraAadress("London")
    määraTelefon("53zero6866zero")
    määraEmail("on@olemas.co.uk")
    määraIngliseKeelne("true")
}
    return ( 
    <div>
    <div> Kontaktid </div><br />
    <div>{aadress}</div>
    <div> {telefon} </div>
    <div> {email} </div><br />
    <button onClick={English} >English</button>
    { ingliseKeelne == "true" && <div>In English</div> }
    </div> );
}

export default Kontakt;