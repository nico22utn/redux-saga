import { INCREMENT } from "./ActionTypes";

export const increaseAction = (step) => {
    return {
        type: INCREMENT,
        step: step
    };
}
export const decreaseAction = (dispatch) => {
    return {

    };
}