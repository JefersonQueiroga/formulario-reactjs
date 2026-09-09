import { useEffect, useState } from 'react'
import Aluno from '../components/Aluno'
import api from '../services/api'
import './ListaAlunos.css'

function ListaAlunos() {
  const [alunos, setAlunos] = useState([])

  useEffect(() => {
    api.get('/alunos').then((resposta) => setAlunos(resposta.data))
  }, [])

  return (
    <section className="lista-alunos">
      <h1>Alunos cadastrados</h1>

      {alunos.length === 0 && <p>Nenhum aluno cadastrado ainda.</p>}

      <ul>
        {alunos.map((aluno) => (
          <Aluno key={aluno.id} aluno={aluno} />
        ))}
      </ul>
    </section>
  )
}

export default ListaAlunos
