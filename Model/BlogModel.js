import mongoose from 'mongoose'

let BlogSchema=new mongoose.Schema({
    title:String,
    content:String,
    author:String,
    metadata:String
})


module.exports=mongoose.models.Blog || mongoose.model("Blog",BlogSchema);