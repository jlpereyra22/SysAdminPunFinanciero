import { Table, Button } from 'react-bootstrap'

function ClientesTable() {
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
          <th>Nombre</th>
          <th>Dirección</th>
          <th>DNI</th>
          <th>Contacto</th>
          <th>Mail</th>
          <th>Créditos</th>
          <th>Editar</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td className="text-center">1</td>
          <td>Juan Pérez</td>
          <td>Av. Mitre 123</td>
          <td>30.123.456</td>
          <td>3815551234</td>
          <td>juan@mail.com</td>
          <td className="text-center">
            <Button size="sm" variant="outline-info">
              Ver créditos
            </Button>
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
          <td>San Martín 456</td>
          <td>27.987.654</td>
          <td>3815559876</td>
          <td>maria@mail.com</td>
          <td className="text-center">
            <Button size="sm" variant="outline-info">
              Ver créditos
            </Button>
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

export default ClientesTable
