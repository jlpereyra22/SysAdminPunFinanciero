import { Row, Col } from 'react-bootstrap'
import StatCardSmall from './StatCardSmall'

function DashboardFinancistas() {
  return (
    <>
      <h5 className="text-secondary mb-3">
        Dinero liberado por financista
      </h5>

      <Row className="g-3">
        <Col md={4}>
          <StatCardSmall
            title="Financista A"
            value="$ 40.000.000"
          />
        </Col>

        <Col md={4}>
          <StatCardSmall
            title="Financista B"
            value="$ 30.000.000"
          />
        </Col>

        <Col md={4}>
          <StatCardSmall
            title="Financista C"
            value="$ 25.000.000"
          />
        </Col>
      </Row>
    </>
  )
}

export default DashboardFinancistas
