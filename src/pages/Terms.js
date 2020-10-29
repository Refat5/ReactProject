import React, { Component, Fragment } from 'react';

import Footer from '../components/Footer/Footer';
import PageTop from '../components/PageTop/PageTop';
import TermsSection from '../components/TermsSection/TermsSection';
import TopNave from '../components/TopNave/TopNave';

class Terms extends Component {
    componentDidMount() {
        window.scroll(0, 0);
    }
    render() {
        return (
            <Fragment>
                <TopNave title="Terms & Condition" />
                <PageTop pageTitle="Terms & Condition" />
                <TermsSection />
                <Footer />
            </Fragment>
        );
    }
}
export default Terms;
