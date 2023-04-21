import React from 'react';
import Button from 'react-bootstrap/Button';
import { useRef, useState } from 'react'
import productsFromFile from "../../data/products.json";

function AddProduct() {
  const [message, setMessage] = useState();
  const idRef = useRef();
  const nameRef = useRef();
  const priceRef = useRef();
  const imageRef = useRef();
  const categoryRef = useRef();
  const descriptionRef = useRef();
  const activeRef = useRef();

const add = () => {
  if (nameRef.current.value === "") {
    setMessage("Need a name!")
  } else {
    setMessage("Product added:" + nameRef.current.value);
  }
}

  const addProduct = () => {}
  return (
    <div>      <br />
    <input type="number" />
    <label htmlFor=""> ID </label><br />
    <input type="text" />
    <label htmlFor="">Name</label><br />
    <input type="number" />
    <label htmlFor="">Price</label><br />
    <input type="text" />
    <label htmlFor="">Category</label><br />
    <input type="text" />
    <label htmlFor="">Description</label><br />
    <input type="text" />
    <label htmlFor="">Image</label><br />
    <input type="checkbox" />
    <label htmlFor="">Active</label><br />
    <Button onClick={addProduct}>Add product</Button></div>
  )
}

export default AddProduct