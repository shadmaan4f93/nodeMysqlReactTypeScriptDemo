import { all } from 'redux-saga/effects';
import menuSagas from './menu/saga';


export default function* rootSaga() {
  yield all([menuSagas()]);
}
