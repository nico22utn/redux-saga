import { INCREMENT, DECREMENT } from "../actions/ActionTypes";

const counterReducers = (times = 0, action) => {
    switch (action.type){
        case INCREMENT:
            return ++times;
        case DECREMENT:
            return --times;
        default:
            return times;
    }
}
export default counterReducers;