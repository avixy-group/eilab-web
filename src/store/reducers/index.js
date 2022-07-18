import { combineReducers } from "redux";
import shellReducer from "./shellReducer";

export default combineReducers({
    shell: shellReducer
});
