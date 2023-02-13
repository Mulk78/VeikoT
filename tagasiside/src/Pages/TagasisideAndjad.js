import {useRef} from 'react';
import {useState} from 'react';
import andjateFail from "../nimed.json";

function TagasisideAndjad() {
    const [andjad, uuendaAndjad] = useState(andjateFail);
    const filtreeriM = () => {
        const vastus = andjad.filter(element => element.startsWith('M'));
        uuendaAndjad(vastus);
    }
    const filtreeri6t2helised = ()=>{
        const vastus= andjad.filter(element => element.length === 6);
        uuendaAndjad(vastus);
    }
    const filtreeriYl6ppevad = ()=>{
        const vastus= andjad.filter(element => element.endsWith("y"));
        uuendaAndjad(vastus);
    }
    const sortZA = () =>{
        andjad.sort();
        andjad.reverse();
        uuendaAndjad(andjad.slice());
    }
    const insertEST = () => {
        const vastus = andjad.map(element => "EST-" + element);
        uuendaAndjad(vastus);
    }
    const kustuta = (index)=>{
        andjad.splice(index,1)
        uuendaAndjad(andjad.slice());
    }
    const andjaRef = useRef();
    const lisa =()=> {
        andjad.push(andjaRef.current.value);
        uuendaAndjad(andjad.slice());
    }
return (
    <div>
<div>Kuva palju nimesid on .length abil : {andjad.length} inimest</div><br />
<div>Filtrid</div><br />
<button onClick={filtreeriM} >M tähega algavad nimed</button>
<button onClick={filtreeri6t2helised} >6 tähelised nimed</button>
<button onClick={filtreeriYl6ppevad} >Y tähega lõppevad nimed</button>
<div>Sorteeri</div><br /> 
<button onClick={sortZA} >Z-A</button>
<button onClick={insertEST} >.map funktsioon + EST iga nime ette</button>
<br /><br />
    {andjad.map((element,index) =>
    <div key={element}>
        {element}<button onClick={()=> kustuta.index} >Võimalda kustutada igaüht</button>
    </div>
    )}
<label>Võimalda uut nime kõige lõppu lisada + inpt+button</label><br />
<input ref={andjaRef} type="text" /><br />
<button onClick={lisa} >Lisa</button>
    </div>);
}

export default TagasisideAndjad