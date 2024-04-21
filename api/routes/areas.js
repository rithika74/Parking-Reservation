const express=require('express')
const router=express.Router();
const Parking=require('../models/parking')

router.get('/',async(req,res)=>{
    let response=await Parking.find().populate('userId');
    console.log(response);
    res.json(response)
})

module.exports=router

