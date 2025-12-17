import { Form, Button } from 'react-bootstrap'

function LoginForm({ onSubmit }) {
  return (
    <Form>
      <Form.Group className="mb-3">
        <Form.Label>Usuario</Form.Label>
        <Form.Control
          type="text"
          placeholder="Ingresá tu usuario"
        />
      </Form.Group>

      <Form.Group className="mb-4">
        <Form.Label>Contraseña</Form.Label>
        <Form.Control
          type="password"
          placeholder="Ingresá tu contraseña"
        />
      </Form.Group>

      <div className="d-grid">
        <Button
          variant="outline-info"
          onClick={onSubmit}
        >
          Ingresar
        </Button>
      </div>
    </Form>
  )
}

export default LoginForm
