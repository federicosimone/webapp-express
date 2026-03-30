const express = require('express');
const router = express.Router();

const filmsController = require('../controllers/filmsControllers')



//Crud

//router.post('/', postcontroller.store)
router.post("/:id/reviews", filmsController.storeReview);

//cRud
router.get('/', filmsController.index)

router.get('/:id', filmsController.show)
//crUd
///router.put('/:id', filmsController.update)

//router.patch('/:id', filmsController.modify)

//cruD

//router.delete('/:id', filmsController.destroy)

module.exports = router;