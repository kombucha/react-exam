/**
 * Created by thomashourlier on 2/26/17.
 */

import axios from "axios";

export const JEDI_REQUESTED = "JEDI_REQUESTED";
export const JEDI_RECEIVED = "JEDI_RECEIVED";

export const JEDI_CREATION_REQUESTED = "JEDI_CREATION_REQUESTED";
export const JEDI_CREATION_RECEIVED = "JEDI_CREATION_RECEIVED";

export const jediReceived = jedi => ({ type: JEDI_RECEIVED, payload: jedi });

export const createJedi = jedi => dispatch => {
  dispatch({ type: JEDI_CREATION_REQUESTED });
  return axios.post("http://localhost:3001/jedi", jedi).then(res => {
    const newJedi = res.data;

    dispatch({
      type: JEDI_CREATION_RECEIVED,
      payload: newJedi,
    });

    return newJedi;
  });
};

export const fetchJedi = () => dispatch => {
  dispatch({ type: JEDI_REQUESTED });
  axios.get("http://localhost:3001/jedi").then(res => dispatch(jediReceived(res.data)));
};
