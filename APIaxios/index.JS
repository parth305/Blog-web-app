import axios from "axios";


// export let getdata=()=> axios.get("http://localhost:80/api/Blogs");
export let getdata=(page)=> axios.get(`http://localhost:3000/api/getblogs?page=${page}`);

export let getblog=(id)=>axios.get(`http://localhost:3000/api/getblog?id=${id}`)

export let setuser=(data)=>axios.post("http://localhost:3000/api/postcontect",data)