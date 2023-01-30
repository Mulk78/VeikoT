import { useState } from "react"

function test() {

    const fruits = [ "Apelsin" , "Banaan" , "Õun" , "Laim", "Kirss","Valge klaar"];
    console.log(fruits)
  return (
    <div><br />
<button>A-Z</button>
<button>Z-A</button>
<button>Kahe sõnalised</button>
<button>Sõna pikkus</button>

<br />
{fruits.map(e=> <div>{e} </div> )}
    </div>
  )
}

export default test