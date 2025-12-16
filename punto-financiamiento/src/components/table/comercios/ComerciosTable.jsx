import { Table, Button, Modal } from 'react-bootstrap'
import { useState } from 'react'
import { useComerciosData } from './useComerciosData'

function ComerciosTable() {
  const data = useComerciosData()
  const [show, setShow] = useState(false)

  return (
    <>
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>Comercio</th>
            <th>Rubro</th>
            <th>Nombre</th>
            <th>Dirección</th>
            <th>Contacto</th>
            <th>Mail</th>
            <th>Créditos</th>
            <th>Clientes</th>
            <th>Comisionista</th>
            <th>Interés</th>
          </tr>
        </thead>
        <tbody>
          {data.map(c => (
            <tr key={c.id}>
              <td>{c.comercio}</td>
              <td>{c.rubro}</td>
              <td>{c.nombre}</td>
              <td>{c.direccion}</td>
              <td>{c.contacto}</td>
              <td>{c.mail}</td>
              <td>
                <Button size="sm" variant="outline-info">
                  Créditos
                </Button>
              </td>
              <td>
                <Button size="sm" variant="outline-warning">
                  Clientes
                </Button>
              </td>
              <td>{c.comisionista}</td>
              <td>
                <Button
                  size="sm"
                  variant="outline-success"
                  onClick={() => setShow(true)}
                >
                  Ver
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      {/* MODAL DE INTERÉS */}
      <Modal show={show} onHide={() => setShow(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Intereses del comercio</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p><strong>3 cuotas:</strong> 30% de interés</p>
          <p><strong>6 cuotas:</strong> 50% de interés</p>
        </Modal.Body>
      </Modal>
    </>
  )
}

export default ComerciosTable
