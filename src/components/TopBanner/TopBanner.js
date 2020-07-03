import React,{Component, Fragment,} from 'react';
import '../../asset/css/custom.css'
import'../../asset/css/bootstrap.min.css'
import {Container, Row, Button,Col} from "react-bootstrap";

class TopBanner extends Component {
  render(){
      return (
          <Fragment>
              <Container fluid={true} className="topFixedBanner p-0">
                  <div className="topBannerOverlay">
                      <Container className="topContent">
                          <Row>
                              <Col className="text-center">
                              <h1 className="topTitle">Web Developer</h1>
                              <h4 className="topSubTitle">Abdur Rahim Refat</h4>
                              <Button variant="warning">More Info</Button>{' '}
                              </Col>
                          </Row>
                      </Container>
                  </div>

              </Container>

         </Fragment>
      );
  }
} 

export default TopBanner;

