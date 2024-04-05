const express=require('express')
const router=express.Router();
const Parking=require('../models/parking')

router.get('/',async(req,res)=>{
    let response=await Parking.find();
    console.log(response);
    res.json(response)
})

module.exports=router

