/**
 * Created by thomashourlier on 2/26/17.
 */

import axios from "axios";

export const JEDI_REQUESTED = "JEDI_REQUESTED";
export const JEDI_RECEIVED = "JEDI_RECEIVED";
export const JEDI_RECEIVED_ERROR = "JEDI_RECEIVED_ERROR";

export const JEDI_CREATION_REQUESTED = "JEDI_CREATION_REQUESTED";
export const JEDI_CREATION_RECEIVED = "JEDI_CREATION_RECEIVED";

export const jediReceived = jediList => ({ type: JEDI_RECEIVED, payload: jediList });
export const jediReceivedError = error => ({ type: JEDI_RECEIVED_ERROR, error });

export const jediCreated = jedi => ({ type: JEDI_CREATION_RECEIVED, payload: jedi });

const BASE_API_URL = process.env.BASE_API_URL || "";

export const createJedi = jedi => dispatch => {
  dispatch({ type: JEDI_CREATION_REQUESTED });
  return axios.post(`${BASE_API_URL}/jedi`, jedi).then(res => dispatch(jediCreated(res.data)));
};

export const fetchJedi = () => dispatch => {
  dispatch({ type: JEDI_REQUESTED });
  return axios.get(`${BASE_API_URL}/jedi`).then(
    res => {
      dispatch(jediReceived(res.data));
    },
    error => {
      dispatch(jediReceivedError(error));
    }
  );
};
