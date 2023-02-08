import { useRef, useState } from "react"


function Lisatoode() {
const [sonum, muudaSonum] = useState ("Lisa toode");
const toodeViide = useRef(); // toodeRef --- läheb inputide külge
const inputiLuger = useRef();

function lisa () {
  if (toodeViide.current.value === "") {
    muudaSonum("Toode sisestamata!")
  } else {
    muudaSonum ("Toode lisatud!")
    const tooted = JSON.parse(localStorage.getItem("tooted")||" [] ");  //võib panna peale sulgusid ka selle : ||[]
    tooted.push(inputiLuger.current.value);
    localStorage.setItem("tooted" , JSON.stringify(tooted));
  }
  }

  return (
    <div>
      <br />
      <div>{sonum}</div>
      <br />
      <input ref={toodeViide} type="text" /><br />
      <label>Toote nimi</label> <br />
      <br />
      <button onClick={lisa} >Lisa</button>
    </div>
  )
}

export default Lisatoode