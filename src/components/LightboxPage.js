import React from 'react';
import { Container, Row, Col } from 'mdbreact';
import Lightbox from 'react-image-lightbox';
require ('../css/Lightbox.css');

const images = [
  'img/Badlands_USA_aerial-crop.jpg',
  'img/Farben_Lenadelta01_Sibiria_aerial-crop.jpg',
  'img/Farben_Thjorsa_Iceland_aerial-crop.jpg',
  'img/Muster_KarlingerKees_Austria_aerial-crop.jpg',
  'img/Roebuck_Bay_02_Australien_aerial-crop.jpg',
  'img/Silvaplanasee_Schweiz_aerial-crop.jpg',
  'img/Wu__sten_Atacama01_Chile_aerial-crop.jpg',
  'img/Tollense_Deutschland_aerial-crop.jpg',
  'img/Skeidararsander_03_Island_aerial-crop.jpg'
];

const smallImages = [
  'img/Badlands_USA_aerial-crop.jpg',
  'img/Farben_Lenadelta01_Sibiria_aerial-crop.jpg',
  'img/Farben_Thjorsa_Iceland_aerial-crop.jpg',
  'img/Muster_KarlingerKees_Austria_aerial-crop.jpg',
  'img/Roebuck_Bay_02_Australien_aerial-crop.jpg',
  'img/Silvaplanasee_Schweiz_aerial-crop.jpg',
  'img/Wu__sten_Atacama01_Chile_aerial-crop.jpg',
  'img/Tollense_Deutschland_aerial-crop.jpg',
  'img/Skeidararsander_03_Island_aerial-crop.jpg'
];

class LightboxPage extends React.Component  {
  constructor(props) {
    super(props);

    this.state = {
      photoIndex: 0,
      isOpen: false,
    };
  }

  render() {
    const { photoIndex, isOpen } = this.state;
    return(
      <Container id="gallery-two" className="mt-5">
        <div className="mdb-lightbox-ui">
          <Row>
            {smallImages.map((image, index) => {
              return (<Col md="4" key={index}>
                <figure>
                  <img src={image} alt="Gallery" className="img-fluid" onClick={() => this.setState({ photoIndex: index, isOpen: true })} />
                </figure>
              </Col>)
            })}
          </Row>
        </div>
        {isOpen && (
          <Lightbox
            mainSrc={images[photoIndex]}
            nextSrc={images[(photoIndex + 1) % images.length]}
            prevSrc={images[(photoIndex + images.length - 1) % images.length]}
            imageTitle={photoIndex + 1 + '/' + images.length}
            onCloseRequest={() => this.setState({ isOpen: false })}
            onMovePrevRequest={() =>
              this.setState({
                photoIndex: (photoIndex + images.length - 1) % images.length,
              })
            }
            onMoveNextRequest={() =>
              this.setState({
                photoIndex: (photoIndex + 1) % images.length,
              })
            }
          />
        )}
      </Container>
    );
  }
}

export default LightboxPage;
