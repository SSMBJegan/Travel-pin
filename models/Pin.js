const mongoose = require('mongoose')

const PinSchema = new mongoose.Schema({
    username:{
        type: 'string',
        required: true,
    },
    title:{
        type: 'string',
        required: true,
        min:3,
    },
    username:{
        type: 'string',
        required: true,
        min:3,
    },
    rating:{
        type:Number,
        required: true,
        min:0,
        max:5,
    },
    lat:{
        type:Number,
        required: true,
    },
    long:{
        type:Number,
        required: true,
    },

},
{timestamps: true})

module.exports = mongoose.model("Pin",PinSchema);