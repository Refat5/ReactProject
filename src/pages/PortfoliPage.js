import React, { Component, Fragment } from 'react';

import AllProject from '../components/AllProject/AllProject';
import Footer from '../components/Footer/Footer';
import PageTop from '../components/PageTop/PageTop';
import TopNave from '../components/TopNave/TopNave';

class PortfoliPage extends Component {
    componentDidMount() {
        window.scroll(0, 0);
    }
    render() {
        return (
            <Fragment>
                <TopNave title="portfolio" />
                <PageTop pageTitle="All Project" />
                <AllProject />
                <Footer />
            </Fragment>
        );
    }
}

export default PortfoliPage;
