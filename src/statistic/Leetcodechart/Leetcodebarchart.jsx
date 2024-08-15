import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const ProblemComparisonChart = ({ data1 }) => {
  // Extract data for each difficulty level
  const easyData = { total: data1[0].totalEasy, solved: data1[0].easySolved };
  const mediumData = { total: data1[0].totalMedium, solved: data1[0].mediumSolved };
  const hardData = { total: data1[0].totalHard, solved: data1[0].hardSolved };

  const chartData = {
    labels: ['Easy', 'Medium', 'Hard'],
    datasets: [
      {
        label: 'Solved Problems',
        data: [easyData.solved, mediumData.solved, hardData.solved],
        backgroundColor: 'rgba(75,192,192,0.6)',
        borderColor: 'rgba(75,192,192,1)',
        borderWidth: 1,
        stack: 'stack1',
        order: 1, // Ensure it appears on top of Total Problems
      },
      {
        label: 'Total Problems',
        data: [easyData.total, mediumData.total, hardData.total],
        backgroundColor: 'rgba(255,99,132,0.6)',
        borderColor: 'rgba(255,99,132,1)',
        borderWidth: 1,
        stack: 'stack1',
        order: 2, // Ensure it appears below Solved Problems
      },
    ],
  };

  const maxValue = Math.max(
    easyData.total,
    mediumData.total,
    hardData.total
  );

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Comparison of Total vs Solved Problems',
      },
    },
    scales: {
      x: {
        stacked: true,
        title: {
          display: true,
          text: 'Difficulty Level',
        },
      },
      y: {
        stacked: true,
        title: {
          display: true,
          text: 'Number of Problems',
        },
        // Ensure y-axis is properly scaled
        suggestedMax: maxValue * 1.1, // 10% more than the highest value for better visibility
      },
    },
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-xl shadow-2xl my-12">
      <h2 className="text-center text-xl md:text-3xl font-bold md:mb-6 text-gray-800 mb-6">
        Comparison of Total vs Solved Problems
      </h2>
      <Bar data={chartData} options={options} />

      {/* Content below the chart */}
      <div className="mt-8 text-xs md:text-base xl:text-lg">
        {easyData.solved <= easyData.total / 3 && (
          <p className="text-green-600 font-semibold mb-2">
            Solve more Easy problems to improve your Problem Solving Skills.
          </p>
        )}
        {mediumData.solved <= mediumData.total / 2 && (
          <p className="text-yellow-600 font-semibold mb-2">
            Solve more Medium problems to improve your Problem Solving Skills.
          </p>
        )}
        {hardData.solved <= hardData.total / 2 && (
          <p className="text-red-600 font-semibold mb-2">
            Solve more Hard problems to improve your Problem Solving Skills.
          </p>
        )}
        {!(
          easyData.solved <= easyData.total / 3 ||
          mediumData.solved <= mediumData.total / 2 ||
          hardData.solved <= hardData.total / 2
        ) && (
            <p className="text-green-600 font-semibold">
              Solve more problems from other platforms like Codeforces, CodeChef, Atcoder, etc. to improve your problem-solving skills.
            </p>
          )}
      </div>
    </div>
  );
};

export default ProblemComparisonChart;
