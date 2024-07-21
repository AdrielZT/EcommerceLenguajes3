import React, { useEffect, useState } from 'react';
import ProductItem from '../components/ProductItem';

const ProductsPage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('/api/products')
      .then(response => response.json())
      .then(data => setProducts(data));
  }, []);

  return (
    <div>
      <h1>Productos</h1>
      <div>
        {products.map(product => (
          <ProductItem key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;
