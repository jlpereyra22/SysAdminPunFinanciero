import { Container, Button } from 'react-bootstrap'

function Home({ setView }) {
  return (
    <Container className="py-5 d-flex justify-content-center">
      <div className="d-grid gap-3 w-50">
       <Button
          size="lg"
          variant="outline-info"
          onClick={() => setView('clientes')}
        >
          CLIENTES
        </Button>

        <Button
          size="lg"
          variant="outline-info"
          onClick={() => setView('comercios')}
        >
          COMERCIOS ADHERIDOS
        </Button>

        <Button
          size="lg"
          variant="outline-info"
          onClick={() => setView('creditos')}
        >
          CRÉDITOS
        </Button>

        <Button
          size="lg"
          variant="outline-info"
          onClick={() => setView('cobros')}
        >
          COBROS / VENCIMIENTOS
        </Button>

        <Button
          size="lg"
          variant="outline-info"
          onClick={() => setView('financistas')}
        >
          FINANCISTAS
        </Button>

      </div>
    </Container>
  )
}

export default Home
