import React from 'react';

// Sample data for problems


const Recentsubmission = ({ data1, uname }) => {
  const problems = [

  ];

  for (let i = 0; i < Math.min(20, data1[0].recentSubmissions.length); i++) {
    problems.push({ name: data1[0].recentSubmissions[i].title, statusDisplay: data1[0].recentSubmissions[i].statusDisplay });
  }

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-xl shadow-2xl my-12">
      <h2 className="text-center text-xl md:text-3xl font-bold  md:mb-6 text-gray-800 mb-6">Recent Submission of {uname}</h2>
      <ul className="space-y-4">
        {problems.map((problem, index) => (
          <li key={index} className="p-4 bg-gray-100 rounded-lg shadow-md text-lg font-semibold text-blue-600 
          flex justify-between flex-wrap gap-1">


            {problem.name}
            {
              problem.statusDisplay === "Accepted" ?
                <span className="text-sm mt-1 flex flex-wrap justify-between gap-3 text-green-700">{problem.statusDisplay}</span>
                :
                <span className="text-sm mt-1 flex flex-wrap justify-between gap-3 text-red-700">{problem.statusDisplay}</span>
            }
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Recentsubmission;
