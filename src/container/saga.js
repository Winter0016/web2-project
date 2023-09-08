import { all } from 'redux-saga/effects';

import Patron from './Patron/saga';

export default function* AppSaga() {
  yield all([
    Patron()
  ]);
}
