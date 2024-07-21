import React from 'react';
import { useCart } from '../context/CartContext';
import { Container, Row, Col, Button } from 'react-bootstrap';

const CartPage = () => {
  const { cart, dispatch } = useCart();

  const removeFromCart = (id) => {
    dispatch({ type: 'REMOVE_FROM_CART', _id: id });
  };

  return (
    <Container>
      <h1 className="my-4">Carrito</h1>
      {cart.length === 0 ? (
        <p>Tu carrito está vacío</p>
      ) : (
        <Row>
          {cart.map((product) => (
            <Col key={product._id} sm={12} className="mb-4">
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <h5>{product.name}</h5>
                  <p>${product.price}</p>
                </div>
                <Button variant="danger" onClick={() => removeFromCart(product._id)}>
                  Eliminar
                </Button>
              </div>
            </Col>
          ))}
        </Row>
      )}
    </Container>
  );
};

export default CartPage;
