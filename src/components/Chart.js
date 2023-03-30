// Importing React, useRef, and useEffect from the 'react' package
import React, { useRef, useEffect } from 'react';
// Importing Chart.js package for creating charts
import Chart from 'chart.js';

// Defining a functional component 'LineChart' with a data prop
function LineChart({ data }) {
console.log(data);


  // Create a reference for the canvas element
const chartRef = useRef(null);

// Using useEffect hook to update chart once data changes
useEffect(() => {
// Getting the canvas element from the ref
const myChartRef = chartRef.current.getContext("2d");

// Creating a new Chart instance with provided data
new Chart(myChartRef, {
  type: "line", // chart type
  data: {
    labels: data.labels, // data for x-axis labels
    datasets: [
      {
        label: "My First dataset",
        data: data.values, // data for y-axis values
        fill: false,
        borderColor: "rgb(75, 192, 192)",
        tension: 0.1
      }
    ]
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    // Defining scales for x and y axes
    scales: {
      xAxes: [{
        display: true,
        scaleLabel: {
          display: true,
          labelString: 'Date'
        }
      }],
      yAxes: [{
        display: true,
        scaleLabel: {
          display: true,
          labelString: 'Value'
        }
      }]
    }
  }
});
}, [data.chart]);

// Rendering the canvas element for chart display
return (
<div>
<canvas id="myChart" ref={chartRef} />
</div>
);
}

// Exporting the LineChart component
export default LineChart;