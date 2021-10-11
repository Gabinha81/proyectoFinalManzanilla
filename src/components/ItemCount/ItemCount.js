import React, {useState} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { faMinus } from '@fortawesome/free-solid-svg-icons';
import './itemCount.css';

const ItemCount = ({stocks,  initial, onAdd}) =>{
    const [contador, setContador] = useState(initial)
       
    const increase = () => { 
        if(contador < stocks){
            setContador(contador + 1)
            
        }
        
    }

    const decrease = () => { 
        if(contador > initial){
            setContador(contador - 1)
        }
    }

    onAdd(contador)

    return(
        <div className="card-contador">
            <h5>Cantidad:</h5>
            <div className="grid">
              <button className="column product-subtract" onClick={decrease} disabled={contador === initial} ><FontAwesomeIcon icon={faMinus} /></button>
              <div className="column product-qty">{contador}</div>
              <button className="column product-plus" onClick={increase} disabled={contador === stocks} ><FontAwesomeIcon icon={faPlus} /></button>
            </div>
            <p>Unidades Disponibles: {stocks - contador}</p>
        </div>
    )
}
export default ItemCount;