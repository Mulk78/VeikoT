import { useState } from "react";

function Hinnad() {
    const [hinnad, uuedHinnad] = useState
        ([
            { "nimi": "Coca", "hind" : 21, "valuuta": "EUR" , "alandatud":false },
            { "nimi": "anta", "hind" : 12, "valuuta": "USD" , "alandatud":true },
            { "nimi": "Vesi", "hind" : 99, "valuuta": "AUD" , "alandatud":false },
            { "nimi": "Kali", "hind" : 74, "valuuta": "JPN" , "alandatud":true },
            { "nimi": "Fuze", "hind" : 592, "valuuta": "PLN" , "alandatud":false },
            { "nimi": "Limonaad", "hind" : 7, "valuuta": "GBP" , "alandatud":true },
        ]);
    const nulliFiltrid = ()=> { 
        uuedHinnad([
        { "nimi": "Coca", "hind" : 21, "valuuta": "EUR" , "alandatud":false },
        { "nimi": "anta", "hind" : 12, "valuuta": "USD" , "alandatud":true },
        { "nimi": "Vesi", "hind" : 99, "valuuta": "AUD" , "alandatud":false },
        { "nimi": "Kali", "hind" : 74, "valuuta": "JPN" , "alandatud":true },
        { "nimi": "Fuze", "hind" : 592, "valuuta": "PLN" , "alandatud":false },
        { "nimi": "Limonaad", "hind" : 7, "valuuta": "GBP" , "alandatud":true },
        ]);
    }
    const Suurenda = () => {
        const tulem = hinnad.map(e => { return{...e, "hind": e.hind + 1 }});
        uuedHinnad(tulem);
    }
    const Paaritud = () => {
        const tulem = hinnad.filter( e => e % 2===1);
        uuedHinnad(tulem);
    }
    const V2henda = () => {
        const tulem = hinnad.map(e => { return{...e, "hind": e.hind - 1 }});
        uuedHinnad(tulem);
    }
    const suuremEnne = () => {
        hinnad.sort((a, b) => b-a);
        uuedHinnad(hinnad.slice())
    }
    const v2iksemEnne = () => {
        
        hinnad.sort((a, b) => a - b);
        uuedHinnad(hinnad.slice())
    }
    const SuuremKui30 = () => {
        const tulem = hinnad.filter (e => e>30);
        uuedHinnad(tulem);
    }
    const SuuremKui301= () => {
        const tulem = hinnad.filter (e=>e.toString().startsWith("1"));
        uuedHinnad(tulem);
    }
    const AtoZ = () => {
        hinnad.sort((a,b)=> a.hind.toString().localeCompare(b.hind.toString()) );
        uuedHinnad(hinnad.slice())
    }
    const ZtoA = () => {
        hinnad.sort((a,b)=> b.hind.toString().localeCompare(a.hind.toString()));
        
        uuedHinnad(hinnad.slice())
    }
    const kustuta = (index) => {
        hinnad.splice(index,1);
        uuedHinnad(hinnad.slice())
    }
    const arvutaNumbridKokku = () => {
        console.log("Arvutatud!");
        return hinnad.reduce((summa, toode ) => summa + toode.hind, 0 );
    }

  return (
    <div>
        <br />
        <button onClick={Suurenda}>Suurenda 1 võrra</button>
        <button onClick={V2henda}>Vähenda 1 võrra</button>
        <button onClick={suuremEnne}>Sorteeri suurem enne</button>
        <button onClick={v2iksemEnne}>Sorteeri väiksem enne</button>
        <br />
        <button onClick={SuuremKui30}>Filtreeri suuremad kui 30</button>
        <button onClick={SuuremKui301}>Filtreeri 1-ga algavad</button>
        <button onClick={AtoZ}>Sorteeri A-Z</button>
        <button onClick={ZtoA}>Sorteeri Z-A</button>
        <button onClick={Paaritud}>Näita paarituid</button>
        <br /><br />
{hinnad.map((element, index) => 
    <button key={index} onClick = { () => kustuta (index)} > 
    {element.hind} 
    </button> )}
<br /><br />
<button onClick={nulliFiltrid} >Reset</button>
<div>Kokku : {arvutaNumbridKokku()} </div>        
    </div>
  )
}

export default Hinnad