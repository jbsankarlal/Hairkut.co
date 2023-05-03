const express = require('express');
const { verifyAdmin } = require('../utils/verifyToken');
const {createSlot, updateSlot, deleteSlot, getSlot, getAllSlot} = require('../controllers/slotControllers')

const router = express.Router();

//create
router.post('/:saloonId', verifyAdmin , createSlot);

//update
router.put('/:id', verifyAdmin , updateSlot);

//delete

router.delete('/:id/:saloonId', verifyAdmin , deleteSlot);
   
//get

router.get('/:id', getSlot);

//get all slots

router.get('/', getAllSlot);

module.exports = router;