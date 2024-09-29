const express = require('express');
const { getCart, addToCart, removeFromCart } = require('../controllers/cartController');
const auth = require('../middleware/auth');
const router = express.Router();

// @route   GET api/cart
// @desc    Get user cart
// @access  Private
router.get('/', auth, getCart);

// @route   POST api/cart
// @desc    Add product to cart
// @access  Private
router.post('/', auth, addToCart);

// @route   DELETE api/cart
// @desc    Remove product from cart
// @access  Private
router.delete('/', auth, removeFromCart);

module.exports = router;
