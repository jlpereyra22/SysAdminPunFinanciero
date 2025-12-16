import { Container, Row, Col, Button } from 'react-bootstrap'

import FinancistasTable from '../components/financistas/FinancistasTable'

function Financistas() {
  return (
    <Container className="py-4">
      {/* TÍTULO + BOTÓN */}
      <Row className="align-items-center mb-3">
        <Col>
          <h2>Financistas</h2>
        </Col>
        <Col className="text-end">
          <Button variant="outline-info">
            Agregar financista
          </Button>
        </Col>
      </Row>

      {/* SEPARADOR */}
      <hr />

      {/* TABLA (la armamos después) */}
      /<FinancistasTable /> 
    </Container>
  )
}

export default Financistas
