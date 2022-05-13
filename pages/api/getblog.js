// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const Blog=require("../../Model/BlogModel")
let mongoose=require("mongoose")
let url='mongodb://localhost/bhyu';
mongoose.connect(url).then(() => {
    console.log("app started");
}).catch(err => console.log(err.message))
export default async function handler(req, res) {
    let {id}=req.query
    let data={}
    try{
         data=await Blog.findById(id);
    }
    catch(error){
        return res.status(404).json({error:"no blog found"})
    }
    
    res.json(data)
}
