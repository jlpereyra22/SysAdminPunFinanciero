import { Modal, Button, Form, Row, Col } from 'react-bootstrap'

function AgregarComercio({ show, onHide }) {
  return (
    <Modal show={show} onHide={onHide} centered backdrop="static" size="lg">
      <Modal.Header closeButton className="bg-dark text-light">
        <Modal.Title>Agregar Comercio</Modal.Title>
      </Modal.Header>

      <Modal.Body className="bg-dark text-light">
        <Form>
          <Row>
            <Col md={4}>
              <Form.Group className="mb-3">
                <Form.Label>ID</Form.Label>
                <Form.Control type="text" />
              </Form.Group>
            </Col>

            <Col md={8}>
              <Form.Group className="mb-3">
                <Form.Label>Comercio</Form.Label>
                <Form.Control type="text" />
              </Form.Group>
            </Col>
          </Row>

          <Row>
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Rubro</Form.Label>
                <Form.Control type="text" />
              </Form.Group>
            </Col>

            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Nombre</Form.Label>
                <Form.Control type="text" />
              </Form.Group>
            </Col>
          </Row>

          <Form.Group className="mb-3">
            <Form.Label>Dirección</Form.Label>
            <Form.Control type="text" />
          </Form.Group>

          <Row>
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Contacto</Form.Label>
                <Form.Control type="text" />
              </Form.Group>
            </Col>

            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Mail</Form.Label>
                <Form.Control type="email" />
              </Form.Group>
            </Col>
          </Row>

          <Form.Group className="mb-4">
            <Form.Label>Comisionista</Form.Label>
            <Form.Control type="text" />
          </Form.Group>

          <hr />

          {/* Intereses por cuota (maquetado) */}
          <h6 className="mb-3">Interés por cuotas</h6>

          <Row className="align-items-end">
            <Col md={3}>
              <Form.Group className="mb-3">
                <Form.Label>Cuotas</Form.Label>
                <Form.Control type="number" placeholder="3" />
              </Form.Group>
            </Col>

            <Col md={3}>
              <Form.Group className="mb-3">
                <Form.Label>Interés (%)</Form.Label>
                <Form.Control type="number" placeholder="30" />
              </Form.Group>
            </Col>

            <Col md={3}>
              <Form.Group className="mb-3">
                <Form.Label>Cuotas</Form.Label>
                <Form.Control type="number" placeholder="6" />
              </Form.Group>
            </Col>

            <Col md={3}>
              <Form.Group className="mb-3">
                <Form.Label>Interés (%)</Form.Label>
                <Form.Control type="number" placeholder="50" />
              </Form.Group>
            </Col>
          </Row>

          {/* Placeholder visual */}
          <div className="text-muted mt-2" style={{ fontSize: '0.85rem' }}>
            * Más opciones de cuotas se agregarán luego
          </div>
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

export default AgregarComercio
