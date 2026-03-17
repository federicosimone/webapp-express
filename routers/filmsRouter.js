const express = require('express');
const router = express.Router();

const filmsController = require('../controllers/filmsControllers')



//Crud

//cRud
router.get('/', filmsController.index)
//crUd

//cruD

module.exports = router;