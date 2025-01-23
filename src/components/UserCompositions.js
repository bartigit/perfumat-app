import React from 'react';
import { Container, ListGroup, Button } from 'react-bootstrap';

function UserCompositions() {
  const compositions = [
    { id: 1, title: 'Kompozycja 1', createdAt: '17 marca' },
    { id: 2, title: 'Kompozycja 2', createdAt: '12 lutego' },
  ];

  return (
    <div className="bg-dark text-white p-4" style={{minHeight: '100vh'}}>
      <Container className="mt-4">
      <h1 className="text-center mb-5 display-3">Perfumat</h1>

        <h2 className='mb-4 text-center'>Twoje kompozycje</h2>
        <ListGroup>
          {compositions.map((composition) => (
            <ListGroup.Item key={composition.id} className="d-flex justify-content-between">
              <div>
                <h5 className='mt-2'>{composition.title}</h5>
                <p>Utworzono: {composition.createdAt}</p>
              </div>
              <Button variant="primary" size="s" className="mt-2 p-3" onClick={() => alert(`Sharing ${composition.title}`)}>
                Udostępnij
              </Button>

            </ListGroup.Item>
          ))}
        </ListGroup>
      </Container>
    </div>
  );
}

export default UserCompositions;
