const mongoose = require("mongoose")

const post=mongoose.model({
    tittle:{
        type:String,
        required:true,
    }
})