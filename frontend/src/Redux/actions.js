import axios from "axios";
import {
  GET_DATA_LOADING,
  GET_DATA_SUCCESS,
  GET_DATA_ERROR,
  PRODUCT_SEARCH,
  PRODUCT_FILTER
} from "./actionTypes.js";



export const getDataAPI = () => (dispatch) => {
    dispatch({ type: GET_DATA_LOADING });
    axios
      .get("https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/catalogue.json")
      .then((r) => {
        // console.log("res",r);
         dispatch({ type: GET_DATA_SUCCESS, payload: r.data });
      })
      .catch(() => {
        dispatch({ type: GET_DATA_ERROR });
      });
  };

  export const product_search = (payload) => ({ type: PRODUCT_SEARCH, payload });

  export const product_filter = (payload) => ({ type: PRODUCT_FILTER, payload });