import { useState, useEffect } from "react";
import ItemList from "../ItemList/ItemList";
import './ItemListContainer.css';
import { useParams } from "react-router-dom";

import { getDocs, collection, query, where } from 'firebase/firestore';
import { db } from '../Firebase/Firebase';

const ItemListContainer = ({title}) => {
    const [product, setProduct] = useState([])
    const [loading, setLoading] = useState(true)
    
    const { categoryId } = useParams()

    const titleStyle = {
        fontSize: '3rem',
        fontWeight: 'bolder',
        color: 'whitesmoke',
        textAlign: 'center',
        marginTop: '10rem',
        marginBottom: '-10rem'
    };

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
        <div className="itemListContainer">
            {categoryId === 'recomendados' && <h1 style={titleStyle}>Recomendados</h1>}
            {categoryId === 'masPedido' && <h1 style={titleStyle}>Más Pedidos</h1>}
            <h1 className="title">{title}</h1>
            <div className="listaDeItems">
            {loading ? <p>Cargando...</p> : <ItemList products={product}/>}
            </div>
        </div>
    )
}

export default ItemListContainer;