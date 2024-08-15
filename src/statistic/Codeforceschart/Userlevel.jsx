import React from 'react'
import { Bar } from 'react-chartjs-2';
function Userlevel({ data1, uname }) {
  const myMap1 = new Map();
  for (let i = 0; i < data1[2].result.length; i++) {
    const item = data1[2].result[i];
    if (item.verdict === "OK" && item.problem.type === "PROGRAMMING") {
      if (myMap1.has(item.problem.index)) {
        myMap1.set(item.problem.index, myMap1.get(item.problem.index) + 1);
      }
      else {
        myMap1.set(item.problem.index, 1);
      }
    }
  }

  // Convert the Map to an array of [key, value] pairs and sort by keys
  const sortedEntries = Array.from(myMap1.entries()).sort(([key1], [key2]) => {
    return key1.localeCompare(key2);
  });

  // Extract sorted keys and values
  const labels = sortedEntries.map(([key]) => key);
  const data = sortedEntries.map(([_, value]) => value);

  // Data for the bar chart
  const chartData = {
    labels: labels,  // Sorted keys (index)
    datasets: [
      {
        label: 'Problem Solved',
        data: data,  // Corresponding values (count)
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  // Options for the bar chart
  const options = {
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: 'Count',
        },
      },
      x: {
        title: {
          display: true,
          text: 'Problem Index',
        },
      },
    },
  };

  return (
    <div style={{ maxWidth: '800px' }} className='my-16 mx-auto shadow-xl rounded-lg'>
      <h2 style={{ textAlign: 'center' }} className='text-2xl font-bold text-center mb-4'>Levels of {uname} in Contest</h2>
      <Bar data={chartData} options={options} />
    </div>
  )
}

export default Userlevel