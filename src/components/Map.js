import React from 'react';
import { Container } from 'react-bootstrap';

function Map() {
  return (
    <div className="bg-dark text-white p-4" style={{minHeight: '100vh'}}>
      <Container className="mt-4">
      <h1 className="text-center mb-5 display-3">Perfumat</h1>

        <h2 className='mb-4 text-center'>Lokalizacje automatów  </h2>
        <div className="embed-responsive embed-responsive-16by9">
        <iframe
        title="Map"
        className="embed-responsive-item"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2442.024842527919!2d21.006724815788877!3d52.22967557975785!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471ecc669cc936d7%3A0x1c1d1bc5f2b5e78b!2sWarszawa!5e0!3m2!1spl!2spl!4v1619425879282!5m2!1spl!2spl"
        style={{ border: 0, width: '100%', height: '550px' }}
        allowFullScreen=""
        loading="lazy"
        >
        </iframe>
        </div>
      </Container>
    </div>
  );
}

export default Map;
