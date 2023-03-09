import React from 'react'
import Button from 'react-bootstrap/Button';
import productsFromFile from "../../data/products.json";
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useRef } from 'react';

function MaintainProducts() {
  const [products, setProducts] = useState(productsFromFile);
  const searchedProductRef = useRef();

  const deleteProduct = (productId) => {
    const index = productsFromFile.findIndex(element => element.id === productId);
    productsFromFile.splice(index,1);
    setProducts(productsFromFile.slice());
  }
  const searchFromProducts = () => {
    const found = productsFromFile.filter( element => element.name.includes(searchedProductRef.current.value));
    setProducts(found);
  }


  return (
    <div>
      <input ref={searchedProductRef} onChange={searchFromProducts} type="text" />
      {products.map(product => 
      <div key={product.id}>
        <img src= {product.image} alt="" />
        <div> {product.id} </div>
        <div> {product.name} </div>
        <div> € {product.price} </div>
        <div> {product.description} </div>
        <div> {product.category} </div>
        <Button as={Link} to={"/admin/edit-product/" + product.id} variant="warning" >Muuda</Button>
        <Button variant="danger" onClick={()=> deleteProduct(product.id)}>Kustuta</Button>
      </div> )} 


    </div>
  )
}

export default MaintainProducts