import React,{Component,Fragment} from 'react';
import TopBanner from "../components/TopBanner/TopBanner";
import Service from '../components/Service/Service';
import TopNave from '../components/TopNave/TopNave';
import Analysis from '../components/Analysis/Analysis';
import Summary from '../components/Summary/Summary';
import RecentProject from '../components/RecentProject/RecentProject';
import Cources from '../components/Cources/Cources';
import Video from '../components/video/Video';
import ClientReview from '../components/ClientReview/ClientReview';
import Footer from '../components/Footer/Footer'


class Home extends Component {
    render(){
        return(
            <Fragment>
                 <TopNave title="home"/>
      <TopBanner/>
      <Service/>
      <Analysis/> 
      <Summary/>
      <RecentProject/>
      <Cources/>
      <Video/>
      <ClientReview/>
      <Footer/>

            </Fragment>

        );
    }
}

export default Home;