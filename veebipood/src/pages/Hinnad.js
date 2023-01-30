import { useState } from "react";

function Hinnad() {
    const [hinnad, uuedHinnad] = useState ([21,12,99,74,592,7]);
    const nulliFiltrid = ()=> { uuedHinnad([21,12,99,74,592,7])
    }
    const Suurenda = () => {
        const tulem = hinnad.map( e => e + 1 );
        uuedHinnad(tulem);
    }
    const Paaritud = () => {
        const tulem = hinnad.filter( e => e % 2===1);
        uuedHinnad(tulem);
    }
    const V2henda = () => {
        const tulem = hinnad.map(e => e-1);
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
        hinnad.sort();
        uuedHinnad(hinnad.slice())
    }
    const ZtoA = () => {
        hinnad.sort();
        hinnad.reverse();
        uuedHinnad(hinnad.slice())
    }
    const kustuta = (index) => {
        hinnad.splice(index,1);
        uuedHinnad(hinnad.slice())
    }

  return (
    <div>
        
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
{hinnad.map((element, index) => <button key={index} onClick = { () => kustuta (index)} > {element} </button> )}
<br /><br />
<button onClick={nulliFiltrid} >Reset</button>
        
    </div>
  )
}

export default Hinnad