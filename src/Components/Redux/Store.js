import logger from 'redux-logger';
import { createStore,applyMiddleware} from "redux";
import reducers from "./Reducers";

const middleware = applyMiddleware(logger)    
const store = createStore(reducers,middleware);

export default store;


