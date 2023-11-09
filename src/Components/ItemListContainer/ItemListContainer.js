import { getProducts, getProductsById } from "../../data/AsyncMock";
import { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router";

const ItemListContainer = ({ greetings }) => {
    const [productos, setProductos] = useState([])

    const { categoryId } = useParams()

    useEffect(() => {
        const asyncFunc = categoryId ? getProductsById : getProducts

        asyncFunc(categoryId)
            .then(response => {
                setProductos(response)
            })
            .catch(error => {
                console.error(error)
            })
    }, [categoryId])

    return(
        <div>
            <div className="container fw-bold">
                <h1>{greetings}</h1>            
            </div>
            <div>
            <ItemList productos={productos} />
            </div>
        </div>
    );
};

export default ItemListContainer;