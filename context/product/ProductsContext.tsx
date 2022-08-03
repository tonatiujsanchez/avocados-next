import { createContext } from 'react'

interface ContextProps {
    products: TProduct[],
    refreshProducts: ()=> void
} 

export const ProductsContext = createContext({} as ContextProps)
