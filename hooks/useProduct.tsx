import { useContext } from 'react';
import { ProductsContext } from '../context/product/ProductsContext';


export const useProduct = () => {
    return useContext( ProductsContext )
}
