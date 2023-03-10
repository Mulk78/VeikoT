import { useRef, useState } from "react";
import poedFailist from "../poed.json";

function Poed() {
    const [poed, uuendaPoed] =  useState(poedFailist);
    const tagasiOriginaali = ()=> {
        uuendaPoed(poedFailist);
    }
    const sorteeriAZ = ()=>{
        poed.sort((a,b) => a.nimi.localeCompare(b.nimi) );
        uuendaPoed(poed.slice()); //võimalik asendada  uuendaPoed([...poed]);
    }
    const sorteeriZA = ()=>{
        poed.sort((a,b)=>b.nimi.localeCompare(a.nimi));
        uuendaPoed(poed.slice());
    }
    const sorteeriT2htKasv = ()=>{
        poed.sort((a,b)=>a.nimi.length - b.nimi.length);
        uuendaPoed(poed.slice());
    }
    const sorteeriT2htKah = ()=>{
        poed.sort((a,b)=>b.nimi.length - a.nimi.length);
        uuendaPoed(poed.slice());
    }
    const sorteeriTeineT2ht = ()=>{
        poed.sort((a,b) => a.nimi.charAt(1).localeCompare(b.nimi.charAt(1)));
        uuendaPoed(poed.slice())
    }
    const filtreeriELoppevad = () => {
        const tulem = poed.filter( e => e.nimi.endsWith("e"));
        uuendaPoed(tulem);
    }
    const filtreeriRohkemKui8T2hemärki = () => {
        const tulem = poed.filter( e => e.nimi.length >8);
        uuendaPoed(tulem);
    }
    const filtreeri9T2hemärki = () => {
        const tulem = poed.filter( e => e.nimi.length === 9);
        uuendaPoed(tulem);
    }
    const filtreeriKolmasT2htI = () => {
        const tulem = poed.filter( e => e.nimi.charAt(2) === "i");
        uuendaPoed(tulem);
    }
    const filtreeriSonasIS = () => {
        const tulem = poed.filter( e => {return e.nimi.includes ("is")});
        uuendaPoed(tulem);
    }
    const muudaKoikSuureks = () => {
        const tulem = poed.map( e => {return{"nimi" : e.nimi.toUpperCase(), "aeg" : e.aeg }});
        uuendaPoed(tulem);
    }
    const muudaKoikV2ikseks = () => {
        const tulem = poed.map(e => {return{ "nimi":  e.nimi.toLowerCase(), "aeg" : e.aeg}});
        uuendaPoed(tulem);
    }
    const MuudaIOks = () => {
        const tulem = poed.map( e => {return { "nimi": e.nimi.replaceAll("i", "o"), "aeg":e.aeg}});
        uuendaPoed(tulem);
    }
    const LisaT2htedeArvL6ppu = () => {
        const tulem = poed.map(e => {return {"nimi" : e.nimi + e.nimi.length, "aeg" : e.aeg} } );
        uuendaPoed(tulem)
    }
    const kustuta = (index) => {
        poed.splice(index,1);
        uuendaPoed(poed.slice())
    }
    const nimiViide = useRef();
    const aegViide = useRef();
    const lisa = () => {
        poed.push({ "nimi" : nimiViide.current.value, "aeg": aegViide.current.value});
        uuendaPoed(poed.slice());
        nimiViide.current.value = "";
        aegViide.current.value = "";
    }
  return (
<div>
    <br />
    <label>Uue poe nimi</label><br />
        <input ref={nimiViide} type="text" /><br />
        <label>Uue poe lahtiolekueg</label><br />
        <input ref={aegViide} type="text" /><br />
        <button onClick={lisa}>Sisesta</button><br /><br />
        
    <button onClick={tagasiOriginaali}>Reset all filters</button>
    <button onClick={()=> uuendaPoed ([])}>Kustuta kõik</button><br />
    <button onClick={sorteeriAZ}>Sorteeri A-Z</button>
    <button onClick={sorteeriZA }>Sorteeri Z-A</button><br />
    <button onClick={sorteeriT2htKasv}>Sorteeri täht kasvav</button>
    <button onClick={sorteeriT2htKah}>Sorteeri täht kahanev</button><br />
    <button onClick={sorteeriTeineT2ht}>Sorteeri teine täht A-Z</button>
    <button onClick={filtreeriELoppevad}>Filtreeri E lõppevad</button><br />
    <button onClick={filtreeriRohkemKui8T2hemärki}>Filtreeri üle 8 tähelised</button>
    <button onClick={filtreeri9T2hemärki}>Filtreeri 9 tähelised</button><br />
    <button onClick={filtreeriKolmasT2htI}>Filtreeri kolmas täht I</button>
    <button onClick={filtreeriSonasIS}>Filtreeri sõnas IS</button><br />
    <button onClick={muudaKoikSuureks}>Kõik suured tähed</button>
    <button onClick={muudaKoikV2ikseks}>Kõik väikesed tähed</button>
    <button onClick={MuudaIOks}>Asenda I O-ga</button>
    <button onClick={LisaT2htedeArvL6ppu}>Tähtede arv</button>
    <br /><br />
    <div> Poode on {poed.length} tk </div>
    <br />
{poed.map((e,i)=> 
<div key= {i}>
    {e.nimi} :
    {e.aeg}
    <button onClick={ () => kustuta (i) } >X</button> </div> )}
    </div>
  )

}

export default Poed