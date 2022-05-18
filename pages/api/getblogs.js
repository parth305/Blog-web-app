const Blog=require("../../Model/BlogModel")
let mongoose=require("mongoose")
let url='mongodb://localhost/bhyu';
mongoose.connect(url).then(() => {
    console.log("app started");
}).catch(err => console.log(err.message))
export default async function handler(req, res) {
    let page=req.query.page || 1;
    // console.log("last",page);
    let LIMIT=9;
    let total=await Blog.countDocuments();
    let startIndex=(Number(page)-1)*LIMIT;
    let data=await Blog.find().sort({_id:-1}).limit(LIMIT).skip(startIndex);
    // let data=await Blog.find();
    res.json({data,total})
}
