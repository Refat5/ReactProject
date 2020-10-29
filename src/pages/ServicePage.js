import React, { Component, Fragment } from 'react';

import Contact from '../components/Contact/Contact';
import ContactUs from './ContactUs';
import Footer from '../components/Footer/Footer';
import PageTop from '../components/PageTop/PageTop';
import Service from '../components/Service/Service';
import TopNave from '../components/TopNave/TopNave';

class ServicePage extends Component {
    componentDidMount() {
        window.scroll(0, 0);
    }
    render() {
        return (
            <Fragment>
                <TopNave title="service" />
                <PageTop pageTitle="My Services" />
                <Service />
                <Contact />
                <Footer />
            </Fragment>
        );
    }
}

export default ServicePage;
