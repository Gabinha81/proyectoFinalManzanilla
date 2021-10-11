import React, { useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import './formulario.css';


const Formulario = ({ createOrder }) => {
    
    const [form, setForm] = useState({
        name: '',
        email: '',
        phone: '',
       // emailConfirmation: ''
    })

    const getContactData = (e) => {
        const { name, value } = e.target
        setForm((state) => {
            return { ...state, [name]: value }
        })
        
    }

    const finalizePurchase = () => {
        const { name, email, phone } = form
        createOrder({ name, email, phone })
    }
   

    return (
        <div>
            <h2 className="title">Para continuar con la compra completa el siguiente formulario</h2>
            <form  className="form">
                <div className="formInput">
                    <label><FontAwesomeIcon icon={faUser} /></label>
                    <input placeholder="Nombre y Apellido" name="name" value={form.name} onChange={getContactData} type="text"/>
                </div>
                
                <div className="formInput">
                    <label><FontAwesomeIcon icon={faPhone} /></label>
                    <input placeholder="Teléfono" name="phone" value={form.phone} onChange={getContactData} type="text"/>
                </div>  
                <div className = "formInput">
                    <label><FontAwesomeIcon icon={faEnvelope} /></label>
                    <input placeholder="Email" name="email" value={form.email} onChange={getContactData} type="email"/>
                </div>  
            </form>
            <button type="submit" className="finalize"  onClick={finalizePurchase}>FINALIZAR</button>
            
        </div>
    )
}
export default Formulario;

                
                
                