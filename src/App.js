import React, { Component } from 'react';
import { Navbar, NavbarToggler, Collapse, NavbarNav, NavItem } from 'mdbreact';
import Scrollchor from 'react-scrollchor';
import LightboxPage from './components/LightboxPage';
import BlogPage from './components/BlogPage';
import FooterPage from './components/FooterPage';
import ProjectsPage from './components/ProjectsPage';
import TestimonialsMultiPage from './components/TestimonialsMultiPage';
import ThumbnailsCarouselPage from './components/ThumbnailsCarousel';
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/mdb.css';
import './css/Carousel.css';
import 'react-image-lightbox/style.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapse: false,
      isWideEnough: false,
      dropdownOpen: false
    };
    this.onClick = this.onClick.bind(this);
    this.toggle = this.toggle.bind(this);
  }

  onClick(){
    this.setState({
    collapse: !this.state.collapse,
    });
  }

  toggle() {
    this.setState({
    dropdownOpen: !this.state.dropdownOpen
    });
  }

  render() {
    return (

      <div className="main-content" id="home">
        <Navbar light expand="md" fixed="top">
          <Scrollchor to="home" className="navBrand pr-3">Bernhard Edmaier</Scrollchor>
          { !this.state.isWideEnough && <NavbarToggler onClick = { this.onClick } />}
          <Collapse isOpen = { this.state.collapse } navbar>
            <NavbarNav left>
              <NavItem>
                <Scrollchor to="gallery-one" animate={{offset: 0}} className="nav-link">Gallery One</Scrollchor>
              </NavItem>
              <NavItem>
                <Scrollchor to="books" animate={{offset: -20}} className="nav-link">Books</Scrollchor>
              </NavItem>
              <NavItem>
                <Scrollchor to="gallery-two" animate={{offset: -65}} className="nav-link">Gallery Two</Scrollchor>
              </NavItem>
              <NavItem>
                <Scrollchor to="press" animate={{offset: -65}} className="nav-link">Press</Scrollchor>
              </NavItem>
              <NavItem>
                <Scrollchor to="about" animate={{offset: -75}} className="nav-link">About</Scrollchor>
              </NavItem>
            </NavbarNav>
          </Collapse>
        </Navbar>
        <ThumbnailsCarouselPage></ThumbnailsCarouselPage>
        <ProjectsPage></ProjectsPage>
        <LightboxPage></LightboxPage>
        <TestimonialsMultiPage></TestimonialsMultiPage>
        <BlogPage></BlogPage>
        <FooterPage></FooterPage>
      </div>
    );
  }
}

export default App;
