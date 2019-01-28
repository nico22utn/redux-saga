import { delay } from 'redux-saga';
import { all } from 'redux-saga/effects';
import { watchIncrement, watchDecrement } from './CounterSagas';

export default function* rootSaga(){
    yield all([
        watchIncrement(), watchDecrement()
    ])
}