import React, { createContext, useContext, useReducer } from 'react';

// Definir las acciones para el carrito
const ADD_TO_CART = 'ADD_TO_CART';

// Crear el contexto
const CartContext = createContext();

// Reducer para manejar las acciones del carrito
const cartReducer = (state, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        items: [...state.items, action.payload],
      };
    default:
      return state;
  }
};

// Proveedor del contexto del carrito
export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, { items: [] });

  const addToCart = (item) => {
    dispatch({ type: ADD_TO_CART, payload: item });
  };

  return (
    <CartContext.Provider value={{ cart: state, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};

// Hook para usar el contexto del carrito
export const useCart = () => {
  return useContext(CartContext);
};
