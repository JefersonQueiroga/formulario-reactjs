import { useState } from 'react'
import CampoTexto from './CampoTexto'
import Aluno from './Aluno'
import './FormularioAluno.css'

function FormularioAluno() {
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [cpf, setCpf] = useState('')
  const [cidade, setCidade] = useState('')

  const [alunos, setAlunos] = useState([])

  function handleSubmit(evento) {
    evento.preventDefault()

    const novoAluno = { nome, email, cpf, cidade }
    setAlunos([...alunos, novoAluno])

    setNome('')
    setEmail('')
    setCpf('')
    setCidade('')
  }

  return (
    <section className="formulario-aluno">
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

      <div className="formulario-aluno-lista">
        <h2>Alunos cadastrados</h2>

        {alunos.length === 0 && <p>Nenhum aluno cadastrado ainda.</p>}

        <ul>
          {alunos.map((aluno) => (
            <Aluno key={aluno.cpf} aluno={aluno} />
          ))}
        </ul>
      </div>
    </section>
  )
}

export default FormularioAluno
