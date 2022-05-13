import axios from "axios";


// export let getdata=()=> axios.get("http://localhost:80/api/Blogs");
export let getdata=()=> axios.get("http://localhost:3000/api/getblogs");

export let getblog=(id)=>axios.get(`http://localhost:3000/api/getblog?id=${id}`)