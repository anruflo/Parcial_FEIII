import CardStyle from '../styles/Card.module.css'
const Card = ({user}) => {
  return (
    <div className={CardStyle.card}>
      <h2>Datos ingresados:</h2>
      <h4>Nombre: {user.name}</h4>
      <h4>Contraseña: {user.password}</h4>
    </div>
  )
}

export default Card