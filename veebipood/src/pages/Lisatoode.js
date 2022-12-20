import { useRef, useState } from "react"


function Lisatoode() {
const [sonum, muudaSonum] = useState ("Lisa uus toode");
const toodeViide = useRef(); // toodeRef --- läheb inputide külge

function lisa () {
  if (toodeViide.current.value === "") {
    muudaSonum("Sa ei saa tõhja nimega uut toodet sisestada!")
  } else {
    muudaSonum ("Toode ilusti lisatud!")
  }
  muudaSonum ("Toode lisatud!") ;
}

  return (
    <div>
      <div>{sonum}</div>
      <label>Toote nimi</label>
      <input ref={toodeViide} type="text" />
      <button onClick={lisa} >Lisa</button>
    </div>
  )
}

export default Lisatoode