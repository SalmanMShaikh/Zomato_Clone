import { combineReducers } from "redux";

const reducer = (
  state = {
    delivery: true,
    diningOut: false,
    nightLife: false,
    statisticsPage: false,
    chartsData: {},
    maleEmployeesSalary: [],
    femaleEmployeesSalary: [],
    searchInput: "",
    currentObject: {},
  },
  action
) => {
  switch (action.type) {
    case "setDelivery":
      return {
        ...state,
        delivery: true,
        diningOut: false,
        nightLife: false,
        statisticsPage: false,
      };

    case "setDiningOut":
      return {
        ...state,
        delivery: false,
        diningOut: true,
        nightLife: false,
        statisticsPage: false,
      };

    case "setNightLife":
      return {
        ...state,
        delivery: false,
        diningOut: false,
        nightLife: true,
        statisticsPage: false,
      };

    case "saveChartsData":
      return {
        ...state,
        chartsData: action.data,
      };

    case "maleEmployeesSalary":
      return {
        ...state,
        maleEmployeesSalary: action.data,
      };

    case "femaleEmployeesSalary":
      return {
        ...state,
        femaleEmployeesSalary: action.data,
      };

    case "saveSearchInput":
      return {
        ...state,
        searchInput: action.data,
      };
    case "setStatisticsPage":
      return {
        ...state,
        statisticsPage: true,
        delivery: false,
        diningOut: false,
        nightLife: false,
      };

    case "saveCurrentObject":
        return{
          ...state,
          currenObject: action.data,
        }

    default:
      return state;
  }
};

let finalReducer = combineReducers({
  reducer: reducer,
});

export default finalReducer;
