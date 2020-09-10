import React,{Component,Fragment} from 'react';

import Footer from '../components/Footer/Footer';
import PageTop from '../components/PageTop/PageTop';
import TopNave from '../components/TopNave/TopNave';
import AllProject from '../components/AllProject/AllProject';

class PortfoliPage extends Component {
    render(){
        return(
            <Fragment>
                <TopNave title="portfolio"/>
                <PageTop pageTitle="All Project"/>   
                <AllProject/>
                <Footer/>
 
            </Fragment>

        );
    }
}

export default PortfoliPage;