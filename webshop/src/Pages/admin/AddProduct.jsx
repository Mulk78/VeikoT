import React from 'react'
import Button from 'react-bootstrap/Button'
import { useRef } from 'react'

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
    <div>
      <br />
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
      <Button onClick={addProduct}>Add product</Button>
    </div>
  )
}

export default AddProduct

// Teeme 7x label + input
// Teeme 7x useRef (useRef osas import)
// Teeme nupu ja seome funktsiooniga
// Funktsiooni sees konstrueerime objekti kokku const newProduct = {1ref, 2ref,3ref,}
// Numbrid teeme numbriteks ja boolean checkbox
// Teeme .push()
