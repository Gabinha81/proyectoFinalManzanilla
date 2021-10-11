import useCartContext from '../../Context/CartContext';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBasket } from '@fortawesome/free-solid-svg-icons';
import './cartwidget.css';

const CartWidget = () => {
    const {WidgetContador} = useCartContext()
   
        return(
            <>
            
                <Link to= {'/cart'} className='cart-widget'>
                <div className="cart-icon">
                    <FontAwesomeIcon icon={faShoppingBasket} />
                    <span className="items">{WidgetContador()}</span>
                </div>
                </Link>
                
            </>
        )


}


export default CartWidget;

