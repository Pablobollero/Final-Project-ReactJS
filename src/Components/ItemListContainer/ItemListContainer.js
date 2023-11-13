import { useState, useEffect } from "react";
import ItemList from "../ItemList/ItemList";

import { useParams } from "react-router-dom";

import { getDocs, collection, query, where } from 'firebase/firestore';
import { db } from '../Firebase/Firebase';

const ItemListContainer = ({title}) => {
    const [product, setProduct] = useState([])
    const [loading, setLoading] = useState(true)
    
    const { categoryId } = useParams()

    useEffect(() => {
        setLoading(true)

        const collectionRef = categoryId
            ? query(collection(db, 'ItemCollection'), where('category', '==', categoryId))
            : collection(db, 'ItemCollection')
        
        getDocs(collectionRef)
            .then(response => {
                const productsAdapted = response.docs.map(doc => {
                    const data = doc.data()
                    return { id: doc.id, ...data }
                })
                setProduct(productsAdapted)
            })
            .catch(error => {
                console.log(error)
            })
            .finally(() => {
                setLoading(false)
            })
    }, [categoryId])

    return (
        <div>
            <h1>{title}</h1>
            {loading ? <p>Cargando...</p> : <ItemList products={product}/>}
        </div>
    )
}

export default ItemListContainer;