import React from 'react';
import { useCart } from '../context/CartContext';

const ProductItem = ({ product }) => {
  const { dispatch } = useCart();

  const handleAddToCart = () => {
    dispatch({ type: 'ADD_TO_CART', payload: product });
  };

  return (
    <div>
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <p>${product.price}</p>
      <button onClick={handleAddToCart}>Agregar al Carrito</button>
    </div>
  );
};

export default ProductItem;
