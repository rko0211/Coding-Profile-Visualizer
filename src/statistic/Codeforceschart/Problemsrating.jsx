import React from 'react'
import { Bar } from 'react-chartjs-2';

function Problemsrating({ data1, uname }) {
  const myMap1 = new Map();
  const mySet1 = new Set();

  for (let i = 0; i < data1[2].result.length; i++) {
    const item = data1[2].result[i];
    if (item.verdict === "OK" && mySet1.has(item.problem.name) === false) {
      if (myMap1.has(item.problem.rating)) {
        myMap1.set(item.problem.rating, myMap1.get(item.problem.rating) + 1);
      } else {
        myMap1.set(item.problem.rating, 1);
      }
      mySet1.add(item.problem.name);
    }
  }

  // Filter out undefined keys
  const validEntries = Array.from(myMap1.entries()).filter(([key, value]) => key !== undefined && value !== undefined);

  // Sort entries by keys (ratings) in ascending order
  const sortedEntries = validEntries.sort(([key1], [key2]) => key1 - key2);

  // Extract sorted keys and values
  const labels = sortedEntries.map(([key]) => key);
  const data = sortedEntries.map(([_, value]) => value);

  // Assign colors based on the value ranges
  const getColorForKey = (key) => {
    if (key >= 2900) return 'rgba(139, 0, 0, 0.9)'; // Black with reduced transparency
    if (key >= 2600 && key <= 2899) return 'rgba(255, 0, 0, 0.9)';
    if (key >= 2400 && key <= 2599) return 'rgba(255, 0, 0, 0.6)'; // Red with reduced transparency
    if (key >= 2300 && key <= 2399) return 'rgba(255, 140, 0, 0.9)'; // Dark Orange with reduced transparency
    if (key >= 2200 && key <= 2299) return 'rgba(255, 165, 0, 0.6)'; // Orange with reduced transparency
    if (key >= 1900 && key <= 2199) return 'rgba(238, 130, 238, 0.9)'; // Violet with reduced transparency
    if (key >= 1600 && key <= 1899) return 'rgba(0, 0, 255, 0.7)'; // Blue with reduced transparency
    if (key >= 1400 && key <= 1599) return 'rgba(0, 255, 255, 0.7)'; // Cyan with reduced transparency
    if (key >= 1200 && key <= 1399) return 'rgba(0, 128, 0, 0.7)'; // Green with reduced transparency
    if (key >= 0 && key <= 1199) return 'rgba(128, 128, 128, 0.8)';
  };

  // Generate colors for each value
  const colors = labels.map(key => getColorForKey(key));
  // Data for the bar chart
  const chartData = {
    labels: labels,  // Sorted keys (index)
    datasets: [
      {
        label: 'Problem Solved',
        data: data,  // Corresponding values (count)
        backgroundColor: colors,  // Assign colors based on the value ranges
        borderColor: 'rgba(0, 0, 0, 0.2)',
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
          text: 'Problem Rating',
        },
      },
    },
  };

  return (
    <div style={{ maxWidth: '800px' }} className='my-16 mx-auto shadow-xl rounded-lg'>
      <h2 style={{ textAlign: 'center' }} className='text-2xl font-bold text-center mb-4'>Problem Ratings of {uname}</h2>
      <Bar data={chartData} options={options} />
    </div>
  );
}

export default Problemsrating;
