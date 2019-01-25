const counterReducers = (times = 0, action) => {
    switch (actionType){
        case INCREMENT:
            return ++times;
        case DECREMENT:
            return --times;
        default:
            return times;
    }
}
export default counterReducers;