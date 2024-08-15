import React from 'react'
import { Pie } from 'react-chartjs-2';
function Tags({ data1, uname }) {
  const myMap = new Map();
  const mySet = new Set();
  for (let i = 0; i < data1[2].result.length; i++) {
    if (data1[2].result[i].verdict === "OK" && mySet.has(data1[2].result[i].problem.name) === false) {
      const item = data1[2].result[i].problem.tags;
      for (let j = 0; j < item.length; j++) {
        if (myMap.has(item[j])) {
          myMap.set(item[j], myMap.get(item[j]) + 1);
        }
        else {
          myMap.set(item[j], 1);
        }
      }

      mySet.add(data1[2].result[i].problem.name);

    }

  }

  // Convert the Map to arrays for chart data
  const labels = Array.from(myMap.keys());
  const dataValues = Array.from(myMap.values());

  // Generate random colors for each segment
  const generateRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  const backgroundColors = labels.map(() => generateRandomColor());
  const hoverBackgroundColors = labels.map(() => generateRandomColor());

  // Pie chart data configuration
  const chartData = {
    labels: labels,
    datasets: [
      {
        data: dataValues,
        backgroundColor: backgroundColors,
        hoverBackgroundColor: hoverBackgroundColors,
      },
    ],
  };

  // Pie chart options with legend at the bottom
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom', // Position the legend at the bottom
        labels: {
          boxWidth: 10,
          padding: 5,
        },
      },

    },

    layout: {
      padding: {
        bottom: 40, // Add padding to ensure space for the legend
      },
    },
  };

  return (
    <div style={{ maxWidth: '800px' }} className='my-16 mx-auto shadow-xl rounded-lg'>
      <h2 style={{ textAlign: 'center' }} className='text-2xl font-bold text-center mb-4'>Tags of {uname}</h2>
      <div className='flex justify-center mx-auto items-center max-w-[550px]'>
        <Pie data={chartData} options={options} className='items-center' />
      </div>
    </div >
  );
}

export default Tags