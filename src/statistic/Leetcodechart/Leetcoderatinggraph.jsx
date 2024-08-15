import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const LeetcodeRatingGraph = ({ data1, uname }) => {

  const ratingData = [];

  for (let i = 0; i < data1[1].contestParticipation.length; i++) {
    ratingData.push({
      problemsolved: data1[1].contestParticipation[i].problemsSolved,
      rating: data1[1].contestParticipation[i].rating,
      ranking: data1[1].contestParticipation[i].ranking
    });
  }

  // Generate contest numbers as labels
  // const contestNumbers = ratingData.map((_, index) => index + 1);
  const ratings = ratingData.map((point) => Math.round(point.rating));
  const problemssolved = ratingData.map((point) => point.problemsolved)
  const data = {
    labels: problemssolved, // Use contestNumbers as labels

    datasets: [
      {
        label: 'LeetCode Rating',
        data: ratings,
        fill: false,
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: 'rgba(75,192,192,1)',
        tension: 0.1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'LeetCode Rating Over Time',
      },
    },
    scales: {
      x: {
        display: true, // Show x-axis labels
        title: {
          display: true,
          text: 'Contest Number',
        },
        ticks: {
          callback: function (value) {
            return value; // Display 'Contest' before each number
          },
        },
      },
      y: {
        display: true,
        title: {
          display: true,
          text: 'Rating',
        },
      },
    },
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-xl shadow-2xl my-12">
      <h2 className="text-center text-xl md:text-3xl font-bold md:mb-6 text-gray-800 mb-6">Rating Graph of {uname}</h2>
      <Line data={data} options={options} />
    </div>
  );
};

export default LeetcodeRatingGraph;
