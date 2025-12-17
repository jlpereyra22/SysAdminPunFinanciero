import { Card } from 'react-bootstrap'

function StatCard({ title, value }) {
  return (
    <Card
      bg="dark"
      text="light"
      className="h-100 text-center border border-info"
    >
      <Card.Body className="d-flex flex-column justify-content-center">
        <Card.Title className="fs-6 text-uppercase text-info">
          {title}
        </Card.Title>
        <Card.Text className="fs-2 fw-bold mt-2 text-light">
          {value}
        </Card.Text>
      </Card.Body>
    </Card>
  )
}

export default StatCard

