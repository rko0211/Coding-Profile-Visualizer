import React from 'react';



const colors = [
  'bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500',
  'bg-gradient-to-r from-green-400 via-blue-500 to-purple-600',
  'bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500',
  'bg-gradient-to-r from-teal-400 via-blue-500 to-green-500',
  'bg-gradient-to-r from-pink-400 via-red-500 to-yellow-500',
  'bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-500',
  'bg-gradient-to-r from-red-400 via-pink-500 to-purple-600',
  // Add more colors if needed
];

const Leetcodebadges = ({ data1, uname }) => {
  const badges = [];
  for (let i = 0; i < data1[2].badges.length; i++) {
    if (data1[2].badges[i].icon[0] !== '/')
      badges.push({ name: data1[2].badges[i].displayName, imageUrl: data1[2].badges[i].icon });
  }
  // console.log(badges);
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-xl shadow-2xl my-12">
      <h2 className="text-center text-xl md:text-3xl font-bold  md:mb-6 text-gray-800 mb-6">Badges of {uname}</h2>
      <div className="flex flex-wrap justify-center gap-6">
        {badges.map((badge, index) => (
          <div
            key={index}
            className={`relative text-center p-6 rounded-xl shadow-lg transform transition duration-500 hover:scale-105 hover:shadow-2xl ${colors[index % colors.length]} `}
          >
            <div className="absolute inset-0 bg-black opacity-20 rounded-xl"></div>
            <img
              src={badge.imageUrl}
              alt={badge.name}
              className="relative z-10 w-24 h-24 mx-auto mb-4 rounded-full border-4 border-white shadow-inner text-white"
            />
            <h3 className="relative z-10 text-lg font-semibold text-white tracking-wide">{badge.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Leetcodebadges;
