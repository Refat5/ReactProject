import React,{Component, Fragment} from 'react';
import {Route,Switch} from "react-router-dom";
import Home from '../pages/Home';
import ServicePage from '../pages/ServicePage';
import Contact from '../pages/ContactUs';
import AllCourse from '../pages/AllCourse';
import About from '../pages/About';
import Portfolio from '../pages/PortfoliPage';





class AppROuter extends Component {
    render(){
        return(
            <Fragment>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/service" component={ServicePage}/>
                    <Route exact path="/course" component={AllCourse}/>
                    <Route exact path="/portfolio" component={Portfolio}/>
                    <Route exact path="/contact" component={Contact}/>
                    <Route exact path="/about" component={About}/>

                </Switch>

            </Fragment>
        )
    }
}

export default AppROuter;