import { all } from 'redux-saga/effects';

import Book from './Patron/saga';

export default function* AppSaga() {
  yield all([
    Book()
  ]);
}
