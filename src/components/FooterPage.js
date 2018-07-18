import React from 'react';
import { Container, Footer } from 'mdbreact';

class FooterPage extends React.Component {
  render(){
    return(
      <div>
        <Footer color="unique-color-dark" className="page-footer font-small pt-0">
          <div className="d-flex align-items-center footer-copyright text-center py-3">
            <Container fluid>
                &copy; {(new Date().getFullYear())} Copyright: <a href="https://www.bernhard-edmaier.de/"> bernhard-edmaier.de </a>
            </Container>
          </div>
        </Footer>
      </div>
    );
  }
}

export default FooterPage;
