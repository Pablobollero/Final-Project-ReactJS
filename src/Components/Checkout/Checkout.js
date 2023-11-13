import { useContext, useState } from "react";
import { CartContext } from "../Context/CartContext";
import { db } from "../Firebase/Firebase";
import {
    Timestamp,
    writeBatch,
    collection,
    getDocs,
    query,
    where,
    addDoc,
    documentId
} from "firebase/firestore";
import CheckoutForm from '../CheckoutForm/CheckoutForm';
import './Checkout.css';

const Checkout = () => {
    const [loading, setLoading] = useState(false);
    const [orderId, setOrderId] = useState('');
    const [outOfStockItems, setOutOfStockItems] = useState([]);

    const { cart, total, clearCart } = useContext(CartContext);

    // Función para generar un ID alfanumérico de 10 caracteres
    const generateOrderId = () => {
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let result = '';
        const charactersLength = characters.length;
        for (let i = 0; i < 10; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
    };

    const createOrder = async ({ name, phone, email }) => {
        setLoading(true);
        setOutOfStockItems([]);

        try {
            const customOrderId = generateOrderId(); // Generar el ID alfanumérico personalizado
            const objOrder = {
                buyer: {
                    name, phone, email
                },
                items: cart,
                total: total,
                date: Timestamp.fromDate(new Date()),
                orderId: customOrderId // Usar el ID generado para la orden
            };

            const batch = writeBatch(db);
            const productRef = collection(db, 'ItemCollection');
            const productsAddedFromFirestore = await getDocs(query(productRef, where(documentId(), 'in', cart.map(prod => prod.id))));

            let outOfStock = [];

            productsAddedFromFirestore.docs.forEach(doc => {
                const dataDoc = doc.data();
                const stockDb = dataDoc.stock;
                const productAddedToCart = cart.find(prod => prod.id === doc.id);
                const prodQuantity = productAddedToCart?.quantity;

                if (stockDb < prodQuantity) {
                    outOfStock.push({ id: doc.id, ...dataDoc });
                } else {
                    batch.update(doc.ref, { stock: stockDb - prodQuantity });
                }
            });

            if (outOfStock.length === 0) {
                await batch.commit();
                const orderRef = collection(db, 'orders');
                await addDoc(orderRef, objOrder); // Crear la orden en la base de datos con el nuevo ID
                setOrderId(customOrderId); // Establecer el ID de la orden en el estado local
                clearCart();
            } else {
                setOutOfStockItems(outOfStock.map(item => item.name));
            }
        } catch (error) {
            console.error('Error al crear la orden:', error);
        } finally {
            setLoading(false);
        }
    };

    if (loading) {
        return <h1>Se está generando su orden...</h1>;
    }

    if (orderId) {
        return <h1>El id de su orden es: {orderId}</h1>; // Mostrar el ID de la orden
    }

    if (outOfStockItems.length > 0) {
        return (
            <div>
                <h1>Productos fuera de stock:</h1>
                <ul>
                    {outOfStockItems.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
                <button onClick={() => window.location.reload()}>Volver al Carrito</button>
            </div>
        );
    }

    return (
        <div>
            <h1 className="checkout">Checkout</h1>
            <CheckoutForm onConfirm={createOrder} />
        </div>
    );
};

export default Checkout;