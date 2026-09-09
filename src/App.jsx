import { Link, Route, Routes } from 'react-router-dom'
import CadastroAluno from './pages/CadastroAluno'
import ListaAlunos from './pages/ListaAlunos'
import './App.css'

function App() {
  return (
    <>
      <nav className="menu">
        <Link to="/">Cadastrar aluno</Link>
        <Link to="/alunos">Ver alunos</Link>
      </nav>

      <Routes>
        <Route path="/" element={<CadastroAluno />} />
        <Route path="/alunos" element={<ListaAlunos />} />
      </Routes>
    </>
  )
}

export default App
