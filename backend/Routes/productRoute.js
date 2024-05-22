  const express = require('express');
  const { addProduct,gettingProduct } = require('../controller/product');
  const router = express.Router();

  router.post('/', addProduct);
  router.get('/',gettingProduct);

  module.exports = router;
