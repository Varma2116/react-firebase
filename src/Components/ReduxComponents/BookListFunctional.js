import React,{useEffect} from 'react'
import { useSelector,useDispatch } from 'react-redux';
import { addBook } from '../Redux/Actions/BookAction';
import { incrementCount } from '../Redux/Actions/CountAction';
const BookListFunctional=()=>{
    const books  = useSelector(state => state.books);
    const count = useSelector(state=> state.count);
    console.log("hwllp",books,count);
    const dispatch = useDispatch();
    useEffect(() => {
       dispatch(addBook("jyothi"));
       dispatch(addBook("yggffg"));
    }, []) 
    return (
        <div>
            <button onClick={()=>dispatch(incrementCount(2))}>Increment</button>
        </div>
    )
}
export default BookListFunctional;




