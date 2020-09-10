import React,{Component, Fragment} from 'react';
import TopNave from '../components/TopNave/TopNave';
import Service from '../components/Service/Service';
import PageTop from '../components/PageTop/PageTop';
import ContactUs from './ContactUs';
import Contact from '../components/Contact/Contact';
import Footer from '../components/Footer/Footer';

class ServicePage extends Component{
    render(){
        return(
            <Fragment>
                <TopNave title="service"/>
                <PageTop pageTitle="My Services"/>
                <Service/>
                <Contact/>
                <Footer/>


            </Fragment>
 
        );
    }
}

export default ServicePage;