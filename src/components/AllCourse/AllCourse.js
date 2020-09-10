import React,{ Component, Fragment } from 'react';

import {Container,Row,Col} from 'react-bootstrap';
import mobile from '../../asset/images/ad.jpg'
import web from '../../asset/images/web.jpg'
import graphic from '../../asset/images/gp.jpg'
import normal from '../../asset/images/background.jpg'


class AllCourse extends Component{
    render(){
        return(
            <Fragment>
            <Container className="mt-5">
                
                <Row>
                <div class="p-2 col-lg-6 col-md-12 col-sm-12">
                    <div class="p-3 row">
                        <div class="p-2 col-lg-6 col-md-6 col-sm-12">
                            <img class="courseImg" src={mobile}/>
                        </div>
                                <div class="p-2 col-lg-6 col-md-6 col-sm-12">
                                    <h5 class="text-justify courseTitle">Mobile Development</h5>
                                    <p class="text-justify courseDes">I build native and cross platfrom mobile app for your business app for your business</p>
                                    <a class="courseDetails float-left" href="">Details</a>
                        </div>
                    </div>
                 </div>
                 
                 <div class="p-2 col-lg-6 col-md-12 col-sm-12">
                    <div class="p-3 row">
                        <div class="p-2 col-lg-6 col-md-6 col-sm-12">
                            <img class="courseImg" src={web}/>
                        </div>
                                <div class="p-2 col-lg-6 col-md-6 col-sm-12">
                                    <h5 class="text-justify courseTitle">Web Development</h5>
                                    <p class="text-justify courseDes">I build native and cross platfrom mobile app for your business app for your business</p>
                                    <a class="courseDetails float-left" href="">Details</a>
                        </div>
                    </div>
                 </div>

                   
                 <div class="p-2 col-lg-6 col-md-12 col-sm-12">
                    <div class="p-3 row">
                        <div class="p-2 col-lg-6 col-md-6 col-sm-12">
                            <img class="courseImg" src={graphic}/>
                        </div>
                                <div class="p-2 col-lg-6 col-md-6 col-sm-12">
                                    <h5 class="text-justify courseTitle">Graphic</h5>
                                    <p class="text-justify courseDes">I build native and cross platfrom mobile app for your business app for your business</p>
                                    <a class="courseDetails float-left" href="">Details</a>
                        </div>
                    </div>
                 </div>
                   
                 <div class="p-2 col-lg-6 col-md-12 col-sm-12">
                    <div class="p-3 row">
                        <div class="p-2 col-lg-6 col-md-6 col-sm-12">
                            <img class="courseImg" src={normal}/>
                        </div>
                                <div class="p-2 col-lg-6 col-md-6 col-sm-12">
                                    <h5 class="text-justify courseTitle">Web Development</h5>
                                    <p class="text-justify courseDes">I build native and cross platfrom mobile app for your business app for your business</p>
                                    <a class="courseDetails float-left" href="">Details</a>
                        </div>
                    </div>
                 </div>
                </Row>

          
            </Container>
        </Fragment>
        );
    }

}
export default AllCourse;