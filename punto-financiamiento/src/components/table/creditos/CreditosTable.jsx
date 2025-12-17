import { Table, Button } from 'react-bootstrap'

function CreditosTable() {
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
          <th>ID</th>
          <th>Cliente</th>
          <th>Monto Crédito</th>
          <th>Monto Financiado</th>
          <th>Monto por cuota</th>
          <th>Cant. Cuotas</th>
          <th>Estado</th>
          <th>Financista</th>
          <th>Fecha entrega</th>
          <th>Comercio</th>
          <th>Editar</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td className="text-center">1</td>
          <td>Juan Pérez</td>
          <td>$1.000.000</td>
          <td>$1.300.000</td>
          <td>$433.333</td>
          <td className="text-center">3</td>
          <td className="text-center">Activo</td>
          <td className="text-center">Financista A</td>
          <td className="text-center">12/09/2025</td>
          <td className="text-center">
           enartech
          </td>
          <td className="text-center">
            <Button size="sm" variant="outline-light">
              ✏️
            </Button>
          </td>
        </tr>

        <tr>
          <td className="text-center">2</td>
          <td>María Gómez</td>
          <td>$800.000</td>
          <td>$1.200.000</td>
          <td>$200.000</td>
          <td className="text-center">6</td>
          <td className="text-center">En mora</td>
          <td className="text-center">Financista B</td>
          <td className="text-center">01/08/2025</td>
          <td className="text-center">
            pepito pistola
          
          </td>
          <td className="text-center">
            <Button size="sm" variant="outline-light">
              ✏️
            </Button>
          </td>
        </tr>
      </tbody>
    </Table>
  )
}

export default CreditosTable
