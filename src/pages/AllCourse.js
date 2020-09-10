import React,{Component,Fragment} from 'react';

import Footer from '../components/Footer/Footer';
import PageTop from '../components/PageTop/PageTop';
import TopNave from '../components/TopNave/TopNave';
import AllCourse from '../components/AllCourse/AllCourse';

class About extends Component {
    render(){
        return(
            <Fragment>
            <TopNave title="course"/>
            <PageTop pageTitle="All Courses"/>   
             <AllCourse/>
             <Footer/>

            </Fragment>
 
        );
    }
}

export default About;