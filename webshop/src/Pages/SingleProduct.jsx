import React from 'react'

function SingleProduct() {
  return (
    <div>SingleProduct</div>
  )
}

export default SingleProduct

// muudan URLi vastuvõtlikkuse muutuja osas
// võimaldan kuskilt lehelt sinna URL-le sattuda, saates kaasa selle muutuja
// võtan useParams abil muutuja kasutusele (useParams osas import)
// otsin sobiva toote üles (tooted on käes, ID on käes, ketrame kõiki tooteid, kuni ID-d sobivad)
// võtame kõik tooted import abil
// teisendame URL parameetri numbriks
// kuvame HTML-is  <div>{productFound.id}</div>
// valideerimine kui toodet ei leitud (siis võiks teada anda)