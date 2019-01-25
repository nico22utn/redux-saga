import { connect } from 'react-redux';
import CounterComponent from '../../components/CounterComponent';
import { decreaseAction, increaseAction } from '../actions/Index';

const mapStateToProps = (state) => {
    return {
        times: state.counterReducers ? state.counterReducers : 0;
    };
}
const mapDispathToProps = (dispatch) => {
    return {
        onDecrement: (step) => {
            dispatch(decreaseAction(step));
        },
        onIncrement: (step) => {
            dispatch(increaseAction(step))
        }
    };
}
const CounterContainer = connect(mapStateToProps,mapDispathToProps)(CounterComponent); 
export default CounterContainer;