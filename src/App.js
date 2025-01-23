import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Container, Navbar, Nav } from 'react-bootstrap';
import Home from './components/Home';
import CreateComposition from './components/CreateComposition';
import Map from './components/Map';
import Loyalty from './components/Loyalty';
import UserCompositions from './components/UserCompositions';

function App() {
  return (
    <Router>
      <div style={{ paddingBottom: '56px' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<CreateComposition />} />
          <Route path="/map" element={<Map />} />
          <Route path="/loyalty" element={<Loyalty />} />
          <Route path="/user-compositions" element={<UserCompositions />} />
        </Routes>
      </div>
      <Navbar bg="dark" variant="dark" fixed="bottom" className="justify-content-around">
        <Nav>
          <Nav.Link href="/" className="text-center">
            <i className="bi bi-house-fill" style={{ fontSize: '1.5rem' }}></i>
            <div style={{ fontSize: '0.75rem' }}>Home</div>
          </Nav.Link>
          <Nav.Link href="/create" className="text-center">
            <i className="bi bi-plus-circle-fill" style={{ fontSize: '1.5rem' }}></i>
            <div style={{ fontSize: '0.75rem' }}>Utwórz kompozycję</div>
          </Nav.Link>
          <Nav.Link href="/map" className="text-center">
            <i className="bi bi-geo-alt-fill" style={{ fontSize: '1.5rem' }}></i>
            <div style={{ fontSize: '0.75rem' }}>Mapa</div>
          </Nav.Link>
          <Nav.Link href="/loyalty" className="text-center">
            <i className="bi bi-gift-fill" style={{ fontSize: '1.5rem' }}></i>
            <div style={{ fontSize: '0.75rem' }}>Nagrody</div>
          </Nav.Link>
          <Nav.Link href="/user-compositions" className="text-center">
            <i className="bi bi-person-fill" style={{ fontSize: '1.5rem' }}></i>
            <div style={{ fontSize: '0.75rem' }}>Twoje kompozycje</div>
          </Nav.Link>
        </Nav>
      </Navbar>
    </Router>
  );
}

export default App;