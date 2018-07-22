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
      loading: true,
      collapsed: false,
      isWideEnough: false,
    };
    this.handleTogglerClick = this.handleTogglerClick.bind(this);
    this.handleNavbarClick = this.handleNavbarClick.bind(this);
  }

  componentDidMount() {
    setTimeout(() => this.setState({ loading: false }), 1500); // simulates an async action, and hides the spinner
  }

  handleTogglerClick(){
    this.setState({
    collapsed: !this.state.collapsed,
    });
  }

  handleNavbarClick(){
    this.setState({
    collapsed: false
    });
  }

  render() {
    const { loading } = this.state;
    if(loading) { // if your component doesn't have to wait for an async action, remove this block
      return null; // render null when app is not ready
    }

    return (

      <div className="main-content" id="home">
        <Navbar light expand="md" fixed="top">
          <Scrollchor to="home" className="navBrand pr-3">Bernhard Edmaier</Scrollchor>
          { !this.state.isWideEnough && <NavbarToggler onClick={ this.handleTogglerClick } />}
          <Collapse isOpen={ this.state.collapsed } navbar>
            <NavbarNav left>
              <NavItem onClick={this.handleNavbarClick}>
                <Scrollchor to="gallery-one" animate={{offset: 0}} className="nav-link">Gallery One</Scrollchor>
              </NavItem>
              <NavItem onClick={this.handleNavbarClick}>
                <Scrollchor to="books" animate={{offset: -20}} className="nav-link">Books</Scrollchor>
              </NavItem>
              <NavItem onClick={this.handleNavbarClick}>
                <Scrollchor to="gallery-two" animate={{offset: -65}} className="nav-link">Gallery Two</Scrollchor>
              </NavItem>
              <NavItem onClick={this.handleNavbarClick}>
                <Scrollchor to="press" animate={{offset: -65}} className="nav-link">Press</Scrollchor>
              </NavItem>
              <NavItem onClick={this.handleNavbarClick}>
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
