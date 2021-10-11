import ItemListContainer from '../ItemListContainer/ItemListContainer';
import ItemDetailContainer from '../ItemDetailContainer/ItemDetailContainer';
import {Switch, Route} from "react-router-dom";
import Home from '../Home/Home';
import Nosotros from '../Nosotros/Nosotros';
import Cart from '../Cart/Cart';

const Main = () => {

    return(
        <main>
            <Switch>

                <Route path="/" exact>
                    <Home />
                </Route>

                <Route path="/nosotros">
                    <Nosotros />
                </Route>

                <Route path="/category/:categoryProducto?">
                    <ItemListContainer />
                </Route>

                <Route exact path = "/item/:productoId">
                    <ItemDetailContainer />
                 </Route>
                
                <Route path="/cart">
                    <Cart />
                </Route>

            </Switch>

        </main>
    )
}


export default Main;
