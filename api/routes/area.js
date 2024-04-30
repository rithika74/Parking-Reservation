const express=require('express')
const router=express.Router();
const Parking=require('../models/parking')

router.get('/:id',async(req,res)=>{
    let id=req.params.id;
    let response=await Parking.findById(id);
    console.log(response);
    res.json(response)
})

module.exports=router

