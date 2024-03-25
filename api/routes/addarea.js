const express=require('express')
const router=express.Router()
const Parking=require('../models/parking')

router.post('/', async(req,res)=>{
    let newparking=new Parking(req.body);
    let response=await newparking.save();
    console.log(response);
    res.json(response);
})

module.exports=router