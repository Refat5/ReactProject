import React, {Component, Fragment} from 'react';


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
                        <a href="#">FACEBOOK</a><br/>
                        <a href="#">GITHUB</a>

                        </Col>

                        <Col lg={3} md={6} sm={12} className="p-5 text-justify">
                        <h4 className="serviceName">Address</h4>
                        <p>#feni,3900,Mohifal,Pacgaciya-laxmiyara Bazzer Feni</p>
                        <p>mdrefat382139@gmail.com</p>
                        <p> +8801305976639</p>
                        </Col>

                        <Col lg={3} md={6} sm={12} className="p-5 text-justify">
                        <h4 className="serviceName">Information</h4>
                        <a href="#">About Me</a><br/>
                        <a href="#">My Resume</a><br/>
                        <a href="#">Contact Me</a>


                        </Col>

                        <Col lg={3} md={6} sm={12} className="p-5 text-justify">
                        <h4 className="serviceName">Legal</h4>
                        <a href="#"> Refimd Policy</a><br/>
                        <a href="#">Terms And Condition</a><br/>
                        <a href="#">Privacy Policy</a>
                        </Col>
                    </Row>

                </Container>
                </Fragment>
        );
       }
     }
     export default Footer;