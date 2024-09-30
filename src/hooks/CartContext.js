import { createContext, useContext, useReducer } from "react";


const CartContext = createContext();
const initialState = [];
// const initialCart = [];

export const CART_ACTION = {
    ADD_ITEM: 'ADD_ITEM',
    UPDATE_ITEM: 'UPDATE_ITEM',
    REMOVE_ITEM: 'REMOVE_ITEM'
};

export function CartProvider({ children }) {
    //USE -REDUCER 
    const [state, dispatch] = useReducer(cartReducer, initialState)

    return <CartContext.Provider value={{ state, dispatch }}>
        {children}
    </CartContext.Provider>
}

//custom Hook -> useCart
export function useCart() {
    return useContext(CartContext);
}

function cartReducer(state, action) {

    // const { ADD_ITEM, UPDATE_ITEM, DELETE_ITEM } = CART_ACTION;
    switch (action.type) {
        case CART_ACTION.ADD_ITEM: {
            let { product, quantity } = action.payload;
            console.log("item quantity: " + quantity + typeof (quantity));
            const itemIndex = state.findIndex(cartItem => cartItem.product.id === product.id);
            if (itemIndex >= 0) {
                const newCart = [...state];
                console.log(" newCart[itemIndex]", newCart[itemIndex]);
                newCart[itemIndex] = { ...newCart[itemIndex], quantity: newCart[itemIndex].quantity + quantity }
                // newCart[itemIndex].quantity += quantity
                console.log("new quantity: " + newCart[itemIndex].quantity, typeof (newCart[itemIndex].quantity));
                return newCart;
            }
            return [...state, { product, quantity }];
        }
        case CART_ACTION.UPDATE_ITEM: {
            let { product, quantity } = action.payload;
            const itemIndex = state.findIndex(cartItem => cartItem.product.id === product.id);
            if (itemIndex >= 0) {
                const newCart = [...state];
                newCart[itemIndex].quantity = quantity;
                return newCart;
            }
            break;
        }
        case CART_ACTION.REMOVE_ITEM: {
            const { product } = action.payload;
            return [...state].filter(cartItem => cartItem.product.id !== product.id)
        }
    }
}


