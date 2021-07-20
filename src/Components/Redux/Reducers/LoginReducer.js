const LoginReducer = (state=null,action)=>{
    switch(action.type){
        case 'SET_USER_DATA':
            return action.payload
        break;
    }
    return state;
}

export default LoginReducer;