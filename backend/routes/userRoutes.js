const express = require('express');
const { createUser, updateUser, deleteUser, getUser, getAllUser, updateUserStatus } = require('../controllers/userControllers');
const { verifyToken, verifyUser, verifyAdmin } = require('../utils/verifyToken');
const User = require("../models/userModel")


const router = express.Router();


router.get('/checkauthentication', verifyToken, (req,res,next)=>{
    res.send("hello user, you are authenticated")
})

router.get('/checkuser/:id', verifyUser, (req,res,next)=>{
    res.send("hello user, you are logged in & can delete your account")
})

router.get('/checkadmin/:id', verifyAdmin, (req,res,next)=>{
    res.send("hello Admin, you are logged in & can delete all account")
})

//create
router.post('/',createUser);

//update
router.put('/:id' ,updateUser);
router.put('/status/:id' ,updateUserStatus);

//delete
router.delete('/:id', verifyUser, deleteUser);
   
//get
router.get('/:id', verifyUser,  getUser);

//get all
router.get('/' , getAllUser);

module.exports = router;