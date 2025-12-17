import { useState } from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import CreditosTable from '../components/table/creditos/CreditosTable'
import AgregarCredito from '../components/forms/AgregarCredito'

function Creditos() {
  const [showAgregar, setShowAgregar] = useState(false)

  return (
    <Container className="py-4">
      {/* TÍTULO + BOTÓN */}
      <Row className="align-items-center mb-3">
        <Col>
          <h2>Créditos</h2>
        </Col>
        <Col className="text-end">
          <Button
            variant="primary"
            onClick={() => setShowAgregar(true)}
          >
            Agregar crédito
          </Button>
        </Col>
      </Row>

      <hr />

      {/* TABLA */}
      <CreditosTable />

      {/* MODAL AGREGAR CRÉDITO */}
      <AgregarCredito
        show={showAgregar}
        onHide={() => setShowAgregar(false)}
      />
    </Container>
  )
}

export default Creditos
