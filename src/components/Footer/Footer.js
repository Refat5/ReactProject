import React, {Component, Fragment} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faFacebook } from '@fortawesome/free-brands-svg-icons';
import {faGithub } from '@fortawesome/free-brands-svg-icons';
import {faEnvelope } from '@fortawesome/free-solid-svg-icons';
import {faMobile } from '@fortawesome/free-solid-svg-icons';


import { Container,Row,Col } from 'react-bootstrap';



class Footer extends Component{
    render()
    {
        return(
            <Fragment>
                <Container fluid={true} className="text-center footerBox" >
                    <Row >
                        <Col lg={3} md={6} sm={12} className="p-5 text-justify">
                        <h4 className="serviceName">Follow Me</h4>
                        <a href="#" className="socialink"><FontAwesomeIcon    icon={faFacebook} /> FACEBOOK</a><br/>
                        <a href="#" className="socialink"><FontAwesomeIcon     icon={faGithub} /> GITHUB</a>

                        </Col>

                        <Col lg={3} md={6} sm={12} className="p-5 text-justify">
                        <h4 className="serviceName">Address</h4>
                        <p className="footerP">#feni,3900,Mohifal,Pacgaciya-laxmiyara Bazzer Feni</p>
                        <p className="footerP"><FontAwesomeIcon  icon={faEnvelope} /> mdrefat382139@gmail.com</p>
                        <p className="footerP"><FontAwesomeIcon   icon={faMobile} /> +8801305976639</p>
                        </Col>

                        <Col lg={3} md={6} sm={12} className="p-5 text-justify">
                        <h4 className="serviceName">Information</h4>
                        <a href="#" className="footerLink">About Me</a><br/>
                        <a href="#" className="footerLink">My Resume</a><br/>
                        <a href="#" className="footerLink">Contact Me</a>


                        </Col>

                        <Col lg={3} md={6} sm={12} className="p-5 text-justify">
                        <h4 className="serviceName">Legal</h4>
                        <a href="#" className="footerLink"> Refimd Policy</a><br/>
                        <a href="#" className="footerLink">Terms And Condition</a><br/>
                        <a href="#" className="footerLink">Privacy Policy</a>
                        </Col>
                    </Row>

                </Container>
                </Fragment>
        );
       }
     }
     export default Footer;