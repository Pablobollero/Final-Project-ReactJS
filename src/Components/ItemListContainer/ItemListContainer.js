import { getProducts } from "../../data/AsyncMock";
import { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList";

const ItemListContainer = ({ greeting }) => {
    const [productos, setProductos] = useState([])

    useEffect(() => {
        getProducts()
            .then(response => {
                setProductos(response)
            })
            .catch(error => {
                console.error(error)
            })
    }, [])

    return(
        <div>
            <h1>
                { greeting }
            </h1>
            <div>
            <ItemList productos={productos} />
            </div>
        </div>
    );
};

export default ItemListContainer;