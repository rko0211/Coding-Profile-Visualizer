import React, { useState } from 'react';
import './common.css';
import { Link } from 'react-router-dom';
import Navbar from '../commonelement/Navbar';
import Sidebar from '../commonelement/Sidebar';
import imagePath1 from '../assets/leetcode.png';
import imagePath2 from '../assets/codeforces.jpg';
import imagePath3 from '../assets/codechef.webp';
import Footer from './Footer';

function Home() {
  const [sidebar, setSidebar] = useState(false);

  const HandleSidebar = (info) => {
    setSidebar(info);
  }

  return (
    <div className={`App h-screen bg-gray-200 dark:bg-gray-900 text-gray-800 dark:text-white font-sans`}>

      {/* Navbar */}
      <Navbar HandleSidebar={HandleSidebar} sidebar={sidebar} />
      {/* Navbar end */}

      {/* Sidebar */}
      {sidebar && <Sidebar />}
      {/* Sidebar end */}

      <section className="bg-blue-600 text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Track Your Coding Progress with Ease</h1>
          <p className="text-lg md:text-xl mb-8">View detailed statistics from Codeforces, LeetCode, and CodeChef all in one place.</p>
          <Link to={"/Codeforces"}>
            <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-full">
              Get Started
            </button>
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-200">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">Why Use Our Platform?</h2>
          <div className="flex flex-wrap justify-center">
            <div className="w-full md:w-1/3 p-4">
              <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 min-h-[350px] flex flex-col justify-between">
                <img src={imagePath1} alt="Feature 1" className="h-40 w-full object-contain mx-auto mb-4" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">Comprehensive Statistics</h3>
                  <p>Get detailed insights into your problem-solving skills and progress on multiple platforms.</p>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/3 p-4">
              <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 min-h-[350px] flex flex-col justify-between">
                <img src={imagePath2} alt="Feature 2" className="h-40 w-full object-contain mx-auto mb-4" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">Easy to Use</h3>
                  <p>Simply enter your username to see all your coding stats in one place without any hassle.</p>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/3 p-4">
              <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 min-h-[350px] flex flex-col justify-between">
                <img src={imagePath3} alt="Feature 3" className="h-40 w-full object-contain mx-auto mb-4" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">Real-time Updates</h3>
                  <p>Your statistics are updated in real-time to reflect your latest progress.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-blue-600 text-white py-20 ">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Track Your Progress?</h2>
          <p className="text-lg md:text-xl mb-8">Enter your username to get started and see how far you've come.</p>
          <Link to={"/Codeforces"}>
            <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-full">
              Enter Username
            </button>
          </Link>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-200">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">What Our Users Say</h2>
          <div className="flex flex-wrap justify-center">
            <div className="w-full md:w-1/3 p-4">
              <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6">
                <p className="italic">"This platform is amazing! I can easily track my progress and stay motivated."</p>
                <h3 className="text-lg font-semibold mt-4">- Jane Doe, Competitive Programmer</h3>
              </div>
            </div>
            <div className="w-full md:w-1/3 p-4">
              <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6">
                <p className="italic">"I love how simple it is to use. It saves me so much time!"</p>
                <h3 className="text-lg font-semibold mt-4">- John Smith, LeetCode Enthusiast</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />

    </div>
  );
}

export default Home;
