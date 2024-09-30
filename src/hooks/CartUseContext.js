import { createContext, useContext, useState } from "react";

const CartContext = createContext();
const initialCart = [];

export function CartProvider({ children }) {
    const [cart, setCart] = useState(initialCart);

    const addToCart = (item) => {
        const itemIndex = cart.findIndex(cartItem => cartItem.id === item.id);
        if (itemIndex >= 0) {
            const newCart = [...cart];
            newCart[itemIndex].quantity = newCart[itemIndex].quantity + item.quantity;
            return setCart(newCart)
        } else {
            setCart(prevCart => [...prevCart, item])
        }
    }
    const updateCartItem = (id, quantity) => {
        const itemIndex = cart.findIndex(cartItem => cartItem.id === id);
        if (itemIndex >= 0) {
            const newCart = [...cart];
            newCart[itemIndex].quantity = quantity;
            console.log(newCart);
            return setCart(newCart)
        }
    }
    const deleteItem = (id) => {
        const itemIndex = cart.findIndex(cartItem => cartItem.id === id);
        if (itemIndex >= 0) {
            const newCart = cart.filter(cartItem => cartItem.id !== id);
            return setCart(newCart)
        } else {

        }
    }

    return <CartContext.Provider value={{ cart, addToCart, deleteItem, updateCartItem }}>
        {children}
    </CartContext.Provider>
}

//custom Hook -> useCart
export function useCart() {
    return useContext(CartContext);
}
