import { createContext, useContext, useReducer } from "react";

const UserContext = createContext();
const initialState = {
    user: null,
    isAuthenticated: false,
    error: null
};
const USER_ACTION = {
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

            break;
        }
        case USER_ACTION.AUTH_ERROR: {
            
            break;
        }
        case USER_ACTION.SET_USER: {
            
            break;
        }
        case USER_ACTION.UPDATE_USER: {
            
            break;
        }
        case USER_ACTION.LOGOUT: {
             localStorage.removeItem('user');
            break;
        }       
    }
}

export const useUser = () => useContext(UserContext);

export function UserProvider({ children }) {
    const [state, dispatch] = useReducer(UserReducer, user)
    return (
        <UserContext.Provider value={{ state, dispatch }}>
            {children}
        </UserContext.Provider>
    )
}