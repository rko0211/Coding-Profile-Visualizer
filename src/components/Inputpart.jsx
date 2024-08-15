import React from 'react'
import { useState, useEffect } from 'react';
// import Developer from '../commonelement/Developer';
// import Like from '../commonelement/Like';
import Inputsection from '../commonelement/Inputsection';
import { useLocation } from 'react-router-dom';
function Inputpart({ sidebar, HandleLeetcodeApiData, HandleCodeforcesApiData, HandleCodechefApiData }) {
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 768);
  const location = useLocation();
  let HandleProfilApiData;

  switch (location.pathname) {
    case "/Codeforces":
      HandleProfilApiData = HandleCodeforcesApiData;
      break;

    case "/Leetcode":
      HandleProfilApiData = HandleLeetcodeApiData;
      break;

    case "/Codechef":
      HandleProfilApiData = HandleCodechefApiData;
      break;


    default:
      break;
  };



  const handleResize = () => {
    setIsSmallScreen(window.innerWidth < 768);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    <>

      {
        isSmallScreen ?
          <div className={`content-area ${sidebar ? 'blur-sm cursor-not-allowed pointer-events-none overflow-hidden' : ''} w-full  md:hidden`}>
            <Inputsection HandleProfilApiData={HandleProfilApiData} />

          </div>
          :
          <div className={`content-area hidden w-full  md:block`}>
            <Inputsection HandleProfilApiData={HandleProfilApiData} />

          </div>
      }

    </>
  )
}

export default Inputpart