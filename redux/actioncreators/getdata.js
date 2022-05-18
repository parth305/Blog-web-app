import * as api from "../../APIaxios/index"

export let getblogs=(page)=>async(dispatch)=>{
        try {
            // console.log("hey");
            console.log("page",page);
            let {data}=await api.getdata(page);
            console.log(data);
            dispatch({type:"GETBLOGS",payload:data})
        } catch (error) {
         console.log(error);   
        }
}


export let getblog=(id)=>async (dispatch)=>{
    try {
        let {data}=await api.getblog(id);
        dispatch({type:"GETBLOG",payload:data})
    } catch (error) {
        console.log(error);
    }
}