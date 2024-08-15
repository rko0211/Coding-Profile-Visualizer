import React, { useState } from 'react';
import './App.css';
import Navbar from './commonelement/Navbar';
import Sidebar from './commonelement/Sidebar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Codeforces from './components/Codeforces';
import Leetcode from './components/Leetcode';
import Codechef from './components/Codechef';
import Contact from './components/Contact';

function App() {
  const [sidebar, setSidebar] = useState(false);


  const HandleSidebar = (info) => {
    setSidebar(info);
  }

  return (
    <BrowserRouter>
      <div className={`App max-h-max bg-gray-100`}>
        {/* Navbar */}
        <Navbar HandleSidebar={HandleSidebar} sidebar={sidebar} />
        {/* Navbar end */}

        {/* Sidebar */}
        {sidebar && <Sidebar />}
        {/* Sidebar end */}

        {/* Routes */}
        <Routes>
          <Route path='/' element={<Home sidebar={sidebar} HandleSidebar={HandleSidebar} />} />
          <Route path='/Codeforces' element={<Codeforces sidebar={sidebar} HandleSidebar={HandleSidebar} />} />
          <Route path='/Leetcode' element={<Leetcode sidebar={sidebar} HandleSidebar={HandleSidebar} />} />
          <Route path='/Codechef' element={<Codechef sidebar={sidebar} HandleSidebar={HandleSidebar} />} />
          <Route path='/Contact' element={<Contact sidebar={sidebar} HandleSidebar={HandleSidebar} />} />
          {/* Add more routes here as needed */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
