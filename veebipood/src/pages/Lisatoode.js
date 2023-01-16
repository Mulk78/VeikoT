import { useRef, useState } from "react"


function Lisatoode() {
const [sonum, muudaSonum] = useState ("Lisa toode");
const toodeViide = useRef(); // toodeRef --- läheb inputide külge

function lisa () {
  if (toodeViide.current.value === "") {
    muudaSonum("Toode sisestamata!")
  } else {
    muudaSonum ("Toode lisatud!")
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