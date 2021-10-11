import {createContext, useState, useContext} from 'react';

const CartContext = createContext()
const useCartContext = () => useContext(CartContext)

const { Provider } = CartContext;

export const CustomProvider = ({children}) =>{

    const [products, setProducts] = useState([])
    const [isInCart, setIsInCart] = useState(false)

    const addItem = (item, quantity) => {
        const inCartList = products.find((i) => i.id === item.id)
        setIsInCart(true)
        if(inCartList){
            inCartList.quantity += quantity
            setProducts([...products])
        } else {
            setProducts([...products, {...item, quantity}])
        }
    }

    const removeItem = (id) => {
        products.splice(
            products.findIndex((i) => i.id === id), 1
        )
        setProducts([...products])
        if(products.length === 0){
            setIsInCart(false)
        }
    }

    const totalProductos = () => {
        return products.reduce((add, i) => (add += i.price * i.quantity), 0)
    }

    const WidgetContador = () => {
        return products.reduce((add,i) => (add += i.quantity), 0)
    }

    const clean = () => {
        setProducts([])
    }

    const contexto = {
        products, addItem, removeItem, clean, totalProductos, isInCart, WidgetContador 
    }

     
    return(

        <Provider value = {contexto}>
        {children}
        </Provider>
   
    )

}
export default useCartContext;
