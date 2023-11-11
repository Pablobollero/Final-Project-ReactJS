import { getProducts, getProductsById } from "../../data/AsyncMock";
import { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";

const ItemListContainer = ({ greetings }) => {
    const [productos, setProductos] = useState([]);
    const [loading, setLoading] = useState(true);
    const { productosId } = useParams(); // Cambiado de categoryId a productosId

    useEffect(() => {
      console.log("productosId:", productosId);
      const asyncFunc = productosId === "Nuestros Productos" ? getProducts : getProductsById;
  
      setLoading(true);
  
      asyncFunc(productosId)
          .then(response => {
              console.log("Productos cargados:", response);
              const newProductos = Array.isArray(response) ? response : [];
              setProductos(newProductos);
          })
          .catch(error => {
              console.error("Error al cargar productos:", error);
          })
          .finally(() => {
              setLoading(false);
          });
  }, [productosId]);  

    if (loading) {
        return <p>Cargando productos...</p>;
    }

    return (
        <div>
            <div className="container fw-bold">
                <h1>{productosId === "Nuestros Productos" ? "Nuestros Productos" : greetings}</h1>
            </div>
            {productosId === "Nuestros Productos" && (
                <div>
                    <ItemList productos={productos} />
                </div>
            )}
        </div>
    );
};

export default ItemListContainer;