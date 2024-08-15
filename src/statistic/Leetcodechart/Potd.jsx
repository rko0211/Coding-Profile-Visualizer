import React from 'react';



const Potd = ({ data1 }) => {

  // Sample data for problems
  const problems = [
    {
      name: 'Two Sum',
      date: '2024-08-10',
      url: 'https://leetcode.com/problems/two-sum/',
      difficulty: 'Medium',
    },

  ];
  problems[0].name = data1[4].questionTitle;
  problems[0].date = data1[4].date;
  problems[0].url = data1[4].questionLink;
  problems[0].difficulty = data1[4].difficulty;
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-xl shadow-2xl my-12">
      <h2 className="text-center text-xl md:text-3xl font-bold  md:mb-6 text-gray-800 mb-6">Solve today's Daily Challenge to refresh your streak!</h2>
      <ul className="space-y-4">
        {problems.map((problem, index) => (
          <li key={index} className="p-4 bg-gray-100 rounded-lg shadow-md font-semibold">
            <a
              href={problem.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg font-semibold text-blue-600 hover:underline"
            >
              {problem.name}
            </a>
            <p className="text-sm text-gray-700 mt-1 flex flex-wrap justify-between gap-3"> <span>Date: {problem.date}</span> <span>{problem.difficulty}</span></p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Potd;
