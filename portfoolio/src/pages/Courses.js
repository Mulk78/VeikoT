import { Link } from "react-router-dom"
function Courses() {
    return (  
        <div>
            <Link to="/"><button>Tagasi</button></Link>
            <div>Kursuste sisu</div>
            <div>Tegin nuppude taustad halliks, et oleks paremini näha</div>
        </div>
    );
}

export default Courses;