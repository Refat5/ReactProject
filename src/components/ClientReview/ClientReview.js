import React, {Component,Fragment} from 'react';
import "slick-carousel/slick/slick.css";
import { Container,Row,Col } from 'react-bootstrap';
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import profile from '../../asset/images/profile.png'
class ClientReview extends Component {
    render(){
        var settings = {
            autoplaySpeed:2000,
            autoplay:true,
            dots: true,
            infinite: false,
            speed: 2000,
            slidesToShow: 1,
            slidesToScroll: 1,
            vertical:true,
            verticalSwiping:true,
            responsive: [
              {
                breakpoint: 1024,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  infinite: true,
                  dots: true
                }
              },
              {
                breakpoint: 600,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  initialSlide: 1
                }
              },
              {
                breakpoint: 480,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1
                }
              }
            ]
          };

        return(
            <Fragment>
              <Container className="text-center">
              <h1 className="serviceMainTitle">CLIENT REVIEW</h1>
                <Slider {...settings}>
                  <div>
                      <Row className="text-center justify-content-center">
                        <Col lg={6} md={6} sm={12}>
                          <img className="circleImag" src={profile}/>
                           <h2 className="serviceName">Web Developer</h2>
                           <p className="servicDescription" >I design and develop static and dynamic I am not  Final testing take place after finishing coding part. After successful implementation i provide 6 month free bug fixing service for corresponding project.a good developer but i try to be a good developer </p>

                        </Col>
                      </Row>
                  </div>
                  <div>
                      <Row className="text-center justify-content-center">
                        <Col lg={6} md={6} sm={12}>
                          <img className="circleImag" src={profile}/>
                           <h2 className="serviceName">Web Developer</h2>
                           <p className="servicDescription" >I design and develop static and dynamic I am not  Final testing take place after finishing coding part. After successful implementation i provide 6 month free bug fixing service for corresponding project.a good developer but i try to be a good developer </p>

                        </Col>
                      </Row>
                  </div>    <div>
                          <Row className="text-center justify-content-center">
                            <Col lg={6} md={6} sm={12}>
                              <img className="circleImag" src={profile}/>
                               <h2 className="serviceName">Web Developer</h2>
                               <p className="servicDescription" >I design and develop static and dynamic I am not  Final testing take place after finishing coding part. After successful implementation i provide 6 month free bug fixing service for corresponding project.a good developer but i try to be a good developer </p>

                            </Col>
                          </Row>
                      </div>
                </Slider>
              </Container>

            </Fragment>

        );
    }

}


export default  ClientReview;
