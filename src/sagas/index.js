import { all, call} from 'redux-saga/effects';

function* mySaga() {
    console.log('saga worked');
}

export default function* rootSaga() {
    try {
        yield all([
            call(mySaga), // Убедитесь, что mySaga правильно экспортируется
            // здесь можно добавить другие саги
        ]);
    } catch (error) {
        console.error('Error in rootSaga:', error);
    }
}