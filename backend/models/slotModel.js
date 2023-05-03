const mongoose = require('mongoose')

const slotSchema = mongoose.Schema({
    startTime: {type: Date,required: true},
    endTime: {type: Date,required: true },
    isAvailable: { type: Boolean, default: true },
    service: { type: String, required: true},
    slotNumber:[{number:String, unavailableDates:[{type:Date}]}],}, 
    {
        timestamps:true
    }
    
    
    
)

const Slot = mongoose.model("Slot", slotSchema)

module.exports = Slot;

// customerName: {type: String,default: null},
// customerPhoneNumber: {type: String,default: null},