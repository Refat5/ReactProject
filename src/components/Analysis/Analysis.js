import React,{Component,Fragment} from 'react';
import { Container,Row,Col} from 'react-bootstrap';
import {
    BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
  } from 'recharts';


class Analysis extends Component{
    constructor(){
        super();
        this.state={
            data:[
                {
                  name: 'HTML', project: 1, experience: 6, knowledge: 60,
                },
                {
                  name: 'CSS', project: 5, experience: 6, knowledge: 70,
                },
                {
                  name: 'PHP', project: 1, experience: 6, knowledge: 50,
                },
                {
                  name: 'JAVA', project: 0, experience: 6, knowledge: 30,
                },
                {
                  name: 'LARAVEL', project: 1, experience: 6, knowledge: 50,
                },
                {
                  name: 'REACT', project: 1, experience: 6, knowledge: 30,
                },
                {
                  name: 'MY SQL', project: 0, experience: 6, knowledge: 30,
                }
              ]
              

        }
    }


    render()
    {
        return(
            <Fragment>
                <Container className="text-center">
                <h1 className="serviceMainTitle">Technolgy Used</h1>
                <Row>
                    <Col lg={6} md={12} sm={12}>
                                    <BarChart
                        width={500}
                        height={300}
                        data={this.state.data}
                        margin={{
                        top: 20, right: 30, left: 20, bottom: 5,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="experience" stackId="a" fill="#FF0000" />
                        <Bar dataKey="knowledge" stackId="a" fill="#0a1133" />
                        <Bar dataKey="project" fill="#FFFF00" />
                    </BarChart>

                    </Col>

                    <Col lg={6} md={12} sm={12} >
                    <p className="text-justify Tdes">
                       Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book.
                    </p>
                    </Col>
                </Row>
                </Container>
            </Fragment>
        );
    }
}
export default Analysis;




