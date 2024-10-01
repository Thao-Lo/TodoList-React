import { createContext, useContext, useReducer } from "react";

const UserContext = createContext();
const initialState = {
    user: null,
    isAuthenticated: false,
    error: null
};
export const USER_ACTION = {
    REGISTER: 'REGISTER',
    LOGIN: 'LOGIN',
    AUTH_ERROR: 'AUTH_ERROR',
    SET_USER: 'SET_USER',
    UPDATE_USER: 'UPDATE_USER',
    LOGOUT: 'LOGOUT'

}
const UserReducer = (state, action) => {
    switch (action.type) {
        case USER_ACTION.REGISTER: { break; }
        case USER_ACTION.LOGIN: {
                return{...state, user: action.payload, isAuthenticated: true, error: null}
          
        }
        case USER_ACTION.AUTH_ERROR: {
            return {...state, isAuthenticated: false, error: action.payload}
           
        }
        case USER_ACTION.SET_USER: {
           return{...state, user: action.payload, isAuthenticated: true, error: false}
           
        }
        case USER_ACTION.UPDATE_USER: {
            
            break;
        }
        case USER_ACTION.LOGOUT: {
           return{...state, user: null, isAuthenticated: false, error: null}
        }       
    }
}

export const useUser = () => useContext(UserContext);

export function UserProvider({ children }) {
    const [state, dispatch] = useReducer(UserReducer, initialState)
    return (
        <UserContext.Provider value={{ state, dispatch }}>
            {children}
        </UserContext.Provider>
    )
}