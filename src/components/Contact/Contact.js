
import React,{Component,Fragment} from 'react'; 
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { Row,Container,Col } from 'react-bootstrap';
import {faEnvelope } from '@fortawesome/free-solid-svg-icons';
import {faMobile } from '@fortawesome/free-solid-svg-icons';



class Contact extends Component{
    render(){
        return(
            <Fragment>
                <Container>
                    <Row>
                        <Col lg={6} md={6} sm={12}>

                        </Col>
                      
                        <Col lg={6} md={6} sm={12}>
                        <h4 className="serviceName">Address</h4>
                        <p className="footerP">#feni,3900,Mohifal,Pacgaciya-laxmiyara Bazzer Feni</p>
                        <p className="footerP"><FontAwesomeIcon  icon={faEnvelope} /> mdrefat382139@gmail.com</p>
                        <p className="footerP"><FontAwesomeIcon   icon={faMobile} /> +8801305976639</p>
                            </Col>
                    </Row>
                </Container>

            </Fragment>

        );
    }
}
export default Contact;