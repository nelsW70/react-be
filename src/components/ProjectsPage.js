import React, { Component } from 'react';
import { Container, Row, Col, View, Mask, CardBody, Button } from 'mdbreact';

class ProjectsPage extends Component {
  render() {
    return(
      <Container id="books" className="pt-1">

        <section className="text-center my-5">
          <Row className="text-center project-images">
            <Col lg="4" md="4" sm="4" className="mb-lg-0 mb-4">
              <View className="overlay rounded z-depth-1" waves>
                <img src="img/EarthART_Cover.jpg" alt="book cover" className="img-fluid"/>
                <a>
                  <Mask overlay="white-slight"/>
                </a>
              </View>
              <CardBody className="pb-0">
                <h4 className="font-weight-bold my-3">Earth Art</h4>
                <p>Inspired by colour analyses created by world famous
                natural science scholars such as Isaak Newton or Johann
                Wolfgang von Goethe, Bernhard Edmaier presents a very
                exceptional view of the earth and its amazingly colourful
                surface.</p>
                <a target='_blank'
                  rel='noopener noreferrer'
                  href="https://www.amazon.com/EarthArt-Colours-Earth-Bernhard-Edmaier/dp/0714865761">
                  <Button outline size="sm" className="rounded">Amazon</Button>
                </a>
              </CardBody>
            </Col>
            <Col lg="4" md="4" sm="4" className="mb-lg-0 mb-4">
              <View className="overlay rounded z-depth-1" waves>
                <img src="img/Wasser_Cover.jpg" alt="book cover" className="img-fluid"/>
                <a>
                  <Mask overlay="white-slight"/>
                </a>
              </View>
              <CardBody className="pb-0">
                <h4 className="font-weight-bold my-3">Water</h4>
                <p>This book of images shows water as a destructive, transporting as well as constructive
                and creative force in its many forms: liquid, vaporized in the clouds
                and frozen to ice. The aerial images have been shot on
                all of the five continents.</p>
                <a target='_blank'
                  rel='noopener noreferrer'
                  href="https://www.amazon.com/Water-Bernhard-Edmaier/dp/3791381652">
                  <Button outline size="sm" className="rounded">Amazon</Button>
                </a>
              </CardBody>
            </Col>
            <Col lg="4" md="4" sm="4" className="mb-lg-0 mb-4">
              <View className="overlay rounded z-depth-1" waves>
                <img src="img/EarthonFire_Cover.jpg" alt="book cover" className="img-fluid"/>
                <a>
                  <Mask overlay="white-slight"/>
                </a>
              </View>
              <CardBody className="pb-0">
                <h4 className="font-weight-bold my-3">Earth on Fire</h4>
                <p>In this book, Bernhard Edmaier has tackled various volcanic and plate tectonic
                phenomena such as fire-spewing volcanoes and lava streams, dark clouds of volcanic
                ash, geysers, brightyellow sulphur crusts and colourful acid lakes.</p>
                <a target='_blank'
                  rel='noopener noreferrer'
                  href="https://www.amazon.com/Earth-Fire-Volcanoes-Shape-Planet/dp/0714857009">
                  <Button outline size="sm" className="rounded">Amazon</Button>
                </a>
              </CardBody>
            </Col>
          </Row>
        </section>

      </Container>
    );
  }
}

export default ProjectsPage;
