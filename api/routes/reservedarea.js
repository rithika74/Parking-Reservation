const express=require('express')
const router=express.Router()
const Slot=require('../models/slot')
const Parking=require('../models/parking')

router.get('/:id', async(req,res)=>{
    let id=req.params.id;
    console.log(id);
    // let newslot=new Slot(req.body);
    let response=await Parking.findById(id);
    console.log(response);
    res.json(response);
})

module.exports=router
