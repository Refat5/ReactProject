import React,{ Component, Fragment } from 'react';
import {Container,Row,Col} from 'react-bootstrap';


class PageTop extends Component{
    render(){
        return(
            <Fragment>
                 <Container fluid={true} className="topPageBanner p-0">
                  <div className="topPageOverlay">
                      <Container className="topContent">
                          <Row>
                              <Col className="text-center">
                             
        <h4 className="pageTitle">{this.props.pageTitle}</h4>
                              
                              </Col>
                          </Row>
                      </Container>
                  </div>

              </Container>

            </Fragment>

        );
    }

}
export default PageTop;