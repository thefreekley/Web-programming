import filtersReducer from "./filters";
import printersReducer from "./printers";
import cartReducer from "./cart";
import categoryReducer from "./category";
import {combineReducers} from "redux";


const rootReducer = combineReducers({
    filters:filtersReducer,
    printers:printersReducer,
    cart:cartReducer,
    category:categoryReducer,
});


export default rootReducer;