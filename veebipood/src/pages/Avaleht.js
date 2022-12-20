import { useState } from "react"


function Avaleht() {
const [kogus, muudaKogus] = useState(8); //numbriline
const [sonum, muudaSonum] = useState(""); //sõnaline
const [laigitud, muudaLaigitud] = useState(true); //kahendväärtus

function v2henda (){
muudaKogus (kogus -1)
muudaSonum("Vähendasid kogust");
}
function suurenda (){
muudaKogus (kogus +1)
muudaSonum("Suurendasid kogust");
}
function nulli (){
muudaKogus (0);
muudaSonum("Panid tagasi nulli");
}
  return (
    <div>
      { laigitud === true && <img onClick={() => muudaLaigitud(false)} src="/laigitud.svg" alt="" />}
      { laigitud === false && <img onClick={() => muudaLaigitud(true)} src="/mittelaigitud.svg" alt="" />}
      <button onClick={() => muudaLaigitud(!laigitud)}>Muuda likei</button>
      <div>{sonum}</div>
      {kogus > 0 && <button onClick={nulli}>Tagasi nulli</button>}
      <br />
      <button disabled={kogus === 0}onClick={v2henda}>-</button>
      <div>{kogus}</div>
      <button onClick={suurenda}>+</button>
    </div>
  )
}

export default Avaleht