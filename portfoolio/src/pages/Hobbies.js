import { Link } from "react-router-dom"
function Hobbies() {
    return (  
        <div>
            <Link to="/"><button>Tagasi</button></Link>
            <div>Hobide sisu</div>
            <div>Tegin nuppude taustad halliks, et oleks paremini näha</div>
        </div>
    );
}

export default Hobbies;