import React, { Component, Fragment } from 'react';
import PrivacySection from '../components/PrivacySection/PrivacySection';
import Footer from '../components/Footer/Footer';
import PageTop from '../components/PageTop/PageTop';
import TopNave from '../components/TopNave/TopNave';

class Privacy extends Component {
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
