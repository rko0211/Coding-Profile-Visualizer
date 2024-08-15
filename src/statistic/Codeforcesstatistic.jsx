import React from 'react'
import Codeforcesunsolvedproblem from './Codeforceschart/Codeforcesunsolvedproblem';
import Userlevel from './Codeforceschart/Userlevel';
import Problemsrating from './Codeforceschart/Problemsrating';
import Codeforcesratinggraph from './Codeforceschart/Codeforcesratinggraph';
import Tags from './Codeforceschart/Tags';
import Veridict from './Codeforceschart/Veridict';
import Userlanguage from './Codeforceschart/Userlanguage';
import Hyperlink from './Codeforceschart/Hyperlink';



function Codeforcesstatistic({ data, uname }) {
  let totalAcsubmission = 0;
  const mySet = new Set();
  const myMap1 = new Map();
  const myMap2 = new Map();
  let maxattempts = 0;

  for (let i = data[2].result.length - 1; i >= 0; i--) {
    let item = data[2].result[i];
    // console.log(item.verdict);

    if (item.verdict === "OK") {
      mySet.add(item.problem.name);
      if (myMap1.get(item.problem.name) === 0 || !myMap1.has(item.problem.name)) {

        myMap2.set(item.problem.name, 1);

      }
    }
    else {

      if (myMap1.has(item.problem.name)) {
        myMap1.set(item.problem.name, myMap1.get(item.problem.name) + 1);
      } else {
        myMap1.set(item.problem.name, 1);
      }

      // Use .get() to access the value in the Map
      if (maxattempts <= myMap1.get(item.problem.name)) {
        maxattempts = Math.max(maxattempts, myMap1.get(item.problem.name));

      }
    }
  }
  maxattempts++;


  let solveWithOneSubmission = 0;
  solveWithOneSubmission = myMap2.size;
  // console.log(myMap2);

  totalAcsubmission = mySet.size;
  const contests1 = [
    { contestName: "Name", rank: data[0].result[0].firstName + " " + data[0].result[0].lastName },
    { contestName: "Country", rank: data[0].result[0].country },
    { contestName: "Total ACSubmission", rank: totalAcsubmission },
    { contestName: "Total Submission", rank: data[2].result.length },
    { contestName: "Average Attempts", rank: (data[2].result.length !== 0 && totalAcsubmission !== 0) ? Math.round((data[2].result.length / totalAcsubmission) * 100) / 100 : "Nan" },
    {
      contestName: "Max Attempts",
      rank: maxattempts
    },

    { contestName: "Solve With One Submission", rank: solveWithOneSubmission },
  ];

  let bestrank = 1000000000;
  let worstrank = -1;
  for (let i = 0; i < data[1].result.length; i++) {
    let item = data[1].result[i];
    if (item.rank > 0)
      bestrank = Math.min(bestrank, item.rank);
    if (item.rank > 0)
      worstrank = Math.max(worstrank, item.rank);
  }
  let maxup = 0;
  let maxdown = 1000000000;
  for (let i = 0; i < data[1].result.length; i++) {
    maxup = Math.max(maxup, (data[1].result[i].newRating - data[1].result[i].oldRating));
    maxdown = Math.min(maxdown, (data[1].result[i].newRating - data[1].result[i].oldRating))
  }
  const contests2 = [
    { contestName: "Rank", rank: data[0].result[0].rank },
    { contestName: "Current Rating", rank: data[0].result[0].rating },
    { contestName: "Maximum Rating", rank: data[0].result[0].maxRating },
    { contestName: "Number of Contest", rank: data[1].result.length },

    { contestName: "Best Rank", rank: (bestrank === 1000000000) ? "NaN" : bestrank },
    { contestName: "Worst Rank", rank: (worstrank === -1) ? "NaN" : worstrank },
    { contestName: "Max Up", rank: maxup },
    { contestName: "Max Down", rank: maxdown },
  ];



  return (
    <div className='bg-gray-100'>
      <div className="container mx-auto px-4 py-6">
        <h1 className="text-2xl font-bold text-center mb-4">Codeforces Profile Details of {uname}</h1>

        <div className="flex flex-col md:flex-row justify-center gap-4">
          {/* First Table */}
          <div className="overflow-x-auto w-full md:w-1/2">
            <table className="min-w-full bg-white border border-gray-300 rounded-lg shadow-lg">
              <thead>
                <tr>
                  <th className="px-4 py-2 border-b-2 border-gray-300 bg-blue-500 text-left text-xs leading-4 text-white  tracking-wider">
                    Some Information About
                  </th>
                  <th className="px-4 py-2 border-b-2 border-gray-300 bg-blue-500 text-left text-xs leading-4 text-white  tracking-wider">
                    {uname}
                  </th>
                </tr>
              </thead>
              <tbody>
                {contests1.map((contest, index) => (

                  <tr key={index} className="hover:bg-gray-100">
                    <td className="px-4 py-2 border-b border-gray-200 text-sm">{contest.contestName}</td>
                    <td className="px-4 py-2 border-b border-gray-200 text-sm">{contest.rank}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Second Table */}
          <div className="overflow-x-auto w-full md:w-1/2">
            <table className="min-w-full bg-white border border-gray-300 rounded-lg shadow-lg">
              <thead>
                <tr>
                  <th className="px-4 py-2 border-b-2 border-gray-300 bg-green-500 text-left text-xs leading-4 text-white  tracking-wider">
                    Contest Of
                  </th>
                  <th className="px-4 py-2 border-b-2 border-gray-300 bg-green-500 text-left text-xs leading-4 text-white  tracking-wider">
                    {uname}
                  </th>
                </tr>
              </thead>
              <tbody>
                {contests2.map((contest, index) => (
                  <tr key={index} className="hover:bg-gray-100">
                    <td className="px-4 py-2 border-b border-gray-200 text-sm">{contest.contestName}</td>
                    <td className="px-4 py-2 border-b border-gray-200 text-sm">{contest.rank}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <Userlanguage data1={data} uname={uname} />
      <Veridict data1={data} uname={uname} />
      <Tags data1={data} uname={uname} />
      <Codeforcesratinggraph data1={data} uname={uname} />
      <Userlevel data1={data} uname={uname} />
      <Problemsrating data1={data} uname={uname} />
      <Codeforcesunsolvedproblem data1={data} uname={uname} />
      <Hyperlink uname={uname} />
    </div>
  )
}

export default Codeforcesstatistic