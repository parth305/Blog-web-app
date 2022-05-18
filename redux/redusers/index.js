import { combineReducers } from "redux";
import reduser from "./datareduser";
import userreduser from "./userreduser"
export default  combineReducers({
    Blog:reduser,
    user:userreduser
});