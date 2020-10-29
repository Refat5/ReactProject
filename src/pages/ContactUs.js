import React, { Component, Fragment } from 'react';

import Contact from '../components/Contact/Contact';
import Footer from '../components/Footer/Footer';
import PageTop from '../components/PageTop/PageTop';
import TopNave from '../components/TopNave/TopNave';

class ContactUs extends Component {
    componentDidMount() {
        window.scroll(0, 0);
    }
    render() {
        return (
            <Fragment>
                <TopNave title="contact" />
                <PageTop pageTitle="Contact  us" />
                <Contact />
                <Footer />
            </Fragment>
        );
    }
}

export default ContactUs;
