const express = require('express');
const {
  addToCart,
  updateCartItem,
  deleteCartItem
} = require('../controllers/cartController');
const { protect } = require('../middleware/authMiddleware'); // changed here

const router = express.Router();

router.post('/', protect, addToCart);
router.put('/:id', protect, updateCartItem);
router.delete('/:id', protect, deleteCartItem);

module.exports = router;
