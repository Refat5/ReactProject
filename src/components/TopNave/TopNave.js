import React,{Component, Fragment,} from 'react';
import '../../asset/css/custom.css'
import'../../asset/css/bootstrap.min.css'
import {Nav, NavDropdown,Navbar} from "react-bootstrap";
import afterScroll from '../../asset/images/afterScroll.png'
import beforeScroll from '../../asset/images/beforeScroll.png'


class TopNave extends Component {
    constructor(){
        super();
        this.state={
            naveBarTitel:"navTitle",
            navBarLogo:[afterScroll],
            navBack:"navBackground",
            navItem:"navItem"
        }
    }
    onScroll=()=>{
        if(window.scrollY>100){
            this.setState({
                naveBarTitel:'navTitleScroll',
                navBack:'navBackgroundScroll',
                navBarLogo:[beforeScroll],
                navItem:'navItemScroll'
            })
          
        }
        else if (window.scrollY<100){
            this.setState({
             naveBarTitel:'navTitle',
             navBack:'navBackground',
             navBarLogo:[afterScroll],
             navItem:'navItem'
            })
        }
    }

    componentDidMount(){
        window.addEventListener('scroll',this.onScroll)
    }


  render(){
      return (
          <Fragment>
             <Navbar fixed="top" className={this.state.navBack} collapseOnSelect expand="lg"  variant="dark">
  <Navbar.Brand className={this.state.naveBarTitel} href="#home"><img className="navImg" src={this.state.navBarLogo}/>Abdur Rahim</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
    
    </Nav>
    <Nav >
      <Nav.Link className={this.state.navItem} href="#deets">HOME</Nav.Link>
      <Nav.Link className={this.state.navItem} href="#deets">SERVICES</Nav.Link>
      <Nav.Link className={this.state.navItem} href="#deets">COURSES</Nav.Link>
      <Nav.Link className={this.state.navItem} href="#deets">PORFOLIO</Nav.Link>
      <Nav.Link className={this.state.navItem} href="#deets">CONTSCT</Nav.Link>
      <Nav.Link className={this.state.navItem} href="#deets">ABOUT</Nav.Link>

     
    </Nav>
  </Navbar.Collapse>
</Navbar>
         </Fragment>
      );
  }
} 

export default TopNave;

