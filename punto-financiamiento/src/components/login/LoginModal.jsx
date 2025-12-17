import { Modal } from 'react-bootstrap'
import LoginForm from './LoginForm'

function LoginModal({ show, onHide }) {
  return (
    <Modal
      show={show}
      onHide={onHide}
      centered
      backdrop="static"
    >
      <Modal.Header closeButton className="bg-dark text-light">
        <Modal.Title>Iniciar sesión</Modal.Title>
      </Modal.Header>

      <Modal.Body className="bg-dark text-light">
        <LoginForm onSubmit={() => console.log('login submit')} />
      </Modal.Body>
    </Modal>
  )
}

export default LoginModal
