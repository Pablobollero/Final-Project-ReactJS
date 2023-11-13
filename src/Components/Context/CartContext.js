import { createContext, useState, useEffect } from "react";

export const CartContext = createContext({
    cart: [],
    total: 0,
    totalQuantity: 0  // Nueva propiedad agregada
});

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    const [total, setTotal] = useState(0);
    const [totalQuantity, setTotalQuantity] = useState(0); // Nueva variable de estado

    // Actualiza el total y totalQuantity cuando cambia el carrito
    useEffect(() => {
        const newTotal = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);
        const newTotalQuantity = cart.reduce((acc, item) => acc + item.quantity, 0); // Calcula totalQuantity
        setTotal(newTotal);
        setTotalQuantity(newTotalQuantity); // Actualiza totalQuantity
    }, [cart]);

    console.log(cart);

    const addItem = (item, quantity) => {
        if (!isInCart(item.id)) {
            setCart(prev => [...prev, { ...item, quantity }]);
        } else {
            console.error('El producto ya fue agregado.');
        }
    };

    const removeItem = (itemId) => {
        const cartUpdated = cart.filter(prod => prod.id !== itemId);
        setCart(cartUpdated);
    };

    const clearCart = () => {
        setCart([]);
    };

    const isInCart = (itemId) => {
        return cart.some(prod => prod.id === itemId);
    };

    return (
        <CartContext.Provider value={{ cart, addItem, removeItem, clearCart, total, totalQuantity }}>
            { children }
        </CartContext.Provider>
    );
};