import React,{Component,Fragment} from 'react'
import { Container, Row,Col,Card} from 'react-bootstrap'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCheckCircle } from '@fortawesome/free-solid-svg-icons'
import CountUp from 'react-countup'
import VisibilitySensor from "react-visibility-sensor";


class Summary extends Component {
    render(){
        return(
            <Fragment>
                <Container fluid={true} className=
                        "SummaryBanner p-0 ">
                    <div className="SummaryOverlay">
                        <Container className="text-center" >
                            <Row>
                                <Col lg={8} md={6} sm={12}>
                                    <Row>
                                        <Col>
                                        <h1 className="CountNumber">
                                        <CountUp start={0} end={100}>
                                                    {({ countUpRef, start }) => (
                                                     <VisibilitySensor onChange={start} delayedCall>
                                                    <span ref={countUpRef} />
                                                    
                                                   </VisibilitySensor>
                                                    )}
                                                    </CountUp>
                                        </h1>
                                        <h4 className="CountTitle">Total Project</h4>
                                        <hr className="bg-white w"/>
                                        </Col>

                                        <Col >
                                        <h1 className="CountNumber"><CountUp start={0} end={560}>
                                                    {({ countUpRef, start }) => (
                                                     <VisibilitySensor onChange={start} delayedCall>
                                                    <span ref={countUpRef} />
                                                    
                                                   </VisibilitySensor>
                                                    )}
                                                    </CountUp></h1>
                                        <h4 className="CountTitle">Total Clients</h4>
                                        <hr className="bg-white w"/>
                                        </Col>
                                    </Row>

                                </Col>

                                <Col lg={4} md={6} sm={12}>
                                <Card className="workCard">
                                
                                    <Card.Body>
                                        <Card.Title className="cardTitle">How I Work</Card.Title>
                                        <Card.Text>
                                        <p className="cardSubTitle"> <FontAwesomeIcon className="checkIcon" icon={faCheckCircle} /> Reqirment Gathering</p>
                                        <p className="cardSubTitle">  <FontAwesomeIcon className="checkIcon" icon={faCheckCircle} /> System Analysis</p>
                                        <p className="cardSubTitle">  <FontAwesomeIcon className="checkIcon" icon={faCheckCircle} /> Coding Testing</p>
                                        <p className="cardSubTitle">  <FontAwesomeIcon className="checkIcon" icon={faCheckCircle} /> Implementation</p>

                                        </Card.Text>
                                    </Card.Body>
                                
                                    </Card>

                                </Col>
                            </Row>
                        </Container>
                    </div>

                </Container>
            </Fragment>
        );
    }
}
export default Summary;
