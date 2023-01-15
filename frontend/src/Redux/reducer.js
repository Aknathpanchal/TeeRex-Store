// import { searchData } from "./actions.js";
import { GET_DATA_ERROR, GET_DATA_LOADING, GET_DATA_SUCCESS,PRODUCT_SEARCH , PRODUCT_FILTER} from "./actionTypes.js";
// import { store } from "./store.js";


const initalState = {
  getData: {
    loading: false,
    error: false,
  },
  data: [],
  filterData:[]

 
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

    case PRODUCT_SEARCH:
      return {
        ...state,
        filterData: [...searchData(state.data, payload)],
      };
      case PRODUCT_FILTER:
        return {
          ...state,
          filterData: [...filterHandler(state.data, payload)],
        };
    default: {
      return state;
    }
  }
};


const filterHandler = (data, selectedValues) => {
  let result = data.filter((e) => {

    if (selectedValues.includes(e.color)||selectedValues.includes(e.gender)||selectedValues.includes(e.type)) {
      if ((selectedValues.includes(e.type)&&selectedValues.includes(e.gender))||(selectedValues.includes(e.color)&&selectedValues.includes(e.type))||(selectedValues.includes(e.color)&&selectedValues.includes(e.gender)) ) {
        if (selectedValues.includes(e.color)&&selectedValues.includes(e.gender)&&selectedValues.includes(e.type)) {
          return e;
        }else{
          return e;
        }
      }else{
        return e;
      }
    } 
    if (selectedValues.includes("250")) {
      return e.price <= 250;
    }  if (selectedValues.includes("251")) {
      return e.price >= 251 && e.price <= 450;
    }  if (selectedValues.includes("450")) {
      return e.price >= 450;
    }
  });
  console.log("filtered data" , result)
  return result;
};

 const searchData = (data, inputValues) => {
  console.log("filtered data" , data,inputValues[0])
  let value=inputValues.toLowerCase();
  let search_result = data.filter((e) => {
    let nam=e.name.toLowerCase()
    let col=e.color.toLowerCase()
    let typ=e.type.toLowerCase()
    if (nam==value||col == value || typ == value) {
      return e;
    }
  });
  console.log("searced data", search_result);
  return search_result.length ? search_result : data;
};