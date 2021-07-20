const BookReducer = (state = [], action) => {
    switch (action.type) {
      case "ADD_BOOK":
        let books = [...state];
        books.push(action.payload);
        return books;
        break;
      case "DELETE_BOOK":
        let book = [...state];
        for(let i=0;i<book.length;i++){
          if(i === action.payload){
            book.splice(i,1);
          }
        } 
        return book;
        break;
    }
    return state;
  };
  export default BookReducer;