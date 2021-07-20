import  {combineReducers}from 'redux';
import BookReducer from './BookReducer';
import CountReducer from './CountReducer';
import LoginReducer from './LoginReducer';
const reducers = combineReducers({
    books : BookReducer,
    count : CountReducer,
    userData : LoginReducer 
})
export default reducers;