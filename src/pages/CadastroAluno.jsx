import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import CampoTexto from '../components/CampoTexto'
import api from '../services/api'
import './CadastroAluno.css'

function CadastroAluno() {
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [cpf, setCpf] = useState('')
  const [cidade, setCidade] = useState('')

  const navigate = useNavigate()

  async function handleSubmit(evento) {
    evento.preventDefault()

    await api.post('/alunos', { nome, email, cpf, cidade })

    navigate('/alunos')
  }

  return (
    <section className="cadastro-aluno">
      <h1>Cadastro de Aluno</h1>

      <form onSubmit={handleSubmit}>
        <CampoTexto
          label="Nome completo"
          name="nome"
          value={nome}
          onChange={(evento) => setNome(evento.target.value)}
          placeholder="Ex: Maria da Silva"
        />

        <CampoTexto
          label="E-mail"
          name="email"
          type="email"
          value={email}
          onChange={(evento) => setEmail(evento.target.value)}
          placeholder="Ex: maria@email.com"
        />

        <CampoTexto
          label="CPF"
          name="cpf"
          value={cpf}
          onChange={(evento) => setCpf(evento.target.value)}
          placeholder="000.000.000-00"
        />

        <CampoTexto
          label="Cidade"
          name="cidade"
          value={cidade}
          onChange={(evento) => setCidade(evento.target.value)}
          placeholder="Ex: Natal"
        />

        <button type="submit">Cadastrar</button>
      </form>
    </section>
  )
}

export default CadastroAluno
