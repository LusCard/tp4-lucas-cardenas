const express = require('express');
const { GET, POST, PUT, DELETE } = require('../controllers/indexControllers');
const router = express.Router()
//RUTA GET CON SU FUNCION LLAMADA DE OTRO MODULO
router.get('/',GET)
 //RUTA POST CON SU FUNCION LLAMADA DE OTRO MODULO 
router.post('/',POST)
//RUTA PUT CON SU FUNCION LLAMADA DE OTRO MODULO
router.put('/',PUT) 
//RUTA DELETE CON SU FUNCION LLAMADA DE OTRO MODULO
router.delete('/',DELETE)

module.exports = router