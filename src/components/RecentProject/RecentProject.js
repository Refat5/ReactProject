import React, {Component, Fragment,} from 'react';
import '../../asset/css/custom.css'
import'../../asset/css/bootstrap.min.css'

import { Container,Row,Col,button } from 'react-bootstrap';

import recentProject1 from '../../asset/images/recentProject1.jpg'
import recentProject2 from '../../asset/images/recentProject2.jpg'
import recentProject3 from '../../asset/images/recentProject3.jpg'


class RecentProject extends Component{
    render()
    {
        return(
            <Fragment>
                <Container>
                    <h1 className="RecentProjectTitle text-center">OUR RECNT PROJECT</h1>
                    <Row>
                        <Col lg={4} md={6} sm={12}>
                        <div className="RecentProjectCard card text-center">
                            <img   className="card-img-top" src={recentProject1}/>
                            <div className="card-body">
                            <h2 className="RecentProjectName">E-Commerce</h2>
                            <p className="servicDescription" >Complete e-commerce app solution for selling fruit online. According to build quality, data loading speed this is the best one </p>
                            <button type="button" class="btn btn-primary"><a class="link-style" href="">Details</a></button>
                            </div>
                        </div>
                        </Col>

                        <Col lg={4} md={6} sm={12}>
                        <div className="RecentProjectCard card text-center ">
                            <img className="card-img-top" src={recentProject2}/>
                            <div className="card-body">
                            <h2 className="RecentProjectName">Blog Site</h2>
                            <p className="servicDescription">Complete e-commerce app solution for selling fruit online. According to build quality, data loading speed this is the best one </p>
                            <button type="button" class="btn btn-primary"><a class="link-style" href="">Details</a></button>
                            </div>
                        </div>
                        </Col>

                        <Col lg={4} md={6} sm={12}>
                        <div className="RecentProjectCard card text-center">
                            <img  className="card-img-top" src={recentProject3}/>
                            <div className="card-body">
                            <h2 className="RecentProjectName">We Track</h2>
                            <p className="servicDescription">Complete e-commerce app solution for selling fruit online. According to build quality, data loading speed this is the best one </p>
                            <button type="button" class="btn btn-primary"><a class="link-style" href="">Details</a></button>
                            </div>
                        </div>
                        </Col>
                    </Row>

                </Container>
            </Fragment>
        );
    }
}
export default RecentProject;