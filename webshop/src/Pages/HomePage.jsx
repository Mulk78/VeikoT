import productsFromFile from "./data/products.json";
import Button from 'react-bootstrap/Button';
import { useState } from "react";

function HomePage() {
  const [products, setProducts] = useState(productsFromFile);

  const addToCart = (productClicked) => {
    const cartLS = JSON.parse(localStorage.getItem("cart")) || [];
    cartLS.push(productClicked);
    localStorage.setItem("cart", JSON.stringify(cartLS))
  }
  const sortAZ = () => {
    products.sort((a,b) => a.name.localeCompare(b.name) );
    setProducts(products.slice())
  }
  const sortZA = () => {products.sort((a,b) => b.name.localeCompare(a.name) );
    setProducts(products.slice())
  }
  const sortPriceAsc = () => {
    products.sort((a,b) => a.price-b.price );
    setProducts(products.slice())
  }
  const sortPriceDesc = () => {products.sort((a,b) => b.price-a.price );
    setProducts(products.slice())
  }
  const filterByCategory = (categoryClicked) => {
    const result = productsFromFile.filter(element => element.category === categoryClicked);
    setProducts(result);
  }

  return (
    <div>
      <Button onClick={()=> filterByCategory("guitar")} variant="secondary">guitar</Button>
      <Button onClick={()=> filterByCategory("drum")} variant="secondary">drum</Button>
      <br /><br />
      <div> {products.length} Products shown </div>
      <br />
      <Button onClick={sortAZ} >Sort A-Z</Button>
      <Button onClick={sortZA} >Sort Z-A</Button>
      <Button onClick={sortPriceAsc} >Sort price asc</Button>
      <Button onClick={sortPriceDesc} >Sort price desc</Button>
      <br /><br />
      {products.map(product => 
      <div key={product.id} >
        <img src={product.image} alt="" />
        <h2> {product.name} </h2>
        <div>  EUR : {product.price} </div>
        <Button variant="secondary" onClick={() => addToCart(product) } >Lisa ostukorvi</Button>
      </div> )}
    </div>
  )
}

export default HomePage