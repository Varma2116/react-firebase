const CountReducer = (state=0,action)=>{
    switch(action.type){
        case "INCREMENT" :
            return state + action.payload
            break;
        case "DECREMENT" :
            return state - action.payload
            break;
    }
    return state;
}
export default CountReducer;