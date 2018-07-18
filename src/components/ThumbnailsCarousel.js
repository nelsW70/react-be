import React, { Component } from 'react';
import { Carousel, CarouselControl, CarouselInner, CarouselItem, CarouselIndicators, CarouselIndicator, Container } from 'mdbreact';

class ThumbnailsCarouselPage extends Component {
  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.prev = this.prev.bind(this);
    this.state = {
      activeItem: 1,
      length: 6
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
      <Container id="gallery-one" className="pt-5">
        <Carousel
          thumbnails
          activeItem={this.state.activeItem}
          next={this.next}
          className="mt-5 z-depth-1">
          <CarouselInner>
            <CarouselItem itemId="1">
              <img className="d-block w-100" src="img/image11-crop.jpg" alt="First slide" />
            </CarouselItem>
            <CarouselItem itemId="2">
              <img className="d-block w-100" src="img/image3-crop.jpg" alt="Second slide" />
            </CarouselItem>
            <CarouselItem itemId="3">
              <img className="d-block w-100" src="img/image9-crop.jpg" alt="Third slide" />
            </CarouselItem>
            <CarouselItem itemId="4">
              <img className="d-block w-100" src="img/image4-crop.jpg" alt="First slide" />
            </CarouselItem>
            <CarouselItem itemId="5">
              <img className="d-block w-100" src="img/image10-crop.jpg" alt="Second slide" />
            </CarouselItem>
            <CarouselItem itemId="6">
              <img className="d-block w-100" src="img/image6-crop.jpg" alt="Third slide" />
            </CarouselItem>
          </CarouselInner>
          <CarouselControl direction="prev" role="button" onClick={() => { this.prev(); }} />
          <CarouselControl direction="next" role="button" onClick={() => { this.next(); }} />
          <CarouselIndicators>
            <CarouselIndicator img="img/image11-crop.jpg" active={activeItem === 1 ? true : false} onClick={() => { this.goToIndex(1); }}></CarouselIndicator>
            <CarouselIndicator img="img/image3-crop.jpg" active={activeItem === 2 ? true : false} onClick={() => { this.goToIndex(2); }}></CarouselIndicator>
            <CarouselIndicator img="img/image9-crop.jpg" active={activeItem === 3 ? true : false} onClick={() => { this.goToIndex(3); }}></CarouselIndicator>
            <CarouselIndicator img="img/image4-crop.jpg" active={activeItem === 4 ? true : false} onClick={() => { this.goToIndex(4); }}></CarouselIndicator>
            <CarouselIndicator img="img/image10-crop.jpg" active={activeItem === 5 ? true : false} onClick={() => { this.goToIndex(5); }}></CarouselIndicator>
            <CarouselIndicator img="img/image6-crop.jpg" active={activeItem === 6 ? true : false} onClick={() => { this.goToIndex(6); }}></CarouselIndicator>
          </CarouselIndicators>
        </Carousel>
      </Container>
    );
  }
}

export default ThumbnailsCarouselPage;
