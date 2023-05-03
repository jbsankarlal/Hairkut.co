const Saloon = require("../models/saloonModel");
const Slot = require("../models/slotModel");
 const createSaloon = async(req,res,next)=>{
    const newSaloon=  new Saloon(req.body)
    
    try {
       const savedSaloon = await  newSaloon.save() 
       res.status(200).json(savedSaloon)

    } catch (err) {
        next(err);
    }
}


const updateSaloon = async(req,res,next)=>{
  try {
       const updatedSaloon = await  Saloon.findByIdAndUpdate(req.params.id, { $set: req.body},{new:true}) 
       res.status(200).json(updatedSaloon)

    } catch (err) {
        res.status(500).json(err)
         next(err);
    }  
}

const deleteSaloon = async(req,res,next)=>{
     try {
       await  Saloon.findByIdAndDelete(req.params.id) 
       res.status(200).json("Saloon has been deleted")

    } catch (err) {
        res.status(500).json(err)
         next(err);
    }
}

const getSaloon = async(req,res,next)=>{
     try {
        console.log("happyget");
       const saloon = await  Saloon.findOne({_id:req.params.id}) 
       res.status(200).json(saloon)

    } catch (err) {
        res.status(500).json(err)
         next(err);
    }
}

const getSaloonCity = async(req,res,next)=>{
     try {
        console.log("helooyyyy");
       const saloon = await  Saloon.find({city:req.params.id}) 
       res.status(200).json(saloon)

    } catch (err) {
        res.status(500).json(err)
         next(err);
    }
}

const getAllSaloon = async(req,res,next)=>{
    try {
        console.log("helooyy22");
       const saloon = await  Saloon.find() 
       res.status(200).json(saloon)

    } catch (err) {
        res.status(500).json(err)
         next(err);
    }
}

const countByService = async(req,res,next)=>{
    const services = req.query.services.split(',')
    try {
        const list = await Promise.all(services.map(service=>{
            return Saloon.countDocuments({type:service})
        }))
       const saloon = await  Saloon.find() 
       res.status(200).json(list)

    } catch (err) {
        res.status(500).json(err)
         next(err);
    }
}

const countByCity = async(req,res,next)=>{
   
    const cities = req.query.cities.split(',')
    try {
        const list = await Promise.all(cities.map(city=>{
            return Saloon.countDocuments({city:city})
        }))
       const saloon = await  Saloon.find() 
       res.status(200).json(list)

    } catch (err) {
        res.status(500).json(err)
         //next(err);
    }
}

const getSlots = async (req,res,next)=>{
    try {
        console.log("slots are getting ok");
        const saloon = await Saloon.findById(req.params.id)
        const list = await Promise.all(
            saloon.slot.map(slo=>{
            return Slot.findById(slo)
        }))
        res.status(200).json(list)
    } catch (err) {
        next(err)
    }
}


module.exports= { createSaloon, updateSaloon, deleteSaloon, getSaloon,getSaloonCity, getAllSaloon, countByService, countByCity, getSlots };

