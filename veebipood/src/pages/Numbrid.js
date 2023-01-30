import { useState } from "react"


function Numbrid() {
const [numbers, muudaNumbrid] = useState ([4,23,7,39,19,0,17,14,2,45])
const nulliFiltrid = ()=> { muudaNumbrid([4,23,7,39,19,0,17,14,2,45])
}
const esimeneNumber = ()=> {numbers.sort((a,b)=>a.localeCompare(b));
    muudaNumbrid(numbers.slice());
}
const RevEsimeneNumber = ()=> {numbers.sort((a,b)=>b.localeCompare(a));
    muudaNumbrid(numbers.slice());
}
const NumKasv = ()=> {numbers.sort((a,b)=>a-b);
    muudaNumbrid(numbers.slice());
}
const NumKah = ()=> {numbers.sort((a,b)=>b-a);
    muudaNumbrid(numbers.slice());
}
const Suurem8 = ()=> {
    const tulem = numbers.filter(e => e > 8 );
    muudaNumbrid(tulem);
}
const V2iksem10 = ()=> {
    const tulem = numbers.filter(e => e < 10 );
    muudaNumbrid(tulem);
}
const PaarisArv = ()=> {
    const tulem = numbers.filter(e => e % 2===0 );
    muudaNumbrid(tulem);
}
const PaarituArv = ()=> {
    const tulem = numbers.filter(e => e % 2===1 );
    muudaNumbrid(tulem);
}
const Korda2 = ()=> {
    const tulem = numbers.map(e => e*2 );
    muudaNumbrid(tulem);
}
const Jaga3 = ()=> {
    const tulem = numbers.map(e => e/3 );
    muudaNumbrid(tulem);
}
const Liida10 = ()=> {
    const tulem = numbers.map(e => e+10 );
    muudaNumbrid(tulem);
}
const Lahuta1 = ()=> {
    const tulem = numbers.map(e => e-1 );
    muudaNumbrid(tulem);
}
return (
<div>Numbrid
<br /> 
<button onClick={esimeneNumber} >Esimene nr väiksemast suuremaks</button>
<button onClick={RevEsimeneNumber} >Esimene nr suuremast väiksemaks</button>
<button onClick={NumKasv} >Numbri suuruse järgi kasvavalt</button>
<button onClick={NumKah} >Numbri suuruse järgi kahanevalt</button>
<br />
<div>Filtrid</div>
<button onClick={Suurem8} >Jäta alles suuremad kui 8</button>
<button onClick={V2iksem10} >Jäta alles väiksemad kui 10</button>
<button onClick={PaarisArv} >Jäta alles paarisarvud</button>
<button onClick={PaarituArv}>Jäta alles paaritud arvud</button>
<div>Tehted</div>
<button onClick={Korda2} >x 2</button>
<button onClick={Jaga3} > / 3 </button>
<button onClick={Liida10} > + 10 </button>
<button onClick={Lahuta1} > -1 </button>
{numbers.map(e=> <div>{e} </div> )}
<button onClick={nulliFiltrid} >Reset</button>
    </div>
  )
}

export default Numbrid