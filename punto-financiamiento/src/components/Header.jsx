import { Navbar, Nav, Button } from 'react-bootstrap'

function Header({ setView, onLoginClick }) {
  return (
    <Navbar bg="dark" variant="dark" className="px-4">
      <Navbar.Brand
        style={{ cursor: 'pointer' }}
        onClick={() => setView('home')}
      >
        PUNTO FINANCIERO
      </Navbar.Brand>

      {/* empuja el botón a la derecha */}
      <Nav className="ms-auto">
        <Button
          variant="outline-info"
          size="sm"
          onClick={onLoginClick}
        >
          Login
        </Button>
      </Nav>
    </Navbar>
  )
}

export default Header
