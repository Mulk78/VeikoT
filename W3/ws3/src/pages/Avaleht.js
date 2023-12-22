import React from 'react'

function Avaleht() {
  return (
    <div>
      <img src="/syda mitteliketud.svg" alt="" />
      <img src="/syda liketud.svg" alt="" />
      <img src="/syda kuldne.svg" alt="" />
      <button className="nupu-stiil">Pane liketuks</button>
      <button className="nupu-stiil">Pane mitteliketud</button>

      <br /><br />
      
      <button className="nupu-stiil"> - </button>
      <span> 7 </span>
      <button className="nupu-stiil"> + </button>
    </div>
  )
}

export default Avaleht