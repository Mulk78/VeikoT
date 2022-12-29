import {useState} from "react";
function Meist() {
    const [kontakt, n2itaKontakt] = useState ("");
return ( <div>
    <br />
    <div>See on meist leht, nähtav localhost:3000/meist aadressil</div>
    
    <br />
    <div>Meie töötajad</div>
    <br />
    <div>Arvo Pärt</div>
    <div>Lõuna-Eesti parim DJ</div>
    <button onClick={ ()=> n2itaKontakt('333333333') } >Võta ühendust</button>
    <br /> <br />
    <div>Kelly Sildaru</div>
    <div>Reporter</div>
    <button onClick={ ()=> n2itaKontakt('111111111') } >Võta ühendust</button>
    <br /> <br />
    <div>Edward von Lõngus</div>
    <div>uudiste kujundamine</div>
    <button onClick={ ()=> n2itaKontakt('+44444444') }>Võta ühendust</button>
    <br /> <br />
    <div>Kerli Kõiv</div>
    <div>Spetsialist</div>
    <button onClick={ ()=> n2itaKontakt('+0977856675485') } >Võta ühendust</button>
    <br /><br />
    {kontakt !== "" && <div>Tema kontakt: {kontakt}</div>}
</div> );
}

export default Meist;