import { useRef, useState } from "react";

function Poed() {
    const [poed, uuendaPoed] =  useState(["Ülemiste", "Viimsi", "Rocca", "Magistral", "Vesse", "Kristiine", "Järveotsa"]);
    const tagasiOriginaali = ()=> {
        uuendaPoed(["Ülemiste", "Viimsi", "Rocca", "Magistral", "Vesse", "Kristiine", "Järveotsa"]);
    }
    const sorteeriAZ = ()=>{
        poed.sort();
        uuendaPoed(poed.slice()); //võimalik asendada  uuendaPoed([...poed]);
    }
    const sorteeriZA = ()=>{
        poed.sort((a,b)=>b.localeCompare(a));
        uuendaPoed(poed.slice());
    }
    const sorteeriT2htKasv = ()=>{
        poed.sort((a,b)=>a.length - b.length);
        uuendaPoed(poed.slice());
    }
    const sorteeriT2htKah = ()=>{
        poed.sort((a,b)=>b.length - a.length);
        uuendaPoed(poed.slice());
    }
    const sorteeriTeineT2ht = ()=>{
        poed.sort((a,b) => a.charAt(1).localeCompare(b.charAt(1)));
        uuendaPoed(poed.slice())
    }
    const filtreeriELoppevad = () => {
        const tulem = poed.filter( e => e.endsWith("e"));
        uuendaPoed(tulem);
    }
    const filtreeriRohkemKui8T2hemärki = () => {
        const tulem = poed.filter( e => e.length >8);
        uuendaPoed(tulem);
    }
    const filtreeri9T2hemärki = () => {
        const tulem = poed.filter( e => e.length === 9);
        uuendaPoed(tulem);
    }
    const filtreeriKolmasT2htI = () => {
        const tulem = poed.filter( e => e.charAt(2) === "i");
        uuendaPoed(tulem);
    }
    const filtreeriSonasIS = () => {
        const tulem = poed.filter( e => e.includes ("is"));
        uuendaPoed(tulem);
    }
    const muudaKoikSuureks = () => {
        const tulem = poed.map( e => e.toUpperCase());
        uuendaPoed(tulem);
    }
    const muudaKoikV2ikseks = () => {
        const tulem = poed.map( e => e.toLowerCase());
        uuendaPoed(tulem);
    }
    const MuudaIOks = () => {
        const tulem = poed.map( e => e.replaceAll("i", "o"));
        uuendaPoed(tulem);
    }
    const kustuta = (index) => {
        poed.splice(index,1);
        uuendaPoed(poed.slice())
    }
    const nimiViide = useRef();
    const lisa = () => {
        poed.push(nimiViide.current.value);
        uuendaPoed(poed.slice())
    }
  return (
<div>
    <br />
    <label>Uue poe nimi</label><br />
        <input ref={nimiViide} type="text" /><br />
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
    <br /><br />
    <div> Poode on {poed.length} tk </div>
    <br />
{poed.map((e,i)=> 
<div key= {i}>
    {e}
    <button onClick={ () => kustuta (i) } >X</button> </div> )}
    <div>--------------</div>
    <div>Ülemiste</div>
    <div>Viimsi</div>
    <div>Rocca</div>
    <div>Magistral</div>
    <div>Vesse</div>
    <div>Kristiine</div>
    <div>Järveotsa</div>
</div>
  )

}

export default Poed