import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProductsPage from './pages/ProductsPage';
import CartPage from './pages/CartPage';
import AdminPage from './pages/AdminPage';  // Asegúrate de tener esta importación
import NavBar from './components/NavBar';
import { CartProvider } from './context/CartContext';  // Importa el CartProvider

const App = () => {
  return (
    <CartProvider>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/admin" element={<AdminPage />} />  {/* Añadir ruta admin */}
      </Routes>
    </CartProvider>
  );
};

export default App;
