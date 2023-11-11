import { createContext, useState } from "react";

export const CartContext = createContext({
    cart: []
})

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([])

    console.log(cart)

    const addItem = (productos, quantity) => {
        if(!isInCart(productos.id)) {
            setCart(prev => [...prev, {...productos, quantity}])
        }else{
            console.error('El Producto ya fue agregado')
        }
    }

    const removeItem = (productoId) => {
        const cartUpdated = cart.filter(prod => prod.id !== productoId)
        setCart(cartUpdated)
    }

    const clearCart = () => {
        setCart([])
    }

    const isInCart = (productoId) => {
        return cart.some(prod => prod.id === productoId)
    }
    return(
        <CartContext.Provider value={{cart, addItem, removeItem, clearCart }} >{ children }</CartContext.Provider>
    )
}

