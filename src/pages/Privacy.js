import React, { Component, Fragment } from 'react';

import Footer from '../components/Footer/Footer';
import PageTop from '../components/PageTop/PageTop';
import PrivacySection from '../components/PrivacySection/PrivacySection';
import TopNave from '../components/TopNave/TopNave';

class Privacy extends Component {
    componentDidMount() {
        window.scroll(0, 0);
    }
    render() {
        return (
            <Fragment>
                <TopNave title="Privacy Policy " />
                <PageTop pageTitle="Privacy Policy" />
                <PrivacySection />
                <Footer />
            </Fragment>
        );
    }
}
export default Privacy;
