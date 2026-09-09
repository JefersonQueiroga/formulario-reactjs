import './CampoTexto.css'

// Componente de input reutilizável: recebe os dados via props (label, value,
// onChange...) e não guarda estado próprio.
function CampoTexto({ label, name, ...inputProps }) {
  return (
    <div className="campo-texto">
      <label htmlFor={name}>{label}</label>
      <input id={name} name={name} {...inputProps} />
    </div>
  )
}

export default CampoTexto
