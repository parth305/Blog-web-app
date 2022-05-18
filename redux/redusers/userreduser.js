let reduser=(state={user:{}},action)=>{
    switch (action.type) {
        case "USERDATA":
            console.log("here",action.payload);
            return {...state,user:action.payload}
    
        default:
            return state
    }
}

export default reduser