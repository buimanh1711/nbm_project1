import { createStore, combineReducers } from 'redux';
import productReducer from './product_reducer';

import loginReducer from './login_reducer';

const reducer = combineReducers({
    product: productReducer,
    login: loginReducer
});

export default createStore(reducer);