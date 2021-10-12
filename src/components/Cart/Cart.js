import React, { useState } from 'react';
import useCartContext from '../../Context/CartContext';
import { Link } from 'react-router-dom';
import firebase from "firebase/app";
import "firebase/firestore";
import { firestore } from '../../firebase';
import Formulario from '../Formulario/Formulario'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import './cart.css';


const Cart = () => {
    const {products, removeItem, totalProductos, clean} = useCartContext()
    const [orderId, setOrderId] = useState("")
    const [showForm, setShowForm] = useState(false)
    const [confirmation, setConfirmation] = useState(false)
    
    const handleRemove = (i) => {
        removeItem(i.id)
    }
    
    const handleFinalize = () =>{
        setShowForm(true)
    }

    const createOrder = (buyer) =>{
        const db = firestore
        const orders = db.collection('order')
        
        const newOrder = {

            products,
            buyer,
            date: firebase.firestore.Timestamp.fromDate(new Date()),
            total: totalProductos()
        }
        
        orders.add(newOrder).then(({id}) => {
                setOrderId(id)
                setConfirmation(true)
                
            }
        ).catch((e) => {console.log(e)})

        const Itemscollection = db.collection("productos")
        const batch = firestore.batch()

        products.forEach( p => {
            batch.update(Itemscollection.doc(p.id),{stock:p.stock - p.quantity})
        })
        batch.commit()
            .then(()=>{
                    clean()
            })
            .catch(err=>console.log(err))
        
    }

    
    if(products.length === 0 && orderId === ""){
        return (
            <div className="cart">
                <div className="headingCart">
                    <h3>...No hay productos agregados al Carrito...</h3>
                    <Link to="/" exact>
                        <button className = "continue">Continuar Comprando</button>
                    </Link>
                </div>
                
            </div>
        )
    }else if(orderId && confirmation){
        return(
            <div className="cart">
                <div className="headingCart">
                    <h3>Su Orden No. <span className="validation">{orderId}</span> ha sido confirmada</h3>
                    <Link to="/" exact>
                        <button className = "continue">CONTINUAR COMPRANDO</button>
                    </Link>
                </div>
            </div>
        )
    }
        
    return(
        <section className="cart">
            <div className="headingCart">
                <h2>Carrito de Compras</h2>
                
                <Link to="/" exact>
                    <button className = "continue">CONTINUAR COMPRANDO</button>
                </Link>
            </div>
            <div className="shopping-cart">
                
                {products.map((item) => (
                    <div className="product">
                        <div className="productImage">
                            <img src={item.pictureUrl} alt={item.id}/>
                        </div>
                        <div className="productDetalle">
                            <h3>{item.title}</h3>
                            <div className="productRemoval">
                                <button class="remove-product" onClick={()=>handleRemove(item)}> 
                                    <FontAwesomeIcon icon={faTrashAlt} />
                                </button>
                            </div>
                        </div> 
                        <div className="productPrecio">
                            <label htmlFor="price">PRECIO </label>
                            <span className="price"> ${item.price}</span>
                        </div>
                        <div className="productQuantity">
                            <label htmlFor="quantity">CANTIDAD </label>
                            <span className="quantity">{item.quantity}</span>
                        </div>
                        <div className="columnaPrice">
                            <label htmlFor="total">TOTAL </label>
                            <span className="total"> ${item.quantity*item.price}</span>
                        </div>
                    </div>
                    )
                )}

            </div>
            <div className="totales" >
                    <div class="totales-item">
                        <label>Subtotal:</label>
                        <div class="totales-value">{totalProductos()}</div>
                    </div>
                    <div class="totales-item">
                        <label>Costo de envío:</label>
                        <div class="totales-value">1000</div>
                    </div>
                    <div class="totales-item sumaTotal">
                        <label>Total:</label>
                        <div class="totales-value sumaTotal">{totalProductos() + 1000}</div>
                    </div>
                    <div className="totales-item">
                        <button className ="checkout" onClick={handleFinalize}>INICIAR COMPRA</button>
                    </div>
                    
            </div>
            {showForm ? <Formulario createOrder={createOrder}/> : null}
        </section>

    )
}
export default Cart;