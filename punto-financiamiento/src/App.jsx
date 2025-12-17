import { useState } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'

import Home from './pages/Home'
import Dashboard from './pages/Dashboard'
import Clientes from './pages/Clientes'
import Comercios from './pages/Comercios'
import Creditos from './pages/Creditos'
import Cobros from './pages/Cobros'
import Financistas from './pages/Financistas'

import LoginModal from './components/login/LoginModal'

function App() {
  const [view, setView] = useState('home')
  const [showLogin, setShowLogin] = useState(false)

  const renderView = () => {
    switch (view) {
      case 'dashboard':
        return <Dashboard />
      case 'clientes':
        return <Clientes />
      case 'comercios':
        return <Comercios />
      case 'creditos':
        return <Creditos />
      case 'cobros':
        return <Cobros />
      case 'financistas':
        return <Financistas />
      default:
        return <Home setView={setView} />
    }
  }

  return (
    <div className="min-vh-100 d-flex flex-column bg-dark text-light">
      <Header
        setView={setView}
        onLoginClick={() => setShowLogin(true)}
      />

      <div className="flex-grow-1">
        {renderView()}
      </div>

      <Footer />

      {/* MODAL LOGIN */}
      <LoginModal
        show={showLogin}
        onHide={() => setShowLogin(false)}
      />
    </div>
  )
}

export default App
