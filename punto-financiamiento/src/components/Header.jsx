import { Navbar, Nav } from 'react-bootstrap'

function Header({ setView }) {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="px-4">
      <Navbar.Brand
        style={{ cursor: 'pointer' }}
        onClick={() => setView('home')}
      >
        PUNTO FINANCIERO
      </Navbar.Brand>

      <Navbar.Toggle />
      <Navbar.Collapse>
        <Nav className="ms-auto">
          <Nav.Link onClick={() => setView('home')}>Inicio</Nav.Link>
          <Nav.Link onClick={() => setView('creditos')}>Créditos</Nav.Link>
          <Nav.Link>Contacto</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default Header
