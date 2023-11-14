const mongoose = require("mongoose")
mongoose.connect("mongodb://localhost:27017/amandb")
.then(()=>{
    console.log("mongo connected");
})
.catch(()=>{
    console.log("failded to conne")
})

const LogInSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})


const collection = new mongoose.model("collection1" , LogInSchema)

module.exports = collection; 