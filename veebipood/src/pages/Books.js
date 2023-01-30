import { useState } from "react"

function Books() {
    const [books, uuendaBooks] = useState(["Aabits",  "The Great Gatsby", "War and Peace","Hamlet","Moby Dick", "Eluterve pohhuist", "Rehepapp"]);
    const tagasiOriginaali = ()=> { 
        uuendaBooks (["Aabits",  "The Great Gatsby", "War and Peace","Hamlet","Moby Dick", "Eluterve pohhuist", "Rehepapp"])
    }
    const AtoZ= ()=> { 
        books.sort();
        uuendaBooks(books.slice());
    }
    const ZtoA= ()=> { 
       books.sort((a,b)=>b.localeCompare(a));
       uuendaBooks(books.slice());
    }
    const SonaPikkus = ()=> { 
        books.sort((a,b)=>a.length - b.length);
        uuendaBooks(books.slice());
     }
     //Sõnade arvu ei oska paika seadistada
    const SonadeArv =()=> { 
        books.sort((a,b)=>a.charAt(1).localeCompare(b.charAt(2)));
        uuendaBooks(books.slice());
     }
     const ThegaAlgavad = () => { 
        const tulem = books.filter( e => e.startsWith("The","the","THE"));
        uuendaBooks(tulem);
     }
     const KeskelAnd = ()=>{ 
        const tulem = books.filter( e => e.includes("and","AND"));
        uuendaBooks(tulem);
     }
     const RohkemKui10 = ()=>{ 
        const tulem = books.filter( e => e.length>10);
        uuendaBooks(tulem);
     }
     const V2hemKui7 = ()=>{ 
        const tulem = books.filter( e => e.length<7);
        uuendaBooks(tulem);
     }
     const KoikSuureks = () => {
        const tulem = books.map( e => e.toUpperCase());
        uuendaBooks(tulem);
    }
    //KõikV2ikeseks ja KõikSuureks funktsiooniga ei toimi enam "jäta alles THE-ga algavad"
    const KoikV2ikseks = () => {
        const tulem = books.map( e => e.toLowerCase());
        uuendaBooks(tulem);
    }
    //Ei suuda kuidagi välja mõelda seda "lisa ." ja "lisa ! "
   
    return (
    <div>
        <br />
        
        <button onClick={AtoZ} >A to Z</button>
        <button onClick={ZtoA}>Z to A</button>
        <button onClick={SonaPikkus} >Sort sõna pikkuse järgi</button>
        <button onClick={SonadeArv} >Sort sõnade arvu järgi</button><br />
        <br />
        <button onClick={ThegaAlgavad} >Jäta alles THE-ga algavad</button>
        <button onClick={KeskelAnd} >Jäta alles kellel keskel "and"</button>
        <button onClick={RohkemKui10} >Jäta alles rohkem kui 10 tähte</button>
        <button onClick={V2hemKui7} >Jäta alles vähem kui 7 tähte</button><br />
        <br />
        <button onClick={KoikV2ikseks}>Kõik väikesed tähed</button>
        <button onClick={KoikSuureks}>Kõik suured tähed</button>
        <button>Punkt lõppu</button>
        <button>! lõppu</button><br />
        <br />
        {books.map(e=> <div>{e} </div> )} 
<br /><br />
<button onClick={tagasiOriginaali}>Reset</button>

        
    </div>
  )
}

export default Books