import { useState} from "react"

function Meist() {
  const [n2itaEmail, uuendaN2itaEmaili] = useState(false);
  const [telefon, uuendaTelefoni] = useState (localStorage.getItem("telefon")) || "";
  const [aadress, uuendaAadressi] = useState (localStorage.getItem("aadress")) || "";

  return (
    <div>
      <br />
      <div>Meie email: 
        { n2itaEmail === false && <button onClick={ () => uuendaN2itaEmaili (true)  } >Näita e-maili</button>} 
        { n2itaEmail === true && localStorage.getItem("email")} 
      </div>
      <br />
      <div>Meie telefon: 
        {telefon.startsWith("+372")=== false &&<button onClick={()=> uuendaTelefoni("+372" + telefon )}>Lisa telefonile +372 ette </button>}
        {telefon}
      </div>
      <br />
      <div className={aadress.charAt(0) === aadress.charAt(0).toLowerCase() ? "red":"blue"} >  Meie aadress: 
        {aadress}
      </div>
      <button onClick={()=>uuendaAadressi(aadress.toUpperCase())}>Kõik suurteks tähtedeks</button>
      <button onClick={()=>uuendaAadressi(aadress.toLowerCase())}>Kõik väikesteks tähtedeks</button>
    </div>
  )
}

export default Meist