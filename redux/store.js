import { createStore ,compose,applyMiddleware} from "redux";
import thunk from "redux-thunk";
import reduser from "./redusers/index"
let store=createStore(reduser,compose(applyMiddleware(thunk)));
export default store

