import { Table, Button } from 'react-bootstrap'

function CobrosTable() {
  return (
    <Table
      striped
      bordered
      hover
      variant="dark"
      responsive
      className="mt-3 align-middle"
    >
      <thead>
        <tr className="text-center">
          <th>Cliente</th>
          <th>Monto de cuota</th>
          <th>N° cuota</th>
          <th>Vencimiento</th>
          <th>Cartera</th>
          <th>Pagar</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>Juan Pérez</td>
          <td className="text-end">$120.000</td>
          <td className="text-center">1</td>
          <td className="text-center">15/10/2025</td>
          <td className="text-center">Financista A</td>
          <td className="text-center">
            <Button size="sm" variant="outline-info">
              Pagar
            </Button>
          </td>
        </tr>

        <tr>
          <td>María Gómez</td>
          <td className="text-end">$200.000</td>
          <td className="text-center">3</td>
          <td className="text-center">01/10/2025</td>
          <td className="text-center">Financista B</td>
          <td className="text-center">
            <Button size="sm" variant="outline-info">
              Pagar
            </Button>
          </td>
        </tr>
      </tbody>
    </Table>
  )
}

export default CobrosTable
