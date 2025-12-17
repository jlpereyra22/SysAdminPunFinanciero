import { Modal, Button, Form, Row, Col } from 'react-bootstrap'

function RegistrarPago({ show, onHide }) {
  return (
    <Modal show={show} onHide={onHide} centered backdrop="static" size="lg">
      <Modal.Header closeButton className="bg-dark text-light">
        <Modal.Title>Registrar Pago</Modal.Title>
      </Modal.Header>

      <Modal.Body className="bg-dark text-light">
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Cliente</Form.Label>
            <Form.Control type="text" disabled />
          </Form.Group>

          <Row>
            <Col md={4}>
              <Form.Group className="mb-3">
                <Form.Label>N° de cuota</Form.Label>
                <Form.Control type="text" disabled />
              </Form.Group>
            </Col>

            <Col md={8}>
              <Form.Group className="mb-3">
                <Form.Label>Monto de la cuota</Form.Label>
                <Form.Control type="number" disabled />
              </Form.Group>
            </Col>
          </Row>

          <Form.Group className="mb-3">
            <Form.Label>Recargo</Form.Label>
            <Form.Control
              type="number"
              placeholder="Solo si hay mora o retraso"
            />
          </Form.Group>

          <Row>
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Tipo de pago</Form.Label>
                <Form.Select>
                  <option value="">Seleccionar</option>
                  <option>Efectivo</option>
                  <option>Transferencia</option>
                  <option>Cuenta corriente</option>
                </Form.Select>
              </Form.Group>
            </Col>

            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Lugar de pago</Form.Label>
                <Form.Select>
                  <option value="">Seleccionar</option>
                  <option>Nexo</option>
                  <option>Movix</option>
                </Form.Select>
              </Form.Group>
            </Col>
          </Row>

          <Form.Group className="mb-3">
            <Form.Label>Saldo final a pagar</Form.Label>
            <Form.Control
              type="number"
              disabled
              placeholder="Monto cuota + recargo"
            />
          </Form.Group>

          <div className="text-muted mt-2" style={{ fontSize: '0.85rem' }}>
            * El saldo final se calculará automáticamente
          </div>
        </Form>
      </Modal.Body>

      <Modal.Footer className="bg-dark">
        <Button variant="secondary" onClick={onHide}>
          Cancelar
        </Button>
        <Button variant="success">
          Confirmar pago
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default RegistrarPago
