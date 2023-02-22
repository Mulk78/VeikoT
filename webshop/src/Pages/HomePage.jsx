import productsFromFile from "./data/products.json";
import Button from 'react-bootstrap/Button';

function HomePage() {
  const addToCart = (productClicked) => {
    const cartLS = JSON.parse(localStorage.getItem("cart")) || [];
    cartLS.push(productClicked);
    localStorage.setItem("cart", JSON.stringify(cartLS))
  }

  return (
    <div>
      {productsFromFile.map(product => 
      <div key={product.id} >
        <img src={product.image} alt="" />
        <h2> {product.name} </h2>
        <div> {product.price} </div>
        <Button variant="secondary" onClick={() => addToCart(product) } >Lisa ostukorvi</Button>
      </div> )}
    </div>
  )
}

export default HomePage