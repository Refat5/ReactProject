import React,{Component,Fragment} from 'react';

import Footer from '../components/Footer/Footer';
import PageTop from '../components/PageTop/PageTop';
import TopNave from '../components/TopNave/TopNave';
import Contact from '../components/Contact/Contact';

class ContactUs extends Component {
    render(){
        return(
            <Fragment>
                <TopNave/>
                <PageTop pageTitle="Contact  us"/>   
                <Contact/>
                <Footer/>

            </Fragment>

        );
    }
}

export default ContactUs;