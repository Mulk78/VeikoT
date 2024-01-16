import React, { useState } from 'react'

function Seaded() {
const [keel, uuendaKeel] = useState (localStorage.getItem("keel"));

const muudaKeelEE = () => {
    uuendaKeel ("est");
    localStorage.setItem("keel","est");
}
const muudaKeelEng = () => {
    uuendaKeel ("eng");
    localStorage.setItem("keel","eng");
}
const muudaKeelNl = () => {
    uuendaKeel ("nl");
    localStorage.setItem("keel","nl");
}
  return (
    <div>
        <br />
        {keel=== "est" &&<div>Eesti keeles</div>}
        {keel=== "eng" &&<div>In English</div>}
        {keel=== "nl" &&<div>In het Netherlands</div>}
        <br />
        <button onClick={muudaKeelEE} className="nupu-stiil">Eesti</button>
        <button onClick={muudaKeelEng} className="nupu-stiil">English</button>
        <button onClick={muudaKeelNl} className="nupu-stiil">Nederlands</button>
    </div>
  )
}

export default Seaded