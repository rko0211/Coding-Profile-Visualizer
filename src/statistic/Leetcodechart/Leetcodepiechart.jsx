import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import './Leetcodepiechart.css'
ChartJS.register(ArcElement, Tooltip, Legend);

const LeetcodePieChart = ({ data1, uname }) => {
  // Prepare the topics array
  let topics = [];

  // Collect all tags from different problem counts
  ['advanced', 'fundamental', 'intermediate'].forEach(level => {
    topics = [...topics, ...data1[3].data.matchedUser.tagProblemCounts[level]];
  });

  // Extract data for the first pie chart (languages)
  const languageData = data1[5].matchedUser.languageProblemCount;
  const languageLabels = languageData.map(item => item.languageName);
  const languageValues = languageData.map(item => item.problemsSolved);

  // Extract data for the second pie chart (topics)
  const topicLabels = topics.map(item => item.tagName);
  const topicValues = topics.map(item => item.problemsSolved);

  // Function to generate a color array
  const generateColors = (numColors) => {
    const colors = [];
    for (let i = 0; i < numColors; i++) {
      colors.push(`hsl(${i * 360 / numColors}, 70%, 70%)`);
    }
    return colors;
  };

  // Generate colors for languages
  const languageBackgroundColors = generateColors(languageLabels.length);
  const languageBorderColors = languageBackgroundColors.map(color => color.replace('70%', '90%'));

  // Generate colors for topics
  const topicBackgroundColors = generateColors(topicLabels.length);
  const topicBorderColors = topicBackgroundColors.map(color => color.replace('70%', '90%'));

  // Define chart data for the first pie chart (languages)
  const languageDataConfig = {
    labels: languageLabels,
    datasets: [
      {
        label: 'Number of Questions Solved by Language',
        data: languageValues,
        backgroundColor: languageBackgroundColors,
        borderColor: languageBorderColors,
        borderWidth: 2,
      },
    ],
  };

  // Define chart data for the second pie chart (topics)
  const topicDataConfig = {
    labels: topicLabels,
    datasets: [
      {
        label: 'Number of Questions Solved by Topic',
        data: topicValues,
        backgroundColor: topicBackgroundColors,
        borderColor: topicBorderColors,
        borderWidth: 2,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'bottom', // Position the legend below the chart
        labels: {
          font: {
            size: 10, // Reduce font size for small screens
          },
          padding: 5, // Adjust padding for better fit
          boxWidth: 10, // Reduce width of the legend box
        },
      },
      tooltip: {
        callbacks: {
          label: function (context) {
            const label = context.label || '';
            const value = context.raw || 0;
            return `${label}: ${value} questions`;
          },
        },
      },
    },
    layout: {
      padding: {
        bottom: 80, // Ensure there's enough space for the legend
      },
    },
  };

  return (
    <div className="flex flex-col gap-8 md:gap-16 items-center my-12" >
      <div className="w-full md:w-3/4 lg:w-2/3 xl:w-1/2 bg-white shadow-lg rounded-lg p-4 md:p-8">
        <h2 className="text-center text-xl md:text-3xl font-bold mb-4 md:mb-6">Languages of {uname}</h2>
        <div className="relative h-72 md:h-96">
          <Pie data={languageDataConfig} options={options} />
        </div>
      </div>
      <div className="w-full md:w-3/4 lg:w-2/3 xl:w-1/2 bg-white shadow-lg rounded-lg p-4 md:p-8">
        <h2 className="text-center text-xl md:text-3xl font-bold mb-4 md:mb-6">Solved Problems Tags</h2>
        <div className="relative h-96 md:h-96">
          <Pie data={topicDataConfig} options={options} />
        </div>
      </div>

    </div>
  );
};

export default LeetcodePieChart;
