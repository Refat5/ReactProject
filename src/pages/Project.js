import React, { Component, Fragment } from 'react';

import Footer from '../components/Footer/Footer';
import PageTop from '../components/PageTop/PageTop';
import ProjectDetails from '../components/ProjectDetails/ProjectDetails';
import TopNave from '../components/TopNave/TopNave';

class Project extends Component {
    componentDidMount() {
        window.scroll(0, 0);
    }
    render() {
        return (
            <Fragment>
                <TopNave title="Project Details" />
                <PageTop pageTitle="Project Details " />
                <ProjectDetails />
                <Footer />
            </Fragment>
        );
    }
}

export default Project;
