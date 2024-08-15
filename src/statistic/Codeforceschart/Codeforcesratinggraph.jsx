import React from 'react'
import { Line } from 'react-chartjs-2';
function Codeforcesratinggraph({ data1, uname }) {

  let element = [{
    rank: 0,
    rating: 0,
    incOrDec: 0,
    oldRating: 0,
    contestName: ""
  }];

  // Populate element array with calculated values
  for (let i = 0; i < data1[1].result.length; i++) {
    const item = data1[1].result[i];
    element.push({
      rank: item.rank,
      rating: item.newRating,
      incOrDec: item.newRating - element[i].oldRating,
      oldRating: item.newRating,
      contestName: item.contestName
    });
  }

  // Remove the initial placeholder value at index 0
  element.shift();

  // Create labels for the x-axis based on the contest numbers
  const labels = element.map((_, index) => `${index + 1}`);

  // Prepare data for the line chart
  const chartData = {
    labels: labels, // Contest numbers as labels
    datasets: [
      {
        label: 'Codeforces Rating',
        data: element.map(entry => entry.rating),
        fill: false,

        borderColor: 'rgba(75, 192, 192, 1)', // Vibrant teal for the line
        backgroundColor: 'rgba(153, 102, 255, 0.2)', // Soft purple for the fill below the line
        pointBorderColor: 'rgba(255, 206, 86, 1)', // Bright yellow for the point border
        pointBackgroundColor: '#FF6384', // Vivid coral for the point fill
        pointHoverRadius: 7, // Slightly larger hover radius for emphasis
        pointHoverBackgroundColor: '#FF6384', // Coral for the point background on hover
        pointHoverBorderColor: 'rgba(54, 162, 235, 1)', // Deep blue for the point border on hover


        pointRadius: 4,
        pointHitRadius: 10,
        tension: 0.2, // Smooth curve
      },
    ],
  };

  // Chart options
  const options = {
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: 'Rating',
        },
      },
      x: {
        title: {
          display: true,
          text: 'Contest Number',
        },
      },
    },
    plugins: {
      tooltip: {
        callbacks: {
          label: (context) => {
            const entry = element[context.dataIndex];
            return [
              `Rating: ${entry.rating} (${entry.incOrDec >= 0 ? '+' : ''}${entry.incOrDec})`,
              `Rank: ${entry.rank}`,
              `Contest: ${entry.contestName}`,
            ];
          },
        },
      },
    },
  };

  return (
    <div style={{ maxWidth: '800px' }} className='my-16 mx-auto shadow-xl rounded-lg'>
      <h2 style={{ textAlign: 'center' }} className='text-2xl font-bold text-center mb-4'>Codeforces Rating Graph of {uname}</h2>
      <Line data={chartData} options={options} />
    </div>
  );
}


export default Codeforcesratinggraph