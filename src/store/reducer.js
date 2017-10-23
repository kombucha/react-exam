/**
 * Created by thomashourlier on 2/26/17.
 */

import { combineReducers } from "redux";

import {
  JEDI_REQUESTED,
  JEDI_RECEIVED,
  JEDI_RECEIVED_ERROR,
  JEDI_CREATION_RECEIVED,
} from "./action";

const map = (state = {}, action) => {
  switch (action.type) {
    case JEDI_RECEIVED:
      return action.payload.reduce((map, jedi) => ({ ...map, [jedi.id]: jedi }), {});
    case JEDI_CREATION_RECEIVED:
      return { ...state, [action.payload.id]: action.payload };
    default:
      return state;
  }
};

const all = (state = [], action) => {
  switch (action.type) {
    case JEDI_RECEIVED:
      return action.payload.map(jedi => jedi.id);
    case JEDI_CREATION_RECEIVED:
      return state.includes(action.payload.id) ? state : [...state, action.payload.id];
    default:
      return state;
  }
};

const loading = (state = false, action) => {
  switch (action.type) {
    case JEDI_REQUESTED:
      return true;
    case JEDI_RECEIVED_ERROR:
    case JEDI_RECEIVED:
      return false;
    default:
      return state;
  }
};

const error = (state = null, action) => {
  switch (action.type) {
    case JEDI_RECEIVED_ERROR:
      return action.error.message;
    default:
      return state;
  }
};

const reducer = combineReducers({ map, all, loading, error });

export default reducer;

// Jedi listing selectors
export const allJedi = state => state.all.map(id => state.map[id]);
export const isLoading = state => state.loading;
export const getError = state => state.error;
