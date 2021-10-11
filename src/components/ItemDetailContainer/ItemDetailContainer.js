import React, {useState, useEffect} from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import {useParams} from "react-router-dom";
import { firestore } from '../../firebase';

const ItemDetailContainer = () => {
    const [loading, setLoading] = useState(false);
    const [item, setItem] = useState([]);
    const {productoId} = useParams();
    
    useEffect(() =>{
        
        const db = firestore
        const getItem = db.collection("productos").doc(productoId)

        getItem.get().then((querySnapshot) => {
            setItem({id:querySnapshot.id, ...querySnapshot.data()})
            setLoading(false) 
        })
        .catch((e) => {console.log(e)})

    }, [productoId])

    
    return(
        <>
        
        {loading ? "Cargando Información..." : <ItemDetail item={item} />}

        </>     
    )   
}
export default ItemDetailContainer;