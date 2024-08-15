import React from 'react';
import { SiCodeforces, SiCodechef, SiLeetcode } from "react-icons/si";
import { BiSolidMessageAltError } from "react-icons/bi";
import { FaHome } from "react-icons/fa";
import { Link, useLocation } from 'react-router-dom';
import './Sidebar.css';

function Sidebar() {
  const location = useLocation(); // Hook to get the current path

  // Function to determine if the link is active
  const isActive = (path) => location.pathname === path ? 'active1' : '';

  return (
    <div className={`w-[280px] h-[100vh] top-0 left-0 fixed bg-black z-50 md:hidden`}>
      <nav className='flex flex-col items-center px-4 py-4 text-white mt-10'>
        <div className='w-full'>
          <div className='pb-7'>
            <a href="https://www.youtube.com/@learntime2424" className='flex justify-center items-center gap-4'>
              <div className='w-10 h-10'>
                <img className='rounded-full' src="https://rko0211.github.io/jgec-previous-year-question-paper/channels4_profile.jpg" alt="img" />
              </div>
              <div className='text-2xl font-bold'>LEARN TIME</div>
            </a>
          </div>
          <ul className='flex flex-col gap-10'>
            <Link to="/">
              <li className={`cursor-pointer flex items-center gap-1 relative hover-sidebarunderline-animation justify-center py-3 w-[100%] ${isActive('/')} menuhover`}>
                <FaHome />Home
              </li>
            </Link>
            <Link to="/Codeforces">
              <li className={`cursor-pointer flex items-center gap-1 relative hover-sidebarunderline-animation justify-center py-3 w-[100%] ${isActive('/Codeforces')} menuhover`}>
                <SiCodeforces />Codeforces
              </li>
            </Link>
            <Link to="/Leetcode">
              <li className={`cursor-pointer flex items-center gap-1 relative hover-sidebarunderline-animation justify-center py-3 w-[100%] ${isActive('/Leetcode')} menuhover`}>
                <SiLeetcode />Leetcode
              </li>
            </Link>
            <Link to="/Codechef">
              <li className={`cursor-pointer flex items-center gap-1 relative hover-sidebarunderline-animation justify-center py-3 w-[100%] ${isActive('/Codechef')} menuhover`}>
                <SiCodechef />Codechef
              </li>
            </Link>
            <Link to="/Contact">
              <li className={`cursor-pointer flex items-center gap-1 relative hover-sidebarunderline-animation justify-center py-3 w-[100%] ${isActive('/Contact')} menuhover`}>
                <BiSolidMessageAltError />Contact
              </li>
            </Link>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Sidebar;
