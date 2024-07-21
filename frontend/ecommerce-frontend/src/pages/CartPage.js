import React from 'react';
import { useCart } from '../context/CartContext';

const CartPage = () => {
  const { cart, dispatch } = useCart();

  const removeFromCart = (product) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: product });
  };

  return (
    <div>
      <h1>Carrito</h1>
      {cart.length === 0 ? (
        <p>No hay productos en el carrito.</p>
      ) : (
        <ul>
          {cart.map((product) => (
            <li key={product.id}>
              {product.name} - ${product.price}
              <button onClick={() => removeFromCart(product)}>Eliminar</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CartPage;
