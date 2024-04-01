const express=require('express')
const router=express.Router()
const Slot=require('../models/slot')

router.post('/', async(req,res)=>{
    let newslot=new Slot(req.body);
    let response=await newslot.save();
    console.log(response);
    res.json(response);
})

module.exports=router