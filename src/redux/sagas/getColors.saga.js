import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* getColors() {
    console.log('In getSwatches');
    try {
        const response = yield axios({
            method: 'GET',
            url: '/api/colors'
        })
        yield put({
            type: 'SET_COLORS',
            payload: response.data
        });
    } catch(err) {
        console.log('Error fetching colors', err);
    }
}
function* getColorsSaga() {
    yield takeLatest('GET_COLORS', getColors);
}

export default getColorsSaga;