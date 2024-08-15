import React from 'react'
import Leetcodepiechart from './Leetcodechart/Leetcodepiechart';
import Leetcodebadges from './Leetcodechart/Leetcodebadges';
import LeetcodeRatingGraph from './Leetcodechart/Leetcoderatinggraph';
import Leetcodebarchart from './Leetcodechart/Leetcodebarchart';
import Potd from './Leetcodechart/Potd';
import HyperlinkButton from './Leetcodechart/HyperlinkButton';
import Recentsubmission from './Leetcodechart/Recentsubmission';

function Leetcodestatistic({ data, uname }) {
  const contests1 = [
    { contestName: "Total Solved", rank: data[0].totalSolved },
    { contestName: "Contest Attend", rank: data[1].contestParticipation.length },
    { contestName: "Contribution Point", rank: data[0].contributionPoint },
    { contestName: "Reputation", rank: data[0].reputation },
    { contestName: "Total ACSubmission", rank: data[0].matchedUserStats.acSubmissionNum[0].submissions },
    { contestName: "Total Submission", rank: data[0].matchedUserStats.totalSubmissionNum[0].submissions },
    { contestName: "Contest Global Rank", rank: (!data[1].contestGlobalRanking) ? "NaN" : data[1].contestGlobalRanking },
  ];

  let bestrank = 1000000000;
  let worstrank = -1;
  let maxrating = -1;
  for (let i = 0; i < data[1].contestParticipation.length; i++) {
    if (data[1].contestParticipation[i].ranking > 0)
      bestrank = Math.min(bestrank, data[1].contestParticipation[i].ranking);
    if (data[1].contestParticipation[i].ranking > 0)
      worstrank = Math.max(worstrank, data[1].contestParticipation[i].ranking);

    maxrating = Math.max(maxrating, Math.round(data[1].contestParticipation[i].rating));
  }
  const contests2 = [
    { contestName: "Global Rank", rank: data[0].ranking },
    { contestName: "Contest Rating", rank: Math.round(data[1].contestRating) },
    { contestName: "Maximum Contest Rating", rank: maxrating },
    {
      contestName: "Contest Badge", rank: (data[1].contestBadges && data[1].contestBadges.name) ? data[1].contestBadges.name : "None"
    },
    { contestName: "Contest Top Percentage", rank: (data[1].contestParticipation.length > 0) ? data[1].contestTopPercentage : "None" },

    { contestName: "Badges Count", rank: data[2].badgesCount },

    { contestName: "Best Rank", rank: (bestrank === 1000000000) ? "NaN" : bestrank },
    { contestName: "Worst Rank", rank: (worstrank === -1) ? "NaN" : worstrank },
  ];



  return (
    <div className='bg-gray-100'>
      <div className="container mx-auto px-4 py-6">
        <h1 className="text-2xl font-bold text-center mb-4">Leetcode Profile Details of {uname}</h1>

        <div className="flex flex-col md:flex-row justify-center gap-4">
          {/* First Table */}
          <div className="overflow-x-auto w-full md:w-1/2">
            <table className="min-w-full bg-white border border-gray-300 rounded-lg shadow-lg">
              <thead>
                <tr>
                  <th className="px-4 py-2 border-b-2 border-gray-300 bg-blue-500 text-left text-xs leading-4 text-white  tracking-wider">
                    Some Number About
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
      <Leetcodepiechart data1={data} uname={uname} />
      <LeetcodeRatingGraph data1={data} uname={uname} />
      <Leetcodebarchart data1={data} uname={uname} />
      <Recentsubmission data1={data} uname={uname} />
      <Leetcodebadges data1={data} uname={uname} />
      <Potd data1={data} />
      <HyperlinkButton uname={uname} />
    </div>
  )
}

export default Leetcodestatistic