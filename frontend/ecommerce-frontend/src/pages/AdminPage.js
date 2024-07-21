import React, { useState } from 'react';
import axios from 'axios';

const AdminPage = () => {
  const [productName, setProductName] = useState('');
  const [productDescription, setProductDescription] = useState('');
  const [productPrice, setProductPrice] = useState('');
  const [productCategory, setProductCategory] = useState('');
  const [productStock, setProductStock] = useState('');
  const [productImage, setProductImage] = useState('');

  const handleCreateProduct = async () => {
    try {
      const newProduct = {
        name: productName,
        description: productDescription,
        price: productPrice,
        category: productCategory,
        stock: productStock,
        image: productImage,
      };

      await axios.post('/api/products', newProduct);
      alert('Producto creado exitosamente');
    } catch (error) {
      console.error('Error creando el producto', error);
      alert('Error creando el producto');
    }
  };

  return (
    <div>
      <h2>Administración de Productos</h2>
      <div>
        <input
          type="text"
          placeholder="Nombre del producto"
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
        />
      </div>
      <div>
        <input
          type="text"
          placeholder="Descripción del producto"
          value={productDescription}
          onChange={(e) => setProductDescription(e.target.value)}
        />
      </div>
      <div>
        <input
          type="number"
          placeholder="Precio del producto"
          value={productPrice}
          onChange={(e) => setProductPrice(e.target.value)}
        />
      </div>
      <div>
        <input
          type="text"
          placeholder="Categoría del producto"
          value={productCategory}
          onChange={(e) => setProductCategory(e.target.value)}
        />
      </div>
      <div>
        <input
          type="number"
          placeholder="Stock del producto"
          value={productStock}
          onChange={(e) => setProductStock(e.target.value)}
        />
      </div>
      <div>
        <input
          type="text"
          placeholder="URL de la imagen del producto"
          value={productImage}
          onChange={(e) => setProductImage(e.target.value)}
        />
      </div>
      <button onClick={handleCreateProduct}>Crear Producto</button>
    </div>
  );
};

export default AdminPage;
