import { createContext } from 'react'


interface ContextProps {
    productsCart: TProductCart[],
    addCart: ( cartProduct ) => void,
    removeCart: ( idCart ) => void
}

export const CartContext = createContext({} as ContextProps)