import React, { Component, Fragment } from 'react';
import TermsSection from '../components/TermsSection/TermsSection';
import Footer from '../components/Footer/Footer';
import PageTop from '../components/PageTop/PageTop';
import TopNave from '../components/TopNave/TopNave';

class Terms extends Component {
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
