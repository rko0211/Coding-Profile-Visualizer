import React, { useState } from 'react';
import { SiCodeforces, SiCodechef, SiLeetcode } from "react-icons/si";
import { BiSolidMessageAltError } from "react-icons/bi";
import { FaHome } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";
import { GiCrossedSwords } from "react-icons/gi";
import channelimg from '../assets/channels4_profile.jpg';
import './Navbar.css';
import { Link, useLocation } from 'react-router-dom';

function Navbar({ HandleSidebar, sidebar }) {
  const [hambergmenu, setHambergMenu] = useState(false);
  const location = useLocation(); // Hook to get the current path

  const HandleHambergMenu = () => {
    setHambergMenu(!hambergmenu);
    HandleSidebar(!hambergmenu);
  }

  const isActive = (path) => location.pathname === path ? 'active' : '';

  return (
    <nav className='flex justify-between px-4 py-4 fixed top-0 right-0 left-0 z-30 bg-gray-900 text-white items-center shadow-md'>
      <div>
        <a href="https://www.youtube.com/@learntime2424" className={`flex items-center gap-4 ${sidebar ? 'sm:hidden' : ''} md:flex`}>
          <div className='w-10 h-10'>
            <img className='rounded-full' src={channelimg} alt="img" />
          </div>
          <div className='text-2xl font-bold'>LEARN TIME</div>
        </a>
      </div>
      <div>
        <ul className='hidden md:flex relative'>
          <Link to="/">
            <li className={`mx-3  flex items-center gap-1 relative hover-underline-animation ${isActive('/')}`}>
              <FaHome />Home
            </li>
          </Link>
          <Link to="/Codeforces">
            <li className={`mx-3  flex items-center gap-1 relative hover-underline-animation ${isActive('/Codeforces')}`}>
              <SiCodeforces />Codeforces
            </li>
          </Link>
          <Link to="/Leetcode">
            <li className={`mx-3  flex items-center gap-1 relative hover-underline-animation ${isActive('/Leetcode')}`}>
              <SiLeetcode />Leetcode
            </li>
          </Link>
          <Link to="/Codechef">
            <li className={`mx-3  flex items-center gap-1 relative hover-underline-animation ${isActive('/Codechef')}`}>
              <SiCodechef />Codechef
            </li>
          </Link>
          <Link to="/Contact">
            <li className={`mx-3 flex items-center gap-1 relative hover-underline-animation ${isActive('/Contact')}`}>
              <BiSolidMessageAltError />Contact
            </li>
          </Link>
        </ul>
        <div className='md:hidden'>
          {
            (!hambergmenu) ?
              <RxHamburgerMenu onClick={HandleHambergMenu} className='h-10 w-10 cursor-pointer' />
              : <GiCrossedSwords onClick={HandleHambergMenu} className='h-10 w-10 cursor-pointer' />
          }
        </div>
      </div>
    </nav>
  )
}

export default Navbar;
