import React from 'react';
import TopBanner from "./components/TopBanner/TopBanner";
import Service from './components/Service/Service';
import TopNave from './components/TopNave/TopNave';
import Analysis from './components/Analysis/Analysis';
import Summary from './components/Summary/Summary';
import RecentProject from './components/RecentProject/RecentProject';
import Cources from './components/Cources/Cources';





function App() {
  return (
    <div>
      <TopNave/>
      <TopBanner/>
      <Service/>
      <Analysis/>
      <Summary/>
      <RecentProject/>
      <Cources/>
      

    </div>
  );
}

export default App;
