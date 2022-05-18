import * as api from "../../APIaxios/index"

 export let setuser=(userdata)=>async (disptch)=>{

    try {
        let {data}=await api.setuser(userdata);
        disptch({type:"USERDATA",payload:data})
    } catch (error) {
        console.log(error);
    }
}