import React from 'react';
import { Home } from 'components/Home';
import { Codeforces } from 'components/Codeforces';
import Leetcode from 'components/Leetcode';
import Codechef from 'components/Codechef';
import Contact from 'components/Contact';
import { Outlet } from 'react-router-dom';
function Layout() {
  return (
    <>
      <Home />
      <Codeforces />
      <Leetcode />
      <Codechef />
      <Contact />
    </>
  )
}

export default Layout