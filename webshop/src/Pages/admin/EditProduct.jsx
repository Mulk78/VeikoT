import { useParams , useNavigate, useState } from 'react'
import {useRef} from 'react'
import productsFromFile from "../../Pages/data/products.json"
import {Alert} from "@mui/material"


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
  const navigate = useNavigate();

  const changeProduct = () => {}
    const newProduct = {
      "id" : Number(idRef.current.value),
      "image" : imageRef.current.value,
      "name" : nameRef.current.value,
      "price" : Number(priceRef.current.value),
      "description" : descriptionRef.current.value,
      "category" : categoryRef.current.value,
      "active" : activeRef.current.checked,
    }
    
productsFromFile[index] = newProduct;
    navigate("/admin/maintain-products");
  const [isError , setError] = useState (false);

  const checkIdUniqueness = () => {
    const found = productsFromFile.find(element => element.id === Number(idRef.current.value));
    if (found = undefined) {
      setError(false);
    } else {
      setError(true);
    }
  }

  return (
    <div>
      {isError === true &&  <Alert severity="error">Sisestatud ID on juba olemas!</Alert>}
      {productFound!== undefined && <div>
      <label>ID</label><br />
        <input ref={idRef} onChange={checkIdUniqueness} type="number" defaultValue={productFound.id} /> <br />
        <label htmlFor="">Name</label><br />
        <input ref={nameRef} type="text" defaultValue={productFound.name}/><br />
        <label htmlFor="">Price</label><br />
        <input ref={priceRef} type="number" defaultValue={productFound.price}/> <br />
        <label htmlFor="">Image</label><br />
        <input ref={imageRef} type="text" defaultValue={productFound.image}/><br />
        <label htmlFor="">Category</label><br />
        <input ref={categoryRef} type="text" defaultValue={productFound.category}/><br />
        <label htmlFor="">Description</label><br />
        <input ref={descriptionRef} type="text" defaultValue={productFound.description}/><br />
        <label htmlFor="">Active</label><br />
        <input ref={activeRef} type="checkbox" defaultChecked={productFound.active}/><br />
        <button onClick={changeProduct} disabled={isError=== true} >Change</button>
     </div>}
     {productFound === undefined && <div>Product not found!</div> }
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