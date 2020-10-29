import React, { Component, Fragment } from 'react';

import CourseDetails from '../components/CourseDetails/CourseDetails';
import Footer from '../components/Footer/Footer';
import TopNave from '../components/TopNave/TopNave';

class Course extends Component {
    componentDidMount() {
        window.scroll(0, 0);
    }
    render() {
        return (
            <Fragment>
                <TopNave title="contact" />
                <CourseDetails />
                <Footer />
            </Fragment>
        );
    }
}

export default Course;
