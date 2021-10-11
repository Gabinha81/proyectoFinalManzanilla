import React, {useState, useEffect} from 'react';
import ItemList from '../itemList/ItemList';
import { useParams } from 'react-router-dom';
import { firestore } from '../../firebase';

const ItemListContainer = () => {

    const [list, setList] = useState([]);
    const {categoryProducto} = useParams();

    useEffect(() => {
        const db = firestore;
        let itemCollection;
        if (categoryProducto){
            itemCollection = db.collection("productos").where("category", "==", categoryProducto)
        } else{
            itemCollection = db.collection("productos")
        }
        
        const itemCollectionQuery = itemCollection.get()

        itemCollectionQuery.then((querySnapshot) => {
            setList(querySnapshot.docs.map(doc => ({...doc.data(), id: doc.id})))
        })
        .catch((e) => {console.log(e)})
        
    },[categoryProducto]) 

    
    return(
        <section>
            <ItemList list={list} />
        </section>
        
    )
}

export default ItemListContainer;