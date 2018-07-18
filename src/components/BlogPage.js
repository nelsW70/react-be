import React from 'react';
import { Container, Row, Col, Card, Mask, View } from 'mdbreact';

const BlogPage = () =>  {
  return(
    <Container id="about">
      <Row>
        <Col md="12">
          <Card reverse>
            <View hover waves>
              <img src="img/bio1.jpg" className="img-fluid" alt="glacier"/>
              <Mask overlay="white-slight" className="waves-light"/>
            </View>

          </Card>
          <Container className="mt-5">
            <p>
              For more than 25 years, the photographer Bernhard Edmaier, who initially studied geology,
              has been very deeply dedicated to photographing the surface of our planet – the forces of
              Nature which form the Earth.  His seemingly abstract aerial images, in which high quality
              photography and science unite, have caused international sensation and have been received
              with great excitement by international audiences.
            </p>
            <p>
              Bernhard Edmaier’s magnificent aerial images won him a renowned Kodak Photo Book Prize in 1998.
              In 2001 he received the Hasselblad Master Award.His art photography is firmly rooted in geology.
              It is his aim to present the manifold colours, forms and structures which the Earth has created
              without man’s interference. In order to achieve this aim, Bernhard Edmaier uses aerial photography
              as his medium.
            </p>
            <p>
              Driven by his perennial interest in natural phenomena, Bernhard Edmaier travels extensively to deserted
              and still untouched corners of the globe to gather material for his books and other photographic projects.
              On his trips, he is accompanied by Angelika Jung-Huettl, PhD. - his partner, fellow geologist and science
              writer for prominent German newspapers and popular science magazines, who in close co-operation with the
              photographer, works on book projects and provides scientific commentaries for his photo book editions.
            </p>
          </Container>
        </Col>
      </Row>
    </Container>
  );
}
export default BlogPage;
