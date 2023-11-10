import { getProducts, getProductsById } from "../../data/AsyncMock";
import { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";

const ItemListContainer = ({ greetings }) => {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const { productosId } = useParams();

  useEffect(() => {
    console.log("productosId:", productosId);

    const loadProducts = () => {
      setLoading(true);

      const asyncFunc =
        productosId === "Nuestros Productos"
          ? getProducts
          : getProductsById;

      // Convertir a minúsculas antes de usarlo
      const formattedProductosId = productosId.toLowerCase();

      const productIdsToShow =
        formattedProductosId === "mas pedidos" ? ["1", "3"] : formattedProductosId;

      asyncFunc(productIdsToShow)
        .then((response) => {
          console.log("Productos cargados:", response);
          const newProductos = Array.isArray(response) ? response : [];
          setProductos(newProductos);
        })
        .catch((error) => {
          console.error("Error al cargar productos:", error);
        })
        .finally(() => {
          setLoading(false);
        });
    };

    loadProducts();
  }, [productosId]);

  if (loading) {
    return <p>Cargando productos...</p>;
  }

  return (
    <div>
      <div className="container fw-bold">
        {productosId === undefined && <h1>{greetings}</h1>}
      </div>
      {(productosId === "Nuestros Productos" || productosId === "mas pedidos") && (
        <div>
          <ItemList productos={productos} />
        </div>
      )}
    </div>
  );
};

export default ItemListContainer;