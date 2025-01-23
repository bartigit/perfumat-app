import React from 'react';
import { Container, Button } from 'react-bootstrap';

function Loyalty() {
  return (
    <div className="bg-dark text-white p-4" style={{ minHeight: '100vh' }}>
      <Container className="mt-4 text-center">
        <h1 className="text-center mb-5 display-3">Perfumat</h1>
        <h3 className='mb-4'>Punkty za zakupy</h3>

        <div
          style={{
            border: '5px solid white',
            borderRadius: '10px',
            padding: '10px',
            display: 'inline-block',
            backgroundColor: 'white',
          }}
        >
          <img
            src="https://cdn-kmcol.nitrocdn.com/xcUNXNuLyTBLsehjJygWozGCdXbzHfZq/assets/images/optimized/rev-9bb4948/rockfordsystems.com/wp-content/uploads/2023/11/qr-code-RS-product-manuals.png"
            alt="QR Code"
            style={{ maxWidth: '130px', height: 'auto', display: 'block', margin: '0 auto' }}
          />
        </div>
        <p className="mt-3" style={{ fontSize: '1.2rem' }}>
          Zeskanuj poniższy kod QR w automacie, aby zbierać punkty za zakupy.
        </p>

        <div className="mt-5">
          <h3 className='mb-4'>Zaproś znajomego</h3>
          <p style={{ fontSize: '1.1rem' }}>
            Podziel się z innymi możliwością dołączenia do programu lojalnościowego Perfumat!
          </p>
          <Button
            variant="primary"
            onClick={console.log('xD')}
            style={{ fontSize: '1rem', padding: '10px 20px' }}
          >
            Udostępnij
          </Button>
        </div>
      </Container>
    </div>
  );
}

export default Loyalty;