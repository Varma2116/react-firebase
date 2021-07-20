export const incrementCount=(payload)=>{
    return{
        type:"INCREMENT",
        payload : payload
    }
}
export const decrementCount=(payload)=>{
    return{
        type:"DECREMENT",
        payload : payload
    }
}