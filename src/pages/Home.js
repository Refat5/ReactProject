import React, { Component, Fragment } from 'react';

import Analysis from '../components/Analysis/Analysis';
import ClientReview from '../components/ClientReview/ClientReview';
import Cources from '../components/Cources/Cources';
import Footer from '../components/Footer/Footer';
import RecentProject from '../components/RecentProject/RecentProject';
import Service from '../components/Service/Service';
import Summary from '../components/Summary/Summary';
import TopBanner from '../components/TopBanner/TopBanner';
import TopNave from '../components/TopNave/TopNave';
import Video from '../components/video/Video';

class Home extends Component {
    componentDidMount() {
        window.scroll(0, 0);
    }
    render() {
        return (
            <Fragment>
                <TopNave title="home" />
                <TopBanner />
                <Service />
                <Analysis />
                <Summary />
                <RecentProject />
                <Cources />
                <Video />
                <ClientReview />
                <Footer />
            </Fragment>
        );
    }
}

export default Home;
