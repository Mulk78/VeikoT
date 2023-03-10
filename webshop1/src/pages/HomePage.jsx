import productsFromFile from "../data/products.json";
import Button from '@mui/material/Button';
import { useState } from "react";
import categoriesFromFile from "../data/categories.json";

function HomePage() {
  const [products, setProducts] = useState(productsFromFile);

  const addToCart = (productClicked) => {
    const cartLS = JSON.parse(localStorage.getItem("cart")) || [];
    cartLS.push(productClicked);
    localStorage.setItem("cart" , JSON.stringify(cartLS));
    }
  const sortAZ = ()=>{
    products.sort((a,b) => a.name.localeCompare(b.name) );
    setProducts(products.slice())
  }
  const sortZA = ()=>{products.sort((a,b) => b.name.localeCompare(a.name) );
    setProducts(products.slice())
  }
  const sortPriceAsc = ()=>{
    products.sort((a,b) => a.price-b.price );
    setProducts(products.slice())
  }
  const sortPriceDesc = ()=>{
    products.sort((a,b) => b.price-a.price );
    setProducts(products.slice())
  }
  const filterByCategory = (categoryClicked) => {
    const result = productsFromFile.filter(element => element.category === categoryClicked);
    setProducts(result);
  }
    

  return (
    <div>
      
      {categoriesFromFile.map(element => 
       <button key={element.name} onClick={()=>filterByCategory(element.name)} > {element.name} </button> )}
<br /><br />

      <Button onClick={() => filterByCategory("guitar")} variant="outlined">Guitar</Button>
      <Button onClick={() => filterByCategory("drum")}  variant="outlined">Drum</Button>
      <Button onClick={sortAZ} variant="outlined">Sort A-Z</Button>
      <Button onClick={sortZA} variant="outlined">Sort Z-A</Button>
      <Button onClick={sortPriceAsc}variant="outlined">Sort price asc</Button>
      <Button onClick={sortPriceDesc}variant="outlined">Sort price desc</Button>
      <br /><br />
      <div> {products.length} products shown </div>
      <br />
     {products.map(product => 
      <div key={product.id}>
        <img src= {product.image} alt="" />
        <div> {product.name} </div>
        <div> € {product.price} </div>
        <Button variant="outlined" onClick={() => addToCart(product)}>Lisa ostukorvi</Button>
      </div> )}    
    </div>
  )
}

export default HomePage