import React, { Component, Fragment } from 'react';

import AllCourse from '../components/AllCourse/AllCourse';
import Footer from '../components/Footer/Footer';
import PageTop from '../components/PageTop/PageTop';
import TopNave from '../components/TopNave/TopNave';

class About extends Component {
    componentDidMount() {
        window.scroll(0, 0);
    }
    render() {
        return (
            <Fragment>
                <TopNave title="course" />
                <PageTop pageTitle="All Courses" />
                <AllCourse />
                <Footer />
            </Fragment>
        );
    }
}

export default About;
