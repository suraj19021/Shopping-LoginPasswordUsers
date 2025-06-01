const express = require('express');
const { body } = require('express-validator');
const {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct
} = require('../controllers/productController');

const { protect, adminOnly } = require('../middleware/authMiddleware');

const router = express.Router();

const productValidationRules = [
  body('name').notEmpty().withMessage('Name is required'),
  body('description').notEmpty().withMessage('Description is required'),
  body('price').isFloat({ gt: 0 }).withMessage('Price must be a number greater than 0'),
  body('stock').isInt({ min: 0 }).withMessage('Stock must be an integer 0 or more')
];

router.get('/', getAllProducts);
router.get('/:id', getProductById);

// Protected routes — only logged-in admins can create/update/delete products
router.post('/', protect, adminOnly, productValidationRules, createProduct);
router.put('/:id', protect, adminOnly, productValidationRules, updateProduct);
router.delete('/:id', protect, adminOnly, deleteProduct);

module.exports = router;
