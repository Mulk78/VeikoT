import { useParams } from "react-router-dom";

function YksikToode() {
  //useState -> React
  //useRef -> React
  //useParams -> react-router-dom
const {index} = useParams() ;
const tooted = JSON.parse(localStorage.getItem("tooted")) || [];
const leitudToode = tooted[index];

  return (
    <div>
      {leitudToode}
      {leitudToode === undefined && <div>Toodet ei leitud!</div>}
    </div>
  )
}

export default YksikToode