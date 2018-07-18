import React, { Component } from 'react';
import { Carousel, CarouselControl, CarouselInner, CarouselItem, CarouselIndicators, CarouselIndicator, Container, Row, Col, Fa } from 'mdbreact';
import Testimonial from './Testimonial';

class TestimonialsMultiPage extends Component {
  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.prev = this.prev.bind(this);
    this.state = {
      activeItem: 1,
      length: 3,
      slide: true
    };
  }

  next() {
    let nextItem = this.state.activeItem + 1;
    if(nextItem > this.state.length) {
      this.setState({ activeItem: 1 });
    } else {
      this.setState({ activeItem: nextItem });
    }
  }

  prev() {
    let prevItem = this.state.activeItem - 1;
    if(prevItem < 1) {
      this.setState({ activeItem: this.state.length });
    } else {
      this.setState({ activeItem: prevItem });
    }
  }

  goToIndex(item) {
    if (this.state.activeItem !== item) {
      this.setState({
        activeItem: item
      });
    }
  }



  render(){
    const { activeItem } = this.state;
    return(
      <Container id="press">
        <section className="text-center mt-5 mb-4">

          <Row className="press-quotes">
            <Carousel
              testimonial
              multiItem
              slide={this.state.slide}
              activeItem={this.state.activeItem}
              next={this.next}>
              <div className="controls-top">
                <CarouselControl iconLeft className="btn-floating light-blue darken-4" direction="prev" role="button" onClick={() => { this.prev(); }} />
                <CarouselControl iconRight className="btn-floating light-blue darken-4" direction="next" role="button" onClick={() => { this.next(); }} />
              </div>
              <CarouselIndicators>
                <CarouselIndicator className="light-blue darken-4" active={activeItem === 1 ? true : false} onClick={() => { this.goToIndex(1); }}></CarouselIndicator>
                <CarouselIndicator className="light-blue darken-4" active={activeItem === 2 ? true : false} onClick={() => { this.goToIndex(2); }}></CarouselIndicator>
                <CarouselIndicator className="light-blue darken-4" active={activeItem === 3 ? true : false} onClick={() => { this.goToIndex(3); }}></CarouselIndicator>
              </CarouselIndicators>
              <CarouselInner>
                <Row>
                  <CarouselItem itemId="1">
                    <Col md="4">
                      <Testimonial>
                        <h4 className="font-weight-bold">New York Times</h4>
                        <p className="font-weight-normal"><Fa icon="quote-left" className="pr-2"></Fa>
                          Oversize is the right way to see these landscapes
                        </p>
                      </Testimonial>
                    </Col>
                    <Col md="4" className="clearfix d-none d-md-block">
                      <Testimonial>
                        <h4 className="font-weight-bold">Geo Paris</h4>
                        <p className="font-weight-normal"><Fa icon="quote-left" className="pr-2"></Fa>
                          The print of time on the skin of the earth. Splendid.
                        </p>
                      </Testimonial>
                    </Col>
                    <Col md="4" className="clearfix d-none d-md-block">
                      <Testimonial>
                        <h4 className="font-weight-bold">Kulturweltspiegel</h4>
                        <p className="font-weight-normal"><Fa icon="quote-left" className="pr-2"></Fa>
                          They are like a hymn to the beauty of nature
                        </p>
                      </Testimonial>
                    </Col>
                  </CarouselItem>
                  <CarouselItem itemId="2">
                    <Col md="4">
                      <Testimonial>
                        <h4 className="font-weight-bold">Frankfurter Zeitung</h4>
                        <p className="font-weight-normal"><Fa icon="quote-left" className="pr-2"></Fa>
                          rivers of colour gush and contours rupture
                        </p>
                      </Testimonial>
                    </Col>
                    <Col md="4" className="clearfix d-none d-md-block">
                      <Testimonial>
                        <h4 className="font-weight-bold">Foto Magazin</h4>
                        <p className="font-weight-normal"><Fa icon="quote-left" className="pr-2"></Fa>
                          Geology becomes a special field of art history
                        </p>
                      </Testimonial>
                    </Col>
                    <Col md="4" className="clearfix d-none d-md-block">
                      <Testimonial>
                        <h4 className="font-weight-bold">Robert Kennedy Jr.</h4>
                        <p className="font-weight-normal"><Fa icon="quote-left" className="pr-2"></Fa>
                          a new perspective to natural landscapes
                        </p>
                      </Testimonial>
                    </Col>
                  </CarouselItem>
                  <CarouselItem itemId="3">
                    <Col md="4">
                      <Testimonial>
                        <h4 className="font-weight-bold">Der Spiegel</h4>
                        <p className="font-weight-normal"><Fa icon="quote-left" className="pr-2"></Fa>
                          He shows the Earth as it has been creating itself
                        </p>
                      </Testimonial>
                    </Col>
                    <Col md="4" className="clearfix d-none d-md-block">
                      <Testimonial>
                        <h4 className="font-weight-bold">NHM</h4>
                        <p className="font-weight-normal"><Fa icon="quote-left" className="pr-2"></Fa>
                          raises the art of aerial photography to new heights
                        </p>
                      </Testimonial>
                    </Col>
                    <Col md="4" className="clearfix d-none d-md-block">
                      <Testimonial>
                        <h4 className="font-weight-bold">Natur & Cosmos</h4>
                        <p className="font-weight-normal"><Fa icon="quote-left" className="pr-2"></Fa>
                         aesthetically perfect images
                        </p>
                      </Testimonial>
                    </Col>
                  </CarouselItem>
                </Row>
              </CarouselInner>
            </Carousel>
          </Row>
        </section>
      </Container>
    );
  }
}

export default TestimonialsMultiPage;
