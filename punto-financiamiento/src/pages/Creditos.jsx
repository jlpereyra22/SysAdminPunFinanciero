import { Container, Row, Col, Button } from 'react-bootstrap'
import CreditosTable from '../components/table/creditos/CreditosTable'


function Creditos() {
  return (
    <Container className="py-4">
      {/* TÍTULO + BOTÓN */}
      <Row className="align-items-center mb-3">
        <Col>
          <h2>Créditos</h2>
        </Col>
        <Col className="text-end">
          <Button variant="primary">
            Agregar crédito
          </Button>
        </Col>
      </Row>

     
      <hr />

      
      <CreditosTable />
    </Container>
  )
}

export default Creditos
