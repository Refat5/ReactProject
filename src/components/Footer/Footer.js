import React, { Component, Fragment } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faMobile } from '@fortawesome/free-solid-svg-icons';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class Footer extends Component {
    render() {
        return (
            <Fragment>
                <Container fluid={true} className="text-center footerBox">
                    <Row>
                        <Col lg={3} md={6} sm={12} className="p-5 text-justify">
                            <h4 className="serviceName">Follow Me</h4>
                            <a href="#" className="socialink">
                                <FontAwesomeIcon icon={faFacebook} /> FACEBOOK
                            </a>
                            <br />
                            <a href="#" className="socialink">
                                <FontAwesomeIcon icon={faGithub} /> GITHUB
                            </a>
                        </Col>

                        <Col lg={3} md={6} sm={12} className="p-5 text-justify">
                            <h4 className="serviceName">Address</h4>
                            <p className="footerP">
                                #feni,3900,Mohifal,Pacgaciya-laxmiyara Bazzer Feni
                            </p>
                            <p className="footerP">
                                <FontAwesomeIcon icon={faEnvelope} /> mdrefat382139@gmail.com
                            </p>
                            <p className="footerP">
                                <FontAwesomeIcon icon={faMobile} /> +8801305976639
                            </p>
                        </Col>

                        <Col lg={3} md={6} sm={12} className="p-5 text-justify">
                            <h4 className="serviceName">Information</h4>
                            <Link to="/about" className="footerLink">
                                About Me
                            </Link>
                            <br />
                            <Link to="/portfolio" className="footerLink">
                                My Resume
                            </Link>
                            <br />
                            <Link to="/contact" className="footerLink">
                                Contact Me
                            </Link>
                        </Col>

                        <Col lg={3} md={6} sm={12} className="p-5 text-justify">
                            <h4 className="serviceName">Legal</h4>
                            <Link to="/refund" className="footerLink">
                                {' '}
                                Refund Policy
                            </Link>
                            <br />
                            <Link to="/terms" className="footerLink">
                                Terms And Condition
                            </Link>
                            <br />
                            <Link to="/privacy" className="footerLink">
                                Privacy Policy
                            </Link>
                        </Col>
                    </Row>
                </Container>

                <Container fluid={true} className="text-center footerEnd">
                    <a href="#" className="footerEndP">
                        Refat@copyright 2020-2021
                    </a>
                </Container>
            </Fragment>
        );
    }
}
export default Footer;
