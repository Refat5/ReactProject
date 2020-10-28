import { Col, Container, Row } from 'react-bootstrap';

import { Fragment } from 'react';
import React from 'react';
import mobile from '../../asset/images/ad.jpg';

const ProjectDetails = () => {
    return (
        <Fragment>
            <Container className="mt-5">
                <Row>
                    <Col lg={6} md={6} sm={12}>
                        <img class="courseImg" src={mobile} />
                    </Col>
                    <Col lg={6} md={6} sm={6}>
                        <h2 className="servicName">This is a Product</h2>
                        <p className="servicDescription">
                            Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in
                            laying out print, graphic or web designs.Lorem ipsum, or lipsum as it is{' '}
                        </p>
                        <ul>
                            <li className="servicDescription">Hello Everyone what's up </li>
                            <li className="servicDescription">Hello Everyone what's up </li>
                            <li className="servicDescription">Hello Everyone what's up </li>
                            <li className="servicDescription">Hello Everyone what's up </li>
                            <li className="servicDescription">Hello Everyone what's up </li>
                            <li className="servicDescription">Hello Everyone what's up </li>
                            <li className="servicDescription">Hello Everyone what's up </li>
                            <li className="servicDescription">Hello Everyone what's up </li>
                            <li className="servicDescription">Hello Everyone what's up </li>
                        </ul>
                        <button type="button" class="btn btn-primary ml-4">
                            {' '}
                            Mor info
                        </button>
                    </Col>
                </Row>
            </Container>
        </Fragment>
    );
};

export default ProjectDetails;
