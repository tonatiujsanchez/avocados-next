import axios from "axios"
import { FC, useReducer, useEffect } from 'react';
import { ProductsContext } from "./ProductsContext"
import { productsReducer } from "./productsReducer"



interface PropsProvider {
    children: JSX.Element
}

export interface ProductsState {
    products: TProduct[]
}

const Products_INITIAL_STATE: ProductsState = {
    products: []
}



export const ProductsProvider:FC<PropsProvider> = ({ children }) => {

    const [state, dispatch] = useReducer(productsReducer, Products_INITIAL_STATE)

    const refreshProducts = async() => {
        const { data } = await axios.get('/api/avo')        
        dispatch({  type: "[Product] Refresh-Data", payload: data.entries })
    }
    
    useEffect(()=>{
        refreshProducts()
    },[])


    return (
        <ProductsContext.Provider value={{
            ...state,
            refreshProducts
        }} >
            { children }
        </ProductsContext.Provider>
    )
}
