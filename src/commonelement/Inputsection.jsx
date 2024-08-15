import React, { useState } from 'react'
import { useLocation } from 'react-router-dom';

function Inputsection({ HandleProfilApiData }) {
  const [username, setUserName] = useState('');
  const location = useLocation();
  let platform;


  switch (location.pathname) {
    case "/Codeforces":
      platform = "Codeforces";
      break;

    case "/Leetcode":
      platform = "Leetcode";
      break;

    case "/Codechef":
      platform = "Codechef";
      break;


    default:
      break;
  };


  const getData = (e) => {

    e.preventDefault();

    HandleProfilApiData(username);

    setUserName('');
  }

  return (
    <div className='shadow-[1px_1px_8px_1px_rgba(0,0,0,0.3)] dark:shadow-[1px_1px_8px_1px_rgba(255,255,255,1)] rounded-lg mx-auto mt-20 w-4/5  md:w-4/5 md:mx-auto lg:w-3/5 lg:mx-auto xl:w-1/2 p-2 bg-white flex flex-col mb-12 '>

      <form className='flex justify-between my-auto items-center flex-wrap gap-5 mt-20 relative' onSubmit={getData}>
        <input
          type="text"
          id="usrname"
          name='usrname'
          className="focus:outline-none border-b-2 placeholder-gray-500 
      text-sm md:text-base dark:text-white dark:placeholder-gray-500
      dark:outline-white focus:border-b-blue-600 w-10/12 md:w-4/5
      transition-transform peer mt-5"
          value={username}
          onChange={(e) => setUserName(e.target.value)}
          required
        />
        <label
          htmlFor="usrname"
          className="absolute left-0 -top-4 cursor-text peer-focus:text-xs
      peer-focus:-top-5 transition-all sm:-top-4 sm:peer-focus:-top-5
      md:-top-2 md:peer-focus:-top-4 text-gray-600"
        >
          {platform} User Name
        </label>
        <button className='bg-blue-500 p-2 pl-3 pr-3 text-white'>Search</button>

      </form>
    </div>
  )
}

export default Inputsection;