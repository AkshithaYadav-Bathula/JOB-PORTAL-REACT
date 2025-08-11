

import React from 'react'
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import HomeCards from "./components/HomeCards";
import JobListings from "./components/JobListings";
import ViewAllJobs from "./components/ViewAllJobs";
const App = () => {
  return (
    <>
    <Navbar/>
    {/* <Hero title="Test title" subtitle="This is the subtitle"/> */}
    <Hero/>
    <HomeCards/>
    {/* <!-- Developers and Employers --> */}
   <JobListings/>
<ViewAllJobs/>
    {/* <!-- Browse Jobs --> */}
   
   
    </>
  );
};

export default App