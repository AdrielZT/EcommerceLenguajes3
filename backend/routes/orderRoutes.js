const express = require('express');
const router = express.Router();
const Order = require('../models/orderModel');
const { protect } = require('../middleware/authMiddleware'); // Middleware de autenticación

// Crear un nuevo pedido
router.post('/', protect, async (req, res) => {
  const { orderItems, shippingAddress, paymentMethod, itemsPrice, taxPrice, shippingPrice, totalPrice } = req.body;

  if (orderItems && orderItems.length === 0) {
    res.status(400).json({ message: 'No hay artículos en el pedido' });
    return;
  } else {
    const order = new Order({
      user: req.user._id,
      orderItems,
      shippingAddress,
      paymentMethod,
      itemsPrice,
      taxPrice,
      shippingPrice,
      totalPrice
    });

    const createdOrder = await order.save();
    res.status(201).json(createdOrder);
  }
});

module.exports = router;
