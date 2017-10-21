/**
 * Created by thomashourlier on 2/26/17.
 */

import { combineReducers } from "redux";

import { JEDI_RECEIVED, JEDI_CREATION_RECEIVED } from "./action";

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

const reducer = combineReducers({ map, all });

export default reducer;

// Selectors
export const allJedi = state => state.all.map(id => state.map[id]);
