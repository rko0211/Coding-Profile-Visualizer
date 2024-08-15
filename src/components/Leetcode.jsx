import React, { useEffect, useState } from 'react';
import './common.css';
import Navbar from '../commonelement/Navbar';
import Sidebar from '../commonelement/Sidebar';
import Inputpart from './Inputpart';
import Developer from '../commonelement/Developer';
import Like from '../commonelement/Like';
import Leetcodestatistic from '../statistic/Leetcodestatistic';
import Loading from '../commonelement/Loading';
import ErrorMessage from '../commonelement/ErrorMessage';

function Leetcode() {
  const [sidebar, setSidebar] = useState(false);
  const [uname, setUname] = useState('');
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState(''); // New state for error message
  const [errorMessage1, setErrorMessage1] = useState('');
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);  // New loading state
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 768);

  const HandleSidebar = (info) => {
    setSidebar(info);
  }

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

  const HandleLeetcodeApiData = async (username) => {
    setUname(username);
    setLoading(true);  // Start loading
    setError(false);   // Reset error state
    setErrorMessage(''); // Reset error message
    try {
      const fetchData = async (url) => {
        try {
          const response = await fetch(url);
          if (response.status === 429) {

            setErrorMessage1("Please Try Later !");  // Set specific error message for 429
            setError(true);
            return null;
          }
          if (!response.ok) {
            throw new Error(`Failed to fetch data from ${url}`);
          }
          return await response.json();
        } catch (error) {

          return null; // Return null if the data is not available
        }
      };

      const api_call1 = fetchData(`https://alfa-leetcode-api.onrender.com/userProfile/${username}`);
      const api_call2 = fetchData(`https://alfa-leetcode-api.onrender.com/${username}/contest`);
      const api_call3 = fetchData(`https://alfa-leetcode-api.onrender.com/${username}/badges`);
      const api_call4 = fetchData(`https://alfa-leetcode-api.onrender.com/skillStats/${username}`);
      const api_call5 = fetchData(`https://alfa-leetcode-api.onrender.com/daily`);
      const api_call6 = fetchData(`https://alfa-leetcode-api.onrender.com/languageStats?username=${username}`);

      // Await all promises in parallel
      const [
        Letcodeprofiledata,
        Leetcodecontestdata,
        Leetcodebadgesdata,
        Leetcodeskilldata,
        Leetcodedpp,
        Leetcodelanguage
      ] = await Promise.all([api_call1, api_call2, api_call3, api_call4, api_call5, api_call6]);

      // Combine all the objects into an array, filtering out null values
      const combinedData = [
        Letcodeprofiledata,
        Leetcodecontestdata,
        Leetcodebadgesdata,
        Leetcodeskilldata,
        Leetcodedpp,
        Leetcodelanguage
      ].filter(data => data !== null);

      if (!Letcodeprofiledata || Object.keys(Letcodeprofiledata).length === 0) {

        setErrorMessage("Sorry, we couldn't find any data"); // Set generic error message
        setError(true);  // Set error if no data is found
      }
      setData(combinedData);
      // console.log(combinedData);
    } catch (err) {

      setErrorMessage("Sorry, we couldn't find any data"); // Set generic error message
      setError(true);
    } finally {
      setLoading(false);  // End loading
    }
  }

  return (
    <div className={`bg-gray-100 min-h-screen`}>
      {/* Navbar */}
      <Navbar HandleSidebar={HandleSidebar} sidebar={sidebar} />
      {/* Navbar end */}

      {/* Sidebar */}
      {sidebar && <Sidebar />}
      {/* Sidebar end */}

      {/* Content area */}
      <Inputpart sidebar={sidebar} HandleLeetcodeApiData={HandleLeetcodeApiData} />

      <div className={`content-area ${isSmallScreen ? (sidebar ? 'blur-sm cursor-not-allowed pointer-events-none overflow-hidden' : '') : 'hidden'} w-full md:block`}>
        {
          loading ? (
            <Loading />
          ) : error ? (
            <ErrorMessage message={errorMessage} message1={errorMessage1} />  // Pass error message as a prop
          ) : (
            data.length > 0 && <Leetcodestatistic data={data} uname={uname} />
          )
        }
      </div>

      <Like />
      <Developer />
      {/* Content area end */}
    </div>
  );
}

export default Leetcode;
