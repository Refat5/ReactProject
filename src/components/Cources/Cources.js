import { Col, Container, Row } from 'react-bootstrap';
import React, { Component, Fragment } from 'react';

import { Link } from 'react-router-dom';
import graphic from '../../asset/images/gp.jpg';
import mobile from '../../asset/images/ad.jpg';
import normal from '../../asset/images/background.jpg';
import web from '../../asset/images/web.jpg';

class Cources extends Component {
    render() {
        return (
            <Fragment>
                <Container>
                    <h1 className="CourcesMainTitle text-center">OUR COURCESS</h1>
                    <Row>
                        <div class="p-2 col-lg-6 col-md-12 col-sm-12">
                            <div class="p-3 row">
                                <div class="p-2 col-lg-6 col-md-6 col-sm-12">
                                    <img class="courseImg" src={mobile} />
                                </div>
                                <div class="p-2 col-lg-6 col-md-6 col-sm-12">
                                    <h5 class="text-justify courseTitle">Mobile Development</h5>
                                    <p class="text-justify courseDes">
                                        I build native and cross platfrom mobile app for your
                                        business app for your business
                                    </p>
                                    <Link class="courseDetails float-left" to="/courseDetails">
                                        Details
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div class="p-2 col-lg-6 col-md-12 col-sm-12">
                            <div class="p-3 row">
                                <div class="p-2 col-lg-6 col-md-6 col-sm-12">
                                    <img class="courseImg" src={web} />
                                </div>
                                <div class="p-2 col-lg-6 col-md-6 col-sm-12">
                                    <h5 class="text-justify courseTitle">Web Development</h5>
                                    <p class="text-justify courseDes">
                                        I build native and cross platfrom mobile app for your
                                        business app for your business
                                    </p>
                                    <Link class="courseDetails float-left" to="/courseDetails">
                                        Details
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div class="p-2 col-lg-6 col-md-12 col-sm-12">
                            <div class="p-3 row">
                                <div class="p-2 col-lg-6 col-md-6 col-sm-12">
                                    <img class="courseImg" src={graphic} />
                                </div>
                                <div class="p-2 col-lg-6 col-md-6 col-sm-12">
                                    <h5 class="text-justify courseTitle">Graphic</h5>
                                    <p class="text-justify courseDes">
                                        I build native and cross platfrom mobile app for your
                                        business app for your business
                                    </p>
                                    <Link class="courseDetails float-left" to="/courseDetails">
                                        Details
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div class="p-2 col-lg-6 col-md-12 col-sm-12">
                            <div class="p-3 row">
                                <div class="p-2 col-lg-6 col-md-6 col-sm-12">
                                    <img class="courseImg" src={normal} />
                                </div>
                                <div class="p-2 col-lg-6 col-md-6 col-sm-12">
                                    <h5 class="text-justify courseTitle">Web Development</h5>
                                    <p class="text-justify courseDes">
                                        I build native and cross platfrom mobile app for your
                                        business app for your business
                                    </p>
                                    <Link class="courseDetails float-left" to="/courseDetails">
                                        Details
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </Row>
                </Container>
            </Fragment>
        );
    }
}
export default Cources;
