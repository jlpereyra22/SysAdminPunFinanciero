import { Container, Row, Col, Button } from 'react-bootstrap'
import ClientesTable from '../components/table/clientes/ClientesTable'


function Clientes() {
  return (
    <Container className="py-4">
      {/* Título + botón */}
      <Row className="align-items-center mb-3">
        <Col>
          <h2>Lista de Clientes</h2>
        </Col>

        <Col className="text-end">
          <Button variant="primary">
            Agregar Cliente
          </Button>
        </Col>
      </Row>

      {/* Línea separadora */}
      <hr />

      {/* Tabla */}
      <ClientesTable />
    </Container>
  )
}

export default Clientes
