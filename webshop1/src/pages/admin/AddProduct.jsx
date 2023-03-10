import React from 'react';
import Button from 'react-bootstrap/Button';
import { useRef } from 'react'

// 7x label + input
// 7x useRef + import
// Teeme nupu ja seome selle funktsiooniga
// Funktsiooni sees konstrueerime objekti kokku const newProduct ={1ref,2ref,3ref,}
// teeme .push()
// numbrid teeme numbriks ja boolean checkbox

function AddProduct() {
  const idRef = useRef();
  const nameRef = useRef();
  const priceRef = useRef();
  const imageRef = useRef();
  const categoryRef = useRef();
  const descriptionRef = useRef();
  const activeRef = useRef();

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