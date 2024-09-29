const express = require('express');
const { getProducts, getProductById, addProduct } = require('../controllers/productController');
const router = express.Router();

// @route   GET api/products
// @desc    Get all products
// @access  Public
router.get('/', getProducts);

// @route   GET api/products/:id
// @desc    Get product by ID
// @access  Public
router.get('/:id', getProductById);

// @route   POST api/products
// @desc    Add new product
// @access  Private (admin)
router.post('/', addProduct);

module.exports = router;
