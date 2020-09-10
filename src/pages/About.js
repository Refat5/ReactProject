import React,{Component,Fragment} from 'react';
import AboutDescription from '../components/AboutDescription/AboutDescription';
import Footer from '../components/Footer/Footer';
import PageTop from '../components/PageTop/PageTop';
import TopNave from '../components/TopNave/TopNave';

class About extends Component {
    render(){
        return(
            <Fragment>
            <TopNave title="about"/>
            <PageTop pageTitle="About Me"/>   
             <AboutDescription/>
             <Footer/>
 
            </Fragment>

        );
    }
}

export default About;