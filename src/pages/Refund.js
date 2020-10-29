import React, { Component, Fragment } from 'react';

import Footer from '../components/Footer/Footer';
import PageTop from '../components/PageTop/PageTop';
import RefundSection from '../components/RefundSection/RefundSection';
import TopNave from '../components/TopNave/TopNave';

class Refund extends Component {
    componentDidMount() {
        window.scroll(0, 0);
    }
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
