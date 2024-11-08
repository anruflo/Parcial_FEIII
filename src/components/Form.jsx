import FormStyle from '../styles/Form.module.css'
import { useState } from "react";
import Card from "./Card";

const Form = () => {
    const [user, setUser] = useState({
        name: '',
        password: '',
    });
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);
    const handleSubmit = (e) => {
        e.preventDefault();

        if (user.name.trim().length > 3 && user.password.trim().length > 6) {
            setError(false);
            setLoading(true);
            return;
        } else {
            setError(true);}
    }
  return (
    <div>
        <h1>Bienvenido</h1>
        
        {loading ? (<Card user={user}/>) : 
        (
        <form  className={FormStyle.form} onSubmit={handleSubmit}>
            <h4>Por favor ingrese sus datos</h4>
            <label>Nombre de usuario:</label>
            <input type="text" value={user.name} onChange={(e) => setUser({...user, name: e.target.value})}></input>
            <label>Contraseña:</label>
            <input type="password" value={user.password} onChange={(e) => setUser({...user, password: e.target.value})}></input>
            <button>Ingresar</button>
            {error ? (<p style={{color: 'red'}}>Por favor chequea que la información sea correcta</p>) : null}
        </form>
        )}
    </div>
  )
}

export default Form