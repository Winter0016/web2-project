import { PATRON } from "./constants";

export const getPatron = (data) => ({
  type: PATRON.PATRON_GET_LIST,
  data,
});


export const getPatronSuccess = (data) => ({
  type: PATRON.PATRON_GET_LIST_SUCCESS,
  data,
});

export const createPatron = (data) => ({
  type: PATRON.PATRON_CREATE,
  data,
})



