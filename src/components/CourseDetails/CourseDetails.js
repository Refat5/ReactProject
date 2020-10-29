import { BigPlayButton, Player } from 'video-react';
import { Button, Col, Container, Modal, Row } from 'react-bootstrap';
import React, { Fragment } from 'react';

function CourseDetails() {
    return (
        <Fragment>
            <Container fluid={true} className="topCoursePage p-0">
                <div className="topCourseOverlay">
                    <Container className="topCourse">
                        <Row>
                            <Col sm={12} md={6} lg={6}>
                                <h3 className="topCourseTitle">
                                    Full Dynamic Website with Admin Panel{' '}
                                </h3>
                                <p className="topCoursePtag">Total Lacture = 30</p>
                                <p className="topCoursePtag">Total Student = 30</p>
                            </Col>
                            <Col sm={12} md={6} lg={6}>
                                <p className="topCourseDescription">
                                    {' '}
                                    Complete e-commerce app solution for selling fruit online.
                                    According to build quality, data loading speed this is the
                                    Complete e-commerce app solution for selling fruit online.
                                    According to build quality, data loading speed this is the
                                    Complete e-commerce app solution for selling fruit online.
                                    According to build quality, data loading speed this is the
                                </p>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </Container>
            <Container className="mt-5">
                <Row>
                    <Col sm={12} md={6} lg={6}>
                        <h1 className="courseName">Skill You Get</h1>
                        <ul>
                            <li className="servicDescription">
                                Unlimited Dynamic Product Category
                            </li>
                            <li className="servicDescription">
                                Unlimited Dynamic Product Category
                            </li>
                            <li className="servicDescription">
                                Unlimited Dynamic Product Category
                            </li>
                            <li className="servicDescription">
                                Unlimited Dynamic Product Category
                            </li>
                            <li className="servicDescription">
                                Unlimited Dynamic Product Category
                            </li>
                            <li className="servicDescription">
                                Unlimited Dynamic Product Category
                            </li>
                            <li className="servicDescription">
                                Unlimited Dynamic Product Category
                            </li>
                            <li className="servicDescription">
                                Unlimited Dynamic Product Category
                            </li>
                            <li className="servicDescription">
                                Unlimited Dynamic Product Category
                            </li>
                            <li className="servicDescription">
                                Unlimited Dynamic Product Category
                            </li>
                            <li className="servicDescription">
                                Unlimited Dynamic Product Category
                            </li>
                        </ul>
                        <button type="button" class="btn btn-primary ml-4">
                            <a class="link-style" to="/Project">
                                Mor Info
                            </a>
                        </button>
                    </Col>

                    <Col sm={12} md={6} lg={6}>
                        <Player>
                            <source src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4" />
                            <BigPlayButton position="center" />
                        </Player>
                    </Col>
                </Row>
            </Container>
        </Fragment>
    );
}

export default CourseDetails;
