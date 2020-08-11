import React from 'react';
import TopBanner from "./components/TopBanner/TopBanner";
import Service from './components/Service/Service';
import TopNave from './components/TopNave/TopNave';
import Analysis from './components/Analysis/Analysis';
import Summary from './components/Summary/Summary';
import RecentProject from './components/RecentProject/RecentProject';
import Cources from './components/Cources/Cources';
import Video from './components/video/Video';





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
      <Video/>




    </div>
  );
}

export default App;
