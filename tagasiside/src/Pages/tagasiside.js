import {useRef} from 'react';
import {useState} from 'react';

function Tagasiside() {
    const [tagasisided, m22raTagasisided] = useState ( ["Oli hea", "Huvitav", "Teistsugune", "Põnev"]);
    const tagasisideRef = useRef();
function kustuta(index){
    tagasisided.splice(index);
    m22raTagasisided(tagasisided.slice());
}
function lisaUusTagasiside(){
    tagasisided.push(tagasisideRef.current.value);
    m22raTagasisided(tagasisided.slice());
}
  return (
    
    <div>Tagasisided : 
        {tagasisided.map((element, index)=> 
        <div>
         <span>{element} </span>
         <button onClick={() => kustuta(index) } >X</button>
         </div> ) } <br />
         <label>Lisa uus tagasiside : </label>
         <input ref={tagasisideRef}  type="text" />
         <button onClick={() => lisaUusTagasiside()} >Sisesta</button>
    </div>
  )
}

export default Tagasiside