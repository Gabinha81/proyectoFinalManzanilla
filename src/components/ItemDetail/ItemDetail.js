import React, { useState } from 'react';
import ItemCount from "../ItemCount/ItemCount";
import { Link } from 'react-router-dom';
import useCartContext from '../../Context/CartContext';
import './itemdetail.css';

const ItemDetail = ({item}) => {
    const stocks = item.stock
    const initial = 1
    const [add, setAdd] = useState(false)
    const [quantity, setQuantity] = useState(1)
    const { addItem } = useCartContext()
    

    const itemQuantity = (contador) => {
        setQuantity(contador)
    }

    const addToCart = () => {
        addItem(item, quantity)
        setAdd(true)
    }

    return (
        
        
        <div className="producto-detalle">
            <div className="img-detalle">
                <img src={item.pictureUrl} alt={item.id}/>
                <div className="info-detalle">
                <h3>{item.title}</h3>
                <p className="description">{item.description}</p>
                <p className="price">{item.price}</p>
                <ItemCount stocks={stocks}
                    initial={initial}
                    onAdd={itemQuantity}
                />
                <button className="btn" onClick={addToCart}>Agregar al Carrito</button>
                {add ? <Link to= {'/cart'}><button className="btn">Comprar Ahora</button></Link> : null}
            </div>
            </div>
            
        </div>
       
    )
}

export default ItemDetail;