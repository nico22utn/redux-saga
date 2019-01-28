import { INCREMENT, DECREMENT } from '../actions/ActionTypes';
import { delay } from 'redux-saga';
import { put, takeEvery } from 'redux-saga/effects';

function* increment(){
    alert("Incrementa");
}
function* decrement(){
    alert("Decrementa");
}
export function* watchIncrement(){
    yield takeEvery(INCREMENT, increment);
}
export function* watchDecrement(){
    yield takeEvery(DECREMENT,decrement)
}
 