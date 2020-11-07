const connection = require('../database/connection');
const express = require('express');
const router = express.Router();
const QueryController = require('../controllers/QueryController');

//Rotas de consultas
router.get('/clientes', QueryController.listaClientes);
router.get('/pagar', QueryController.listaContasPagar);
router.get('/receber', QueryController.listaContasReceber);

module.exports = router;