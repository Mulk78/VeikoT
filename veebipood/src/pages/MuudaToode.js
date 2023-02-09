import { useState } from "react"
import { useParams } from "react-router-dom"

function MuudaToode() {
const {jrkNr} = useParams();
const tooted = JSON.parse(localStorage.getItem("tooted")) || [];
const leitudToode = tooted[jrkNr];

  return (
    <div>MuudaToode</div>
  )
}

export default MuudaToode