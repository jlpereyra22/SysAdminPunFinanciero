import { useState } from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'

import FinancistasTable from '../components/table/financistas/FinancistasTable'
import AgregarFinancista from '../components/forms/AgregarFinancista'

function Financistas() {
  const [showAgregar, setShowAgregar] = useState(false)

  return (
    <Container className="py-4">
      {/* TÍTULO + BOTÓN */}
      <Row className="align-items-center mb-3">
        <Col>
          <h2>Financistas</h2>
        </Col>
        <Col className="text-end">
          <Button
            variant="outline-info"
            onClick={() => setShowAgregar(true)}
          >
            Agregar financista
          </Button>
        </Col>
      </Row>

      <hr />

      {/* TABLA */}
      <FinancistasTable />

      {/* MODAL */}
      <AgregarFinancista
        show={showAgregar}
        onHide={() => setShowAgregar(false)}
      />
    </Container>
  )
}

export default Financistas
