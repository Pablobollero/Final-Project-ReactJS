import { useEffect, useState } from "react";
import { getProductsById } from "../../data/AsyncMock";
import ItemDetail from "../ItemDetail/ItemDetail";
import './ItemDetailContainer.css';
import { useParams } from "react-router";


const ItemDetailContainer = () => {
    const [productos, setProductos] = useState(null)

    const { itemId } = useParams()

    useEffect(() => {
        getProductsById(itemId)
            .then(response => {
                setProductos(response)
            })
            .catch(error => {
                console.error(error)
            })
    }, [itemId])

    return(
        <div className="ItemDetailContainer">
            <ItemDetail {...productos} />
        </div>
    )
}

export default ItemDetailContainer;