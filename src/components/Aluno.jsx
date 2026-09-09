// Componente que recebe um aluno via props e mostra os dados dele.
function Aluno({ aluno }) {
  return (
    <li className="aluno">
      <strong>{aluno.nome}</strong> — {aluno.email} — {aluno.cpf} —{' '}
      {aluno.cidade}
    </li>
  )
}

export default Aluno
