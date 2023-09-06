import { BOOK } from "./constants";

export const getBook = (data) => ({
  type: BOOK.BOOK_GET_LIST,
  data,
});


export const getBookSuccess = (data) => ({
  type: BOOK.BOOK_GET_LIST_SUCCESS,
  data,
});

export const createBook = (data) => ({
  type: BOOK.BOOK_CREATE,
  data,
})



export const deleteBook = (id) => ({
  type: BOOK.DELETE_BOOK,
  id,
})

export const updateBook = (id, data) => ({
  type: BOOK.EDIT_BOOK,
  id,
  data
})