import React, { useState } from 'react'

function Avaleht() {
  const [kogus, uuendaKogus] = useState (0);
  const [laigitud, muudaLaigitud] = useState (false);
  const [sonum, uuendaSonum] = useState ("Uuenda kogust!");
  const nulli = () => {
    uuendaKogus(0);
    uuendaSonum("Nullitud!");
  }
  const vahenda = () => {
    uuendaKogus( kogus -1 );
    uuendaSonum("Vähendatud!");
  }
  const suurenda = () => {
    uuendaKogus(kogus +1 );
    uuendaSonum("Suurendatud!");
  }

  return (
    <div>
      <div> {sonum} </div>
      {laigitud === false && <img src="/syda mitteliketud.svg" alt="" />}
      {laigitud === true && <img src="/syda liketud.svg" alt="" />}
      {kogus > 10 && <img src="/syda kuldne.svg" alt="" />}
      <button className="nupu-stiil" onClick={()=>muudaLaigitud(true)} >Pane liketuks</button>
      <button className="nupu-stiil" onClick={()=>muudaLaigitud(false)} >Pane mitteliketud</button>

      <br /><br />
      {kogus !== 0 && <button className="nupu-stiil" onClick={nulli} > Nulli </button>}
      <br />
      <button disabled = {kogus === 0} className="nupu-stiil" onClick={vahenda} > - </button>
      <span> {kogus} </span>
      <button className="nupu-stiil" onClick={suurenda} > + </button>
    </div>
  )
}

export default Avaleht