  
import { combineReducers } from "redux";
import menuReducer from "./menu/reducers";


const reducers = combineReducers({
    menuReducer
});

export type RootState = ReturnType<typeof reducers>

export default reducers;
