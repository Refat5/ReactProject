import React,{Component, Fragment,} from 'react';
import '../../asset/css/custom.css'
import'../../asset/css/bootstrap.min.css'
import {Nav, NavDropdown,Navbar} from "react-bootstrap";
import afterScroll from '../../asset/images/afterScroll.png'
import beforeScroll from '../../asset/images/beforeScroll.png'
import {NavLink} from "react-router-dom";


class TopNave extends Component {
    constructor(props){
        super();
        this.state={
            naveBarTitel:"navTitle",
            navBarLogo:[afterScroll],
            navBack:"navBackground",
            navVariant:"dark",
            navItem:"navItem",
            pageTitle:props.title
        }
    }
    onScroll=()=>{
        if(window.scrollY>100){
            this.setState({
                navVariant:'light',
                naveBarTitel:'navTitleScroll',
                navBack:'navBackgroundScroll',
                navBarLogo:[beforeScroll],
                navItem:'navItemScroll'
            })
          
        }
        else if (window.scrollY<100){
            this.setState({
             navVariant:'dark',
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
              <title>{this.state.pageTitle}</title>
  <Navbar fixed="top" variant={this.state.navVariant} className={this.state.navBack} collapseOnSelect expand="lg"  >
  <Navbar.Brand className={this.state.naveBarTitel} href="#home"><img className="navImg" src={this.state.navBarLogo}/>Abdur Rahim</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
    
    </Nav>
    <Nav >

       <Nav.Link>  <NavLink className={this.state.navItem} to="/">HOME</NavLink>  </Nav.Link>
       <Nav.Link> <NavLink className={this.state.navItem} to="service">SERVICES</NavLink> </Nav.Link>  
       <Nav.Link> <NavLink className={this.state.navItem} to="course">COURSES</NavLink> </Nav.Link> 
       <Nav.Link> <NavLink className={this.state.navItem} to="portfolio">PORFOLIO</NavLink> </Nav.Link> 
       <Nav.Link> <NavLink className={this.state.navItem} to="contact">CONTSCT</NavLink> </Nav.Link> 
       <Nav.Link> <NavLink className={this.state.navItem} to="about">ABOUT</NavLink> </Nav.Link> 

     
    </Nav>
  </Navbar.Collapse>
</Navbar>
         </Fragment>
      );
  }
} 

export default TopNave;

