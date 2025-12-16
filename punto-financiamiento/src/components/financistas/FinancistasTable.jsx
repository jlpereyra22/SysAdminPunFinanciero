import { Table, Button } from 'react-bootstrap'

function FinancistasTable() {
  return (
    <Table
      striped
      bordered
      hover
      variant="dark"
      responsive
      className="mt-3"
    >
      <thead>
        <tr>
          <th>Financista</th>
          <th>Créditos otorgados</th>
          <th>Comisión</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>Financista A</td>
          <td>
            <Button size="sm" variant="outline-light">
              Ver créditos
            </Button>
          </td>
          <td>5%</td>
        </tr>

        <tr>
          <td>Financista B</td>
          <td>
            <Button size="sm" variant="outline-light">
              Ver créditos
            </Button>
          </td>
          <td>7%</td>
        </tr>
      </tbody>
    </Table>
  )
}

export default FinancistasTable
