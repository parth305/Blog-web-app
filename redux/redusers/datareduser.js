let reduser=(state={Blogs:[],Blog:null,total:null},action)=>{
    switch (action.type) {
        case 'GETBLOGS':
            state.Blogs=state.Blogs.concat(action.payload.data)

            return {...state,total:action.payload.total}
            // return {...state,Blogs:action.payload.data,total:action.payload.total}

        case 'GETBLOG':
            return {...state,Blog:action.payload}
        default:
            return state
    }
}

export default reduser