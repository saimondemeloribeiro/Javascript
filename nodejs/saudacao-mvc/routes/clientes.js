const express = require('express');
const router = express.Router();
const clientesController = require('../controllers/clientesController');

// Rota para listar clientes
router.get('/', clientesController.produtos);

module.exports = router;