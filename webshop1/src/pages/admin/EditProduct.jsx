import { useRef } from 'react';
import {useParams , useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import productsFromFile from "../../data/products.json";
import { useState } from 'react';
import categoriesFromFile from "../../data/categories.json"
import { Alert } from "@mui/material";

function EditProduct() {
  const{ id } = useParams();
  const productFound = productsFromFile.find(element => element.id === Number(id));
  const index = productsFromFile.indexOf(productFound);
  const idRef = useRef();
  const nameRef = useRef();
  const priceRef = useRef();
  const imageRef = useRef();
  const categoryRef = useRef();
  const descriptionRef = useRef();
  const activeRef = useRef();
  const navigate = useNavigate();

  const changeProduct = ()=>{
    const newProduct = {
      "id":Number(idRef.current.value),
      "image":imageRef.current.value,
      "name":nameRef.current.value,
      "price":Number(priceRef.current.value),
      "category":categoryRef.current.value,
      "description":descriptionRef.current.value,
      "active":activeRef.current.checked,
    }
    productsFromFile[index]=newProduct;
    navigate("/admin/maintain-products")
  }
  const [isError, setError] = useState(false);
  const checkIdUniqueness = () => {
    const found = productsFromFile.find (element => element.id === Number(idRef.current.value));
    if (found===undefined){
      setError(false); // console.log("Kellelgi pole!"); <= console.log võetakse alati maha
    } else {
      setError(true) // console.log("Kellelgi on olemas!");
    }
  }

  return (
    <div>
      {isError === true && <Alert severity="error" >Sisestatud ID on juba olemas!</Alert>}
      {productFound!== undefined && <div>
        <br />
        <input ref={idRef} onChange={checkIdUniqueness} type="number" defaultValue={productFound.id} />
        <label>ID</label><br />
        <input ref={nameRef} type="text" defaultValue={productFound.name} />
        <label>Name</label><br />
        <input ref={priceRef} type="number" defaultValue={productFound.price} />
        <label>Price</label><br />
        <input ref={imageRef} type="text" defaultValue={productFound.image} />
        <label>Image</label><br />
        {/*<input ref={categoryRef} type="text" defaultValue={productFound.category} /> */}
        <select ref={categoryRef} >
          {categoriesFromFile.map(element => <option> {element.name} </option> )}
        </select><br />
        <label>Category</label><br />
        <input ref={descriptionRef} type="text" defaultValue={productFound.description} />
        <label>Description</label><br />
        <input ref={activeRef} type="checkbox" defaultChecked={productFound.active} />
        <label>Active</label><br />
        <Button onClick={changeProduct} variant="warning" disabled={isError===true} >Change</Button>
      </div>}
      {productFound === undefined && <div>Product not found!</div> }
    </div>
  )
}

export default EditProduct