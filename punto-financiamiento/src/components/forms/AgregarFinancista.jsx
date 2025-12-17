import { Modal, Button, Form } from 'react-bootstrap'

function AgregarFinancista({ show, onHide }) {
  return (
    <Modal show={show} onHide={onHide} centered backdrop="static">
      <Modal.Header closeButton className="bg-dark text-light">
        <Modal.Title>Agregar Financista</Modal.Title>
      </Modal.Header>

      <Modal.Body className="bg-dark text-light">
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Financista</Form.Label>
            <Form.Control type="text" />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Comisión (%)</Form.Label>
            <Form.Control type="number" />
          </Form.Group>
        </Form>
      </Modal.Body>

      <Modal.Footer className="bg-dark">
        <Button variant="secondary" onClick={onHide}>
          Cancelar
        </Button>
        <Button variant="primary">
          Guardar
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default AgregarFinancista
