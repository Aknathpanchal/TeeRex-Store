import { GET_DATA_ERROR, GET_DATA_LOADING, GET_DATA_SUCCESS } from "./actionTypes.js";


const initalState = {
  getData: {
    loading: false,
    error: false,
  },
  data: [],
 
};
export const dataReducer = (state = initalState, { type, payload }) => {
  switch (type) {
    case GET_DATA_LOADING: {
      return {
        ...state,
        getData: {
          ...state.getData,
          loading: true,
          error: false,
        },
      };
    }
    case GET_DATA_SUCCESS: {
      return {
        ...state,
        getData: {
          ...state.getData,
          loading: false,
          error: false,
        },
        data: payload,
      };
    }
    case GET_DATA_ERROR: {
      return {
        ...state,
        getData: {
          ...state.getData,
          loading: false,
          error: true,
        },
      };
    }
    
    default: {
      return state;
    }
  }
};
