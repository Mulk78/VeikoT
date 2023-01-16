import {useState} from "react";
function Kontakt () {
    const [n2itaTelKristiine, muudaN2itaTelKristiine]=useState(false);
    const [n2itaTelYlemiste, muudaN2itaTelYlemiste]= useState(false);
    const [n2itaTelTasku, muudaN2itaTelTasku]= useState(false);

return ( <div>
    <br />
    <div>See on kontaktide leht, nähtav localhost:3000/kontakt aadressil</div>
    <br /> 
    <div>Võta meiega ühendust:</div>
    <br />
    <div onClick={ () => muudaN2itaTelKristiine(!n2itaTelKristiine)}>Kristiine Keskus</div>
    {n2itaTelKristiine && <div>123786439645762</div>}
    <div>Endla 45</div>
    <br />
    <div onClick={ () => muudaN2itaTelYlemiste(!n2itaTelYlemiste)} >Ülemiste Keskus</div>
    {n2itaTelYlemiste && <div>+372 512345</div>}
    <div>Suur-Sõjamäe 4</div>
    <br />
    <div onClick={() => muudaN2itaTelTasku(!n2itaTelTasku)} >Tasku Keskus</div>
    {n2itaTelTasku &&<div>22222222</div>}
    <div>Turu 2, Tartu</div>
    
<br />


</div> );
}

export default Kontakt;