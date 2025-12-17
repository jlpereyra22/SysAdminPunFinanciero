import { Modal, Button, Form, Row, Col } from 'react-bootstrap'

function AgregarCredito({ show, onHide }) {
  return (
    <Modal show={show} onHide={onHide} centered backdrop="static" size="lg">
      <Modal.Header closeButton className="bg-dark text-light">
        <Modal.Title>Agregar Crédito</Modal.Title>
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
                <Form.Label>Cliente</Form.Label>
                <Form.Control type="text" placeholder="Seleccionar cliente" />
              </Form.Group>
            </Col>
          </Row>

          <Row>
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Monto crédito</Form.Label>
                <Form.Control type="number" />
              </Form.Group>
            </Col>

            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Monto financiado</Form.Label>
                <Form.Control type="number" />
              </Form.Group>
            </Col>
          </Row>

          <Row>
            <Col md={4}>
              <Form.Group className="mb-3">
                <Form.Label>Cantidad de cuotas</Form.Label>
                <Form.Select>
                  <option value="">Seleccionar</option>
                  <option value="3">3 cuotas</option>
                  <option value="6">6 cuotas</option>
                </Form.Select>
              </Form.Group>
            </Col>

            <Col md={4}>
              <Form.Group className="mb-3">
                <Form.Label>Interés (%)</Form.Label>
                <Form.Control
                  type="number"
                  disabled
                  placeholder="Se calcula automáticamente"
                />
              </Form.Group>
            </Col>

            <Col md={4}>
              <Form.Group className="mb-3">
                <Form.Label>Fecha de otorgamiento</Form.Label>
                <Form.Control type="date" />
              </Form.Group>
            </Col>
          </Row>

          <Form.Group className="mb-3">
            <Form.Label>Comercio</Form.Label>
            <Form.Control type="text" placeholder="Seleccionar comercio" />
          </Form.Group>

          <div className="text-muted mt-2" style={{ fontSize: '0.85rem' }}>
            * El interés se asigna automáticamente según el comercio y la cantidad de cuotas
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

export default AgregarCredito
