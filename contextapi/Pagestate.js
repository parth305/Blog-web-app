import { useState } from "react"
import Pagecontext from "./pagecontext"


let Pagestate=(props)=>{
    let [page,setpage]=useState(1);
    return (
        <Pagecontext.Provider value={{page,setpage}}>
            {props.children}
        </Pagecontext.Provider>
    )
}

export default Pagestate