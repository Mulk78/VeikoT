import React, { useState } from 'react';

const BikeStore = () => {
  const [bikes, setBikes] = useState([
    { id: 1, name: 'Trek FX', price: 499.99, image: 'https://via.placeholder.com/300x200.png?text=Trek+FX' },
    { id: 2, name: 'Giant Escape', price: 599.99, image: 'https://via.placeholder.com/300x200.png?text=Giant+Escape' },
    { id: 3, name: 'Specialized Sirrus', price: 699.99, image: 'https://via.placeholder.com/300x200.png?text=Specialized+Sirrus' }
  ]);
  
  const [cart, setCart] = useState([]);

  const addToCart = (bike) => {
    setCart([...cart, bike]);
  };

  const removeFromCart = (bike) => {
    const newCart = cart.filter(item => item.id !== bike.id);
    setCart(newCart);
  };

  const totalPrice = cart.reduce((total, bike) => total + bike.price, 0);

  return (
    <div>
      <h1>Jalgratta e-pood</h1>
      <div className="bike-list">
        {bikes.map(bike => (
          <div key={bike.id}>
            <img src={bike.image} alt={bike.name} />
            <h2>{bike.name}</h2>
            <p>{`$${bike.price}`}</p>
            <button onClick={() => addToCart(bike)}>Lisa korvi</button>
          </div>
        ))}
      </div>
      <div className="cart">
        <h2>Ostukorv</h2>
        <ul>
          {cart.map(bike => (
            <li key={bike.id}>
              <span>{bike.name}</span>
              <button onClick={() => removeFromCart(bike)}>Eemalda</button>
            </li>
          ))}
        </ul>
        <p>Kokku: {`$${totalPrice}`}</p>
        <button>Osta</button>
      </div>
    </div>
  );
};

export default BikeStore;
