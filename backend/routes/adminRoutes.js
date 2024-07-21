const express = require('express');
const Product = require('../models/productModel');
const User = require('../models/userModel');
const router = express.Router();

const isAdmin = async (req, res, next) => {
    const user = await User.findById(req.userId);
    if (user && user.isAdmin) {
        next();
    } else {
        res.status(403).json({ message: 'Acceso denegado' });
    }
};

router.post('/products', isAdmin, async (req, res) => {
    const product = new Product(req.body);
    try {
        const savedProduct = await product.save();
        res.status(201).json(savedProduct);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

router.put('/products/:id', isAdmin, async (req, res) => {
    try {
        const updatedProduct = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(updatedProduct);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

router.delete('/products/:id', isAdmin, async (req, res) => {
    try {
        await Product.findByIdAndDelete(req.params.id);
        res.json({ message: 'Producto eliminado' });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

module.exports = router;
