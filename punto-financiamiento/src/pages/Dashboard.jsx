import { Container } from 'react-bootstrap'
import DashboardStats from '../components/dashboard/DashboardStats'
import DashboardFinancistas from '../components/dashboard/DashboardFinancistas'

function Dashboard() {
  return (
    <Container className="py-4">
      <h2>Dashboard</h2>
      <hr />

      <DashboardStats />
      <DashboardFinancistas />
    </Container>
  )
}

export default Dashboard
