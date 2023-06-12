const express = require('express');
const { GET, POST, PUT, DELETE } = require('../controllers/indexControllers');
const router = express.Router()

router.get('/',GET)
  
router.post('/',POST)
  
router.put('/',PUT) 
  
router.delete('/',DELETE)

module.exports = router