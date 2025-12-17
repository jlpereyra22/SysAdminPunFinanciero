import { Card } from 'react-bootstrap'

function StatCardSmall({ title, value }) {
  return (
    <Card
      bg="dark"
      text="light"
      className="text-center border border-info"
    >
      <Card.Body>
        <Card.Title className="fs-6 text-info">
          {title}
        </Card.Title>
        <Card.Text className="fs-5 fw-semibold text-light">
          {value}
        </Card.Text>
      </Card.Body>
    </Card>
  )
}

export default StatCardSmall
