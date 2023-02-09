import { useRef } from "react"
import { useNavigate, useParams } from "react-router-dom"

function MuudaToode() {
const {jrkNr} = useParams();
const tooted = JSON.parse(localStorage.getItem("tooted")) || [];
const leitudToode = tooted[jrkNr];
const nimiRef = useRef ();
const navigate = useNavigate();
const muuda = () => {
  tooted[jrkNr] = nimiRef.current.value;
  localStorage.setItem ("tooted", JSON.stringify(tooted));
navigate("/haldatooteid");
}

  return (
    <div>
      <label>Toote nimi</label><br />
      <input ref={nimiRef} defaultValue={leitudToode} type="text" /><br />
      <button onClick={muuda} >Muuda</button>

    </div>
  )
}

export default MuudaToode