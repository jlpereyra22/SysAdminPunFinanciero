import { Container, Row, Col, Button } from 'react-bootstrap'
import CobrosTable from '../components/table/cobros/CobrosTable'

function Cobros() {
  return (
    <Container className="py-4">

      {/* TÍTULO + BOTÓN */}
      <Row className="align-items-center mb-3">
        <Col>
          <h2>Cobros / Vencimientos</h2>
        </Col>
        <Col className="text-end">
          <Button variant="outline-info">
            Registrar cobro
          </Button>
        </Col>
      </Row>

      <hr />

      <CobrosTable />

    </Container>
  )
}

export default Cobros
