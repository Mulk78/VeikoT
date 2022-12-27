import { useState } from "react";
function Kontakt() {
const [aadress, määraAadress]=useState("Tallinn")
const [telefon, määraTelefon]=useState("53null6866null")
const [email, määraEmail]=useState("on@olemas.ee")

function English () {
const [aadress, määraAadress]=useState("London")
const [telefon, määraTelefon]=useState("53zero6866zero")
const [email, määraEmail]=useState("on@olemas.co.uk")

}
    return ( 
    <div>
    <div> Kontaktid </div><br />
    <div>{aadress}</div>
    <div> {telefon} </div>
    <div> {email} </div><br />
    <button onClick={()=> English ()}>Muuda inglise keelseks</button>
    </div> );
}

export default Kontakt;