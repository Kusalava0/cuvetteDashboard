import React from 'react';
import { Line } from 'react-chartjs-2';

const ComparisonGraph = ({ data, userPercentile }) => {
  const chartData = {
    labels: [0, 20, 40, 60, 80, 100], // Empty labels to hide X-axis labels
    datasets: [
      {
        label: [],
        data: data,
        borderColor: '#EBF0F5',
        pointBackgroundColor: "#438AF6",
        borderWidth: 2,
        fill: true,
        tension: 0.4,
      },
      
    ],
};

const options = {
  scales: {
    x: {
      display: true, // Hide X-axis
    },
      y: {
        display: false, // Hide Y-axis
      },
    },
  };

  return (
    <div>
      <Line data={chartData} options={options} />
    </div>
  );
};

export default ComparisonGraph;
