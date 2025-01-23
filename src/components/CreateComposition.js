import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';

function CreateComposition() {
  const [composition, setComposition] = useState('');
  const [selectedPerfume1, setSelectedPerfume1] = useState('');
  const [selectedPerfume2, setSelectedPerfume2] = useState('');

  const perfumes = [
    { id: 1, name: 'Rose Elegance' },
    { id: 2, name: 'Mystic Oud' },  
    { id: 3, name: 'Citrus Breeze' },
    { id: 4, name: 'Vanilla Dream' },
  ];

  return (
    <div className="bg-dark text-white p-4" style={{minHeight: '100vh'}}>
      <Container className="mt-4">
      <h1 className="text-center mb-4 display-3">Perfumat</h1>

        <h2 className="text-center mb-4">Stwórz własną kompozycję</h2>
        <Form onSubmit={console.log('xd')}>
          <Form.Group className="mb-3" controlId="perfume1">
            <Form.Label>Wybierz pierwszy zapach</Form.Label>
            <Form.Select
              value={selectedPerfume1}
              onChange={(e) => setSelectedPerfume1(e.target.value)}
            >
              <option value="">Wybierz zapach...</option>
              {perfumes.map((perfume) => (
                <option key={perfume.id} value={perfume.name}>
                  {perfume.name}
                </option>
              ))}
            </Form.Select>
          </Form.Group>

          <Form.Group className="mb-3" controlId="perfume2">
            <Form.Label>Wybierz drugi zapach</Form.Label>
            <Form.Select
              value={selectedPerfume2}
              onChange={(e) => setSelectedPerfume2(e.target.value)}
            >
              <option value="">Wybierz zapach...</option>
              {perfumes.map((perfume) => (
                <option key={perfume.id} value={perfume.name}>
                  {perfume.name}
                </option>
              ))}
            </Form.Select>
          </Form.Group>

          <Form.Group className="mb-3" controlId="composition">
            <Form.Label>Nadaj nazwę swojej kompozycji</Form.Label>
            <Form.Control
              as="textarea"
              rows={1}
              value={composition}
              onChange={(e) => setComposition(e.target.value)}
            />
          </Form.Group>

          <div className="d-flex justify-content-center mt-5">
            <Button variant="success" size="lg" type="submit">
              Stwórz kompozycję
            </Button>
          </div>

          <div style={{ marginTop: 'min(40px, 20vh)' }} className="d-flex justify-content-center">
            <img src="https://cdn-icons-png.flaticon.com/512/9361/9361223.png" alt="perfume bottle" width="75px" />
          </div>
        </Form>
      </Container>
    </div>
  );
}

export default CreateComposition;