let User=require("../../Model/User");
let mongoose=require("mongoose")

let url='mongodb://localhost/bhyu';
mongoose.connect(url).then(() => {
    console.log("app started");
}).catch(err => console.log(err.message))

export default async function handler(req, res) {
    // console.log(req.body);
    if (req.method==="POST"){
        
        let data=await User.create(req.body)
        // console.log(data);
        res.status(200).json(data)
    }
    else{
        res.status(200).json({data:"this is get req"})
        
    }
  }
  