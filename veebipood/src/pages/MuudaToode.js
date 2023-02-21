import { useRef } from "react"
import { useNavigate, useParams } from "react-router-dom"

function MuudaToode() {
const {jrkNr} = useParams();
const tooted = JSON.parse(localStorage.getItem("tooted")) || [];
const leitudToode = tooted[jrkNr];
const nimiRef = useRef();
const hindRef = useRef();
const piltRef = useRef();
const aktiivneRef = useRef();
const navigate = useNavigate();

const muuda = () => {

  tooted[jrkNr] = {
    "nimi" : nimiRef.current.value,
    "hind" : Number(hindRef.current.value),
    "pilt" : piltRef.current.value,
    "aktiivne" : aktiivneRef.current.checked,
  };
  localStorage.setItem ("tooted", JSON.stringify(tooted));
navigate("/haldatooteid");
}

  return (
    <div>
      <label Uue toote nimi></label>
      <input ref={nimiRef} defaultValue={leitudToode.nimi} type="text" /><br />
      <label>Toote nimi</label> <br />
      <input ref={hindRef} defaultValue={leitudToode.hind}type="number" /><br />
      <label>Toote hind</label> <br />
      <input ref={piltRef} defaultValue={leitudToode.pilt}type="text" /><br />
      <label>Toote pilt</label> <br />
      <input ref={aktiivneRef} defaultChecked={leitudToode.aktiivne}type="checkbox" /><br />
      <label>Pane igaks juhuks linnuke</label> <br />
      <button onClick={muuda} >Muuda</button>

    </div>
  )
}

export default MuudaToode