import React, { Component, Fragment } from 'react';
import RefundSection from '../components/RefundSection/RefundSection';
import Footer from '../components/Footer/Footer';
import PageTop from '../components/PageTop/PageTop';
import TopNave from '../components/TopNave/TopNave';

class Refund extends Component {
    render() {
        return (
            <Fragment>
                <TopNave title="Refund Policy" />
                <PageTop pageTitle="Refund Policy" />
                <RefundSection />
                <Footer />
            </Fragment>
        );
    }
}
export default Refund;
