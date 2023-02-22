import { useParams } from 'react-router-dom'
import {useRef} from 'react'
import productsFromFile from "../data/products.json"


function EditProduct() {
  const { id } = useParams();
  const productFound = productsFromFile.find(element => element.id === Number(id));
  const index = productsFromFile.indexOf(productFound);
  const idRef = useRef();
  const nameRef = useRef();
  const priceRef = useRef ();
  const imageRef = useRef ();
  const categoryRef = useRef ();
  const descriptionRef = useRef ();
  const activeRef = useRef ();

  const changeProduct = () => {}
    const newProduct = {
      "id" : idRef.current.value,
      "image" : imageRef.current.value,
      "name" : nameRef.current.value,
      "price" : priceRef.current.value,
      "description" : descriptionRef.current.value,
      "category" : categoryRef.current.value,
      "active" : activeRef.current.value,
    }
  return (
    <div>
      <label>ID</label><br />
      <input ref={idRef} type="text" defaultValue={productFound.id} /> <br />
      <label htmlFor="">Name</label><br />
      <input ref={nameRef} type="text" defaultValue={productFound.name}/><br />
      <label htmlFor="">Price EUR</label><br />
      <input ref={priceRef} type="text" defaultValue={productFound.price}/> <br />
      <label htmlFor="">Image</label><br />
      <input ref={imageRef} type="text" defaultValue={productFound.image}/><br />
      <label htmlFor="">Category</label><br />
      <input ref={categoryRef} type="text" defaultValue={productFound.category}/><br />
      <label htmlFor="">Description</label><br />
      <input ref={descriptionRef} type="text" defaultValue={productFound.description}/><br />
      <label htmlFor="">Active</label><br />
      <input ref={activeRef} type="text" defaultValue={productFound.active}/><br />
      <button onClick={changeProduct} >Change</button>
    </div>
  )
}

export default EditProduct

//1.ok muudan URLi vastuvõtlikkuse muutuja osas
//2.ok Võimaldan kuskilt lehelt sinna URL-le sattuda, saates kaasa selle muutuja
//3.ok Võtame useParams abil muutuja kasutusele (useParams osas import)
//4.ok Otsime sobiva toote üles (tooted on käes, ID on käes, ketrame kõiki tooteid, kuni ID-d matchivad)
//5.ok Teeme 7x label + input
//6.ok Teeme 7x useRef (useRef osas import)
//7. 7x defaultValue={productFound.OMADUS}
//8. Teeme nupu ja seome funktsiooniga
//9. Funktsiooni sees konstrueerime objekti kokku const newProduct = {1ref, 2ref,3ref,}
//10. Leiame üles järjekorranumbri
//11. Funktsiooni sees teeme asenduse : productFound[jrkNr]=newProduct
//12. Tagasisuunamine toodete haldamise lehele