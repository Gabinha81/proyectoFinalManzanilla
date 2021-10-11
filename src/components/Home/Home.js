import React from "react";
import ItemListContainer from '../ItemListContainer/ItemListContainer';
import './home.css';



const Home= () => {
    return(<>
        <div className='home'>
        <h2>¡Bienvenido a nuestra tienda online!</h2>
        <span>¡Estamos sumando nuevos productos, sino encontras algo escribinos!</span>
        </div>
        <section className="homeDos">
            <ItemListContainer/>  
        </section>
        
       </>
    )
    
}
export default Home;