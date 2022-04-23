export const setDelivery = () => {
  return {
    type: "setDelivery",
  };
};

export const setDiningOut = () => {
  return {
    type: "setDiningOut",
  };
};

export const setNightLife = () => {
  return {
    type: "setNightLife",
  };
};

export const setStatisticsPage = () => {
  return {
    type: "setStatisticsPage",
  };
};

export const saveChartsData = (chartsData) => {
  return {
    type: "saveChartsData",
    data: chartsData,
  };
};

export const maleEmployeesSalary = (array) => {
  return {
    type: "maleEmployeesSalary",
    data: array,
  };
};

export const femaleEmployeesSalary = (array) => {
  return {
    type: "femaleEmployeesSalary",
    data: array,
  };
};

export const saveSearchInput = (input) => {
  return {
    type: "saveSearchInput",
    data: input,
  };
};

export const saveCurrentObject = (object)=>{
    return{
        type: "saveCurrentObject",
        data: object
    }
}