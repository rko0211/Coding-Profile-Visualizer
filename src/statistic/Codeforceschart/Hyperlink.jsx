import React from 'react';

const Hyperlink = ({ uname }) => {
  return (
    <div className='text-center'>
      <h2 className="text-center text-xl md:text-3xl font-bold  md:mb-6 text-gray-800 mb-6 my-12">See {uname} Profile On Codeforce</h2>
      <a
        href={`https://codeforces.com/profile/${uname}/`}
        target="_blank"
        rel="noopener noreferrer"
        className={`inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500} mt-5`}

      >View Profile

      </a>
    </div>
  );
};

export default Hyperlink;
