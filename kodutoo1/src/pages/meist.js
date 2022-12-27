import { useState } from "react";
function Meist() {
const [message, määraMessage] = useState ("Vali mõni tegevus");


    return ( 
    <div>
        <br />
        <div>Midagi huvitavat meie kohta</div>
        <br />
        <div> {message} </div>
        <br />
        <button onClick={ () => määraMessage("Kandideerimiseks saada meile e-mail jobs@html-css.com") }>Kandideeri tööle</button>
        <button onClick={ () => määraMessage("Meil on 10 töötajat, kelle info ilmub veebilehele lähiajal") } >Vaata meie töötajaid</button>
        <button onClick={ () => määraMessage("Ühenduse võtmiseks mine lehele Kontakt") } >Võta meiega ühendust</button>
    </div>  );
}

export default Meist;