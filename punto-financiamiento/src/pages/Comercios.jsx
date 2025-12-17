import { useState } from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import ComerciosTable from '../components/table/comercios/ComerciosTable'
import AgregarComercio from '../components/forms/AgregarComercio'

function Comercios() {
  const [showAgregar, setShowAgregar] = useState(false)

  return (
    <Container className="py-4">
      {/* TÍTULO + BOTÓN */}
      <Row className="align-items-center mb-3">
        <Col>
          <h2>Comercios adheridos</h2>
        </Col>
        <Col className="text-end">
          <Button
            variant="primary"
            onClick={() => setShowAgregar(true)}
          >
            Agregar comercio
          </Button>
        </Col>
      </Row>

      <hr />

      {/* TABLA */}
      <ComerciosTable />

      {/* MODAL AGREGAR COMERCIO */}
      <AgregarComercio
        show={showAgregar}
        onHide={() => setShowAgregar(false)}
      />
    </Container>
  )
}

export default Comercios
