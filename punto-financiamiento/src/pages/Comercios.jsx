import { Container, Row, Col, Button } from 'react-bootstrap'
import ComerciosTable from '../components/table/comercios/ComerciosTable'

function Comercios() {
  return (
    <Container className="py-4">
      
      {/* TÍTULO + BOTÓN */}
      <Row className="align-items-center mb-3">
        <Col>
          <h2>Comercios adheridos</h2>
        </Col>
        <Col className="text-end">
          <Button variant="primary">
            Agregar comercio
          </Button>
        </Col>
      </Row>

      {/* LÍNEA SEPARADORA */}
      <hr />

      {/* TABLA */}
      <ComerciosTable />

    </Container>
  )
}

export default Comercios
