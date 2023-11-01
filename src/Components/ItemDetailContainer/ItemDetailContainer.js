import { useState } from "react";
import { getProductsById } from "../../data/AsyncMock";
import ItemDetail from "../ItemDetail/ItemDetail";
import './ItemDetailContainer.css';


const ItemDetailContainer = () => {
    const [productos, setProductos] = useState(null)

    useState(() => {
        getProductsById('1')
            .then(response => {
                setProductos(response)
            })
            .catch(error => {
                console.error(error)
            })
    }, [])

    return(
        <div className="ItemDetailContainer">
            <ItemDetail {...productos}/>
        </div>
    )
}

export default ItemDetailContainer;