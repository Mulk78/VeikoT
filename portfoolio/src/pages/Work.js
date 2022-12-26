import { Link } from "react-router-dom"
function Work() {
    return (  
        <div>
            <Link to="/"><button>Tagasi</button></Link>
            <div>Tööde sisu</div>
            <div>Tegin nuppude taustad halliks, et oleks paremini näha</div>
            <div>Arusaamatuks jäi aga, miks pealehel olev logo on teises kohas</div>
        </div>
    );
}

export default Work;