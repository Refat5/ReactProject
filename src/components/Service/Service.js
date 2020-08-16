import React, {Component, Fragment,} from 'react';
import '../../asset/css/custom.css'
import'../../asset/css/bootstrap.min.css'

import { Container,Row,Col } from 'react-bootstrap';

import mobile from '../../asset/images/mobile.svg'
import graphics from '../../asset/images/graphic.svg'
import computer from '../../asset/images/computer.svg'


class Service extends Component{
    render()
    {
        return(
            <Fragment>
                <Container>
                    <h1 className="serviceMainTitle text-center">Our Services</h1>
                    <Row>
                        <Col lg={4} md={6} sm={12}>
                        <div className="serviceCard text-center">
                            <img   className="img" src={computer}/>
                            <h2 className="serviceName">Web Development</h2>
                            <p className="servicDescription" >I design and develop static and dynamic I am not a good developer but i try to be a good developer </p>
                        </div>
                        </Col>

                        <Col lg={4} md={6} sm={12}>
                        <div className="serviceCard text-center ">
                            <img className="img" src={mobile}/>
                            <h2 className="serviceName">Mobile</h2>
                            <p className="servicDescription">I design and develop static and dynamic I am not a good developer but i try to be a good developer </p>
                        </div>
                        </Col>

                        <Col lg={4} md={6} sm={12}>
                        <div className="serviceCard text-center">
                            <img  className="img" src={graphics}/>
                            <h2 className="serviceName">Graphics</h2>
                            <p className="servicDescription">I design and develop static and dynamic I am not a good developer but i try to be a good developer </p>
                        </div>
                        </Col>
                    </Row>

                </Container>
            </Fragment>
        );
    }
}
export default Service;