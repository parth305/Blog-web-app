let reduser=(state={Blogs:[],Blog:null},action)=>{
    switch (action.type) {
        case 'GETBLOGS':
            return {...state,Blogs:action.payload}

        case 'GETBLOG':
            return {...state,Blog:action.payload}
        default:
            return state
    }
}

export default reduser