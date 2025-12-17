import { Row, Col } from 'react-bootstrap'
import StatCard from './StatCard'

function DashboardStats() {
  return (
    <Row className="g-4 mb-4">
      <Col md={6}>
        <StatCard
          title="Total dinero liberado"
          value="$ 120.000.000"
        />
      </Col>

      <Col md={6}>
        <StatCard
          title="Total dinero financiado"
          value="$ 180.000.000"
        />
      </Col>

      <Col md={6}>
        <StatCard
          title="Reintegro por cuotas"
          value="$ 45.000.000"
        />
      </Col>

      <Col md={6}>
        <StatCard
          title="Dinero en circulación"
          value="$ 95.000.000"
        />
      </Col>
    </Row>
  )
}

export default DashboardStats
