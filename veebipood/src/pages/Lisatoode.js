import { useRef, useState } from "react"


function Lisatoode() {
const [sonum, muudaSonum] = useState ("Lisa toode");
const toodeViide = useRef(); // toodeRef --- läheb inputide külge
const nimiRef = useRef();
const hindRef = useRef();
const piltRef = useRef();
const aktiivneRef = useRef();

function lisa () {
  if (toodeViide.current.value === "") {
    muudaSonum("Toode sisestamata!")
  } else {
    muudaSonum ("Toode lisatud!" + nimiRef.current.value);
    // [{ "nimi": "Nobe" , "hind":"6" , "pilt":"" , "aktiivne":true}, "BMW", "Mercedes"]
    const tooted = JSON.parse(localStorage.getItem("tooted")||" [] ");  //võib panna peale sulgusid ka selle : ||[]
    const Lisatoode = {
      "nimi" : nimiRef.current.value,
      "hind" : nimiRef.current.value,
      "pilt" : nimiRef.current.value,
      "aktiivne" : nimiRef.current.value,
    };
    tooted.push(Lisatoode);

    localStorage.setItem("tooted" , JSON.stringify(tooted));
    nimiRef.current.value = "" ;
  }
  }

  return (
    <div>
      <br />
      <div>{sonum}</div>
      <br />
      <input ref={nimiRef} type="text" /><br />
      <label>Toote nimi</label> <br />
      <input ref={hindRef} type="number" /><br />
      <label>Toote hind</label> <br />
      <input ref={piltRef} type="text" /><br />
      <label>Toote pilt</label> <br />
      <input ref={aktiivneRef} type="checkbox" /><br />
      <label>Pane igaks juhuks linnuke</label> <br />
      <br />
      <button onClick={lisa} >Lisa</button>
    </div>
  )
}

export default Lisatoode