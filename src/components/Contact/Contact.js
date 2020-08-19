
import React,{Component,Fragment} from 'react'; 
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { Row,Container,Col, Form,Button } from 'react-bootstrap';
import {faEnvelope } from '@fortawesome/free-solid-svg-icons';
import {faMobile } from '@fortawesome/free-solid-svg-icons';



class Contact extends Component{
    render(){
        return(
            <Fragment>
                <Container className="mt-5">
                    <Row>
                        <Col lg={6} md={6} sm={12}>
                    <h4 className="serviceName">Quick Contact</h4>
                            <Form>
                                <Form.Group>
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control type="text"/>
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control type="email"/>
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>Message</Form.Label>
                                    <Form.Control as="textarea" rows="3"/>
                                </Form.Group>
                                <Button variant="primary" type="submit">
                                    Submit
                                </Button>
                            </Form>

                        </Col>
                      
                        <Col lg={6} md={6} sm={12}>
                        <h4 className="serviceName">Address</h4>
                        <p className="addressp">#feni,3900,Mohifal,Pacgaciya-laxmiyara Bazzer Feni</p>
                        <p className="addressp"><FontAwesomeIcon  icon={faEnvelope} /> mdrefat382139@gmail.com</p>
                        <p className="addressp"><FontAwesomeIcon   icon={faMobile} /> +8801305976639</p>
                            </Col>
                    </Row>
                </Container>

            </Fragment>

        );
    }
}
export default Contact;