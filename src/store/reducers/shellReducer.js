import { SHELL_LOG, SHELL_LOG_CLEAR } from "../types";

const initialState = {
    body: "",
};

export default function shellReducer(state = initialState, action) {
    switch (action.type) {
        case SHELL_LOG:
            let date = new Date();
            date = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
            return {
                ...state,
                body: state.body + action.payload + "<br/>",
            };
        case SHELL_LOG_CLEAR:
            return {
                ...state,
                body: "",
            };
        default:
            return state;
    }
}
