const Blog=require("../../Model/BlogModel")
let mongoose=require("mongoose")
let url='mongodb://localhost/bhyu';
mongoose.connect(url).then(() => {
    console.log("app started");
}).catch(err => console.log(err.message))
export default async function handler(req, res) {

    let data=await Blog.find();
    res.json(data)
}
