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
      { leitudToode!== undefined && <div>
      <div>{leitudToode.nimi}</div>
      <div>{leitudToode.pilt}</div>
      <div>{leitudToode.hind}</div>
      <div>{leitudToode.aktiivne}</div>
      </div>}
      {leitudToode === undefined && <div>Toodet ei leitud!</div>}
    </div>
  )
}

export default YksikToode