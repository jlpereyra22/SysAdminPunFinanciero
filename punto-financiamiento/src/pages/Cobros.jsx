import { useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import CobrosTable from '../components/table/cobros/CobrosTable'
import RegistrarPago from '../components/forms/RegistrarPago'

function Cobros() {
  const [showPago, setShowPago] = useState(false)

  return (
    <Container className="py-4">
      <Row className="mb-3">
        <Col>
          <h2>Cobros / Vencimientos</h2>
        </Col>
      </Row>

      <hr />

      <CobrosTable onPagar={() => setShowPago(true)} />

      <RegistrarPago
        show={showPago}
        onHide={() => setShowPago(false)}
      />
    </Container>
  )
}

export default Cobros
