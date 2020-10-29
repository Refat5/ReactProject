import React, { Component, Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';

import About from '../pages/About';
import AllCourse from '../pages/AllCourse';
import Contact from '../pages/ContactUs';
import CourseDetails from '../pages/Course';
import Home from '../pages/Home';
import Portfolio from '../pages/PortfoliPage';
import Privacy from '../pages/Privacy';
import Project from '../pages/Project';
import Refund from '../pages/Refund';
import ServicePage from '../pages/ServicePage';
import Terms from '../pages/Terms';

class AppROuter extends Component {
    render() {
        return (
            <Fragment>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/service" component={ServicePage} />
                    <Route exact path="/course" component={AllCourse} />
                    <Route exact path="/portfolio" component={Portfolio} />
                    <Route exact path="/contact" component={Contact} />
                    <Route exact path="/about" component={About} />
                    <Route exact path="/refund" component={Refund} />
                    <Route exact path="/terms" component={Terms} />
                    <Route exact path="/privacy" component={Privacy} />
                    <Route exact path="/Project" component={Project} />
                    <Route exact path="/courseDetails" component={CourseDetails} />
                </Switch>
            </Fragment>
        );
    }
}

export default AppROuter;
