import { useState } from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import ClientesTable from '../components/table/clientes/ClientesTable'
import AgregarCliente from '../components/forms/AgregarCliente'

function Clientes() {
  const [showAgregar, setShowAgregar] = useState(false)

  return (
    <Container className="py-4">
      {/* Título + botón */}
      <Row className="align-items-center mb-3">
        <Col>
          <h2>Lista de Clientes</h2>
        </Col>
        <Col className="text-end">
          <Button
            variant="primary"
            onClick={() => setShowAgregar(true)}
          >
            Agregar Cliente
          </Button>
        </Col>
      </Row>

      <hr />

      {/* Tabla */}
      <ClientesTable />

      {/* Modal Agregar Cliente */}
      <AgregarCliente
        show={showAgregar}
        onHide={() => setShowAgregar(false)}
      />
    </Container>
  )
}

export default Clientes
