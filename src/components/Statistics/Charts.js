import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../../redux/actions";
import "../../css/charts.css";

function Charts() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.reducer);
  const apiKey = "coinranking66ef99efda4ee6577d56dc73c268c702f45f8d72b98f6a98";
  const chartData = useSelector((state) => state.reducer.chartsData);

  const getChartData = async () => {
    try {
      const response = await axios.get(
        "https://api.coinranking.com/v2/coins/?limit=10",
        {
          headers: {
            "Content-Type": "application/json",
            "x-access-token": `${apiKey}`,
          },
        }
      );

      dispatch(actions.saveChartsData(response.data));
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getChartData();
  }, []);

  useEffect(() => {
    if (chartData.data !== undefined && chartData.data.coins !== undefined) {
      let maleEmployeeSalary = [];
      let femaleEmployeeSalary = [];
      chartData.data.coins.map((object, index) => {
        if (index <= 4) {
          maleEmployeeSalary.push(object.price);
        } else {
          femaleEmployeeSalary.push(object.price);
        }
      });
      dispatch(actions.maleEmployeesSalary(maleEmployeeSalary));
      dispatch(actions.femaleEmployeesSalary(femaleEmployeeSalary));
    }
  }, [chartData]);

  const options = {
    chart: {
      type: "column",
    },
    title: {
      text: "Zomato Salary Chart",
    },
    xAxis: {
      categories: ["2017", "2018", "2019", "2020", "2021"],
    },
    yAxis: {
      title: {
        text: "Total Salary Paid",
      },

      stackLabels: {
        enabled: true,
      },
    },
    plotOptions: {
      column: {
        stacking: "normal",
        dataLabels: {
          enabled: true,
        },
      },
    },
    series: [
      {
        name: "male employees",
        data: [200000, 1100000, 600000, 100000, 800000],
      },
      {
        name: "female employees",
        data: [300000, 500000, 900000, 400000, 1200000],
      },
    ],
  };

  const optionsSecond = {
    chart: {
      type: "column",
    },
    title: {
      text: "Zomato Revenue, Expenses and Loss",
    },
    xAxis: {
      categories: ["2021", "2020", "2019"],
    },

    yAxis: {
      title: {
        text: "amount in crores",
      },
      labels: {
        format: "{value}Cr",
      },

      stackLabels: {
        enabled: true,
      },
    },
    tooltip: {
      pointFormat: "{series.name}:" + "<b>{point.y:.1f} Cr</b>",
      useHTML: true,
    },
    plotOptions: {
      column: {
        dataLabels: {
          enabled: true,
        },
      },
    },

    colors: ["#32CD32", "lightgrey", "#FF7F50"],
    series: [
      {
        name: "Revenue from Operations",
        data: [1994, 2605, 1312.6],
      },
      {
        name: "Total Expenses",
        data: [2609, 5006.3, 3608.2],
      },
      {
        name: "Loss for the Year",
        data: [816.4, 2385.6, 1010.5],
      },
    ],
  };

  return (
    <>
      <div className="simpleChart max-width">
        <div className="chartOne">
          <HighchartsReact highcharts={Highcharts} options={options} />
        </div>

        <div className="chartTwo ">
          <HighchartsReact highcharts={Highcharts} options={optionsSecond} />
        </div>
      </div>
    </>
  );
}

export default Charts;
