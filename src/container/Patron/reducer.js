import { PATRON } from "./constants";

const initialState = {
  patrons: [],
  pages: {
    current: 1,
    prev: 0,
    hasPrev: false,
    next: 0,
    hasNext: false,
    total: 1,
  },
};

export default function app(state = initialState, action) {
  switch (action.type) {
    case PATRON.PATRON_GET_LIST_SUCCESS:
      return {
        ...state,
        patrons: action.data.data,
        pages: action?.data?.pages
      };
    case PATRON.CHANGE_PAGE: {
      console.log(action)
      return {
        ...state,
        pages: {
          ...state?.pages,
          current: action?.page,
        }
      }
    }
    default:
      return state;
  }
}
