import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

function Home() {
  const promotions = [
    {
      id: 1,
      title: 'Vanilla dream',
      description: 'Kuszący aromat wanilii, który przeniesie Cię w świat ciepłych, przytulnych chwil. Idealny wybór na wieczorne spotkania lub relaksujące popołudnia.',
      image: 'https://www.glantier.com/3525-home_default/perfumy-glantier-782-orientalno-przyprawowe.jpg',
    },
    {
      id: 2,
      title: 'Citrus Breeze',
      description: 'Świeży powiew cytrusów połączony z nutami rześkiej bryzy. Zapach, który dodaje energii i orzeźwia, świetny na co dzień i do pracy.',
      image: 'https://www.hi-lashes.pl/userdata/public/gfx/1676/311465798_480616817418319_269961894851368922_n.jpg',
    },
    {
      id: 3,
      title: 'Mystic oud',
      description: 'Tajemnicze i intensywne nuty oudu wzbogacone szczyptą egzotycznych przypraw. Dla osób, które cenią elegancję i wyrafinowanie.',
      image: 'https://cdn.notinoimg.com/detail_main_lq/dior/3348901486385_13/dior-sauvage-perfumy-napelnialny-dla-mezczyzn___240923.jpg',
    },
  ];

  return (
    <>
    
        <div className="bg-dark text-white p-4" style={{minHeight: '100vh'}}>
            <Container className="mt-4">
                <h1 className="text-center mb-3 display-3">Perfumat</h1>
                <p className="text-center mb-4">Odkryj nasze promocje na najlepsze zapachy! <br/> Daj się oczarować unikalnym aromatom, które obudzą Twoje zmysły.</p>
                <Row>
                    {promotions.map((promo) => (
                    <Col key={promo.id} md={4} className="mb-4">
                        <Card>
                        <Card.Img variant="top" src={promo.image} alt={promo.title} />
                        <Card.Body className="text-center">
                            <Card.Title>{promo.title}</Card.Title>
                            <Card.Text>{promo.description}</Card.Text>
                            <Button href={promo.link} variant="primary">
                                Zobacz więcej
                            </Button>
                        </Card.Body>
                        </Card>
                    </Col>
                    ))}
                </Row>
            </Container>
        </div>
    </>
    
  );
}

export default Home;