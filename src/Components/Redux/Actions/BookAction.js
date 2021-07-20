export const addBook =(payload)=>{
    return({
        type : "ADD_BOOK",
        payload : payload
    })
}
export const deleteBook = (payload)=>{
    return{
        type : "DELETE_BOOK",
        payload : payload
    }
}