import { useState, useEffect } from "react";
import { getProduct, getProductByCategory } from "../AsyncMock/AsyncMock";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";


const ItemListContainer = ({title}) => {
    const [product, setProduct] = useState([])

    useEffect(() => {
        getProduct()
            .then(response => {
                setProduct(response)
            })
            .catch(error => {
                console.error(error)
            })
    }, [])

    const { categoryId } = useParams()

useEffect(() => {
    const asyncFunc = categoryId ? getProductByCategory : getProduct

    asyncFunc(categoryId)
        .then(response => {
            setProduct(response)
        })
        .catch(error => {
            console.error(error)
        })
}, [categoryId])

    return (
        <div>
            <h1>{title}</h1>
            <ItemList products={product}/>
        </div>
    )
}
export default ItemListContainer;

/*
const [product, setProduct] = useState([])

const { categoryId } = useParams()

useEffect(() => {
    const asyncFunc = categoryId ? getProductByCategory : getProduct

    asyncFunc(categoryId)
        .then(response => {
            setProduct(response)
        })
        .catch(error => {
            console.error(error)
        })
}, [categoryId])*/