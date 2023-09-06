// import { getExampleApi } from "@/api/example";
import { takeLatest, put, call } from "redux-saga/effects";
import { PATRON } from "./constants";
import { getPatron, getPatronSuccess } from "./actions";
import { createPatronApi, getListPatronApi } from "../../api/Patrons";

function* handlerGetListPatrons({ data }) {
  try {
    const res = yield call(getListPatronApi, data);
    yield put(getPatronSuccess(res));
  } catch (err) {
    console.log("err handlerGetListPatrons", err);
  }
}

function* handlerCreatePatron({ data }) {
  try {
    yield call(createPatronApi, data);
    const res2 = yield call(getListPatronApi);
    console.log('res2res2', res2)
    yield put(getPatronSuccess(res2));
  } catch (err) {
    console.log("err handlerCreatePatron", err);
  }
}

function* root() {
  yield takeLatest(PATRON.PATRON_GET_LIST, handlerGetListPatrons);
  yield takeLatest(PATRON.PATRON_CREATE, handlerCreatePatron);
}

export default root;
