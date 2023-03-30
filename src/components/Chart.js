import React, { useRef, useEffect } from 'react';
import Chart from 'Chart.js';

function LineChart({ data }) {
  const chartRef = useRef(null);

  useEffect(() => {
    const myChartRef = chartRef.current.getContext("2d");

    new Chart(myChartRef, {
      type: "line",
      data: {
        labels: data.labels,
        datasets: [
          {
            label: "My First dataset",
            data: data.values,
            fill: false,
            borderColor: "rgb(75, 192, 192)",
            tension: 0.1
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
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
  }, [data]);

  return (
    <div>
      <canvas id="myChart" ref={chartRef} />
    </div>
  );
}

export default LineChart;