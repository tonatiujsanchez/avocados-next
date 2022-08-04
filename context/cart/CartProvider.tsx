import { FC, useReducer } from 'react';
import { CartContext } from "./CartContext";
import { cartReducer } from './cartReducer';



interface Props {
    children: JSX.Element
}

export interface CartState {
    productsCart: TProductCart[]
}

const Cart_INITIAL_STATE: CartState = {
    productsCart: []
}

export const CartProvider: FC<Props> = ({ children }) => {

    const [state, dispatch] = useReducer(cartReducer, Cart_INITIAL_STATE)


    const addCart = ( cartProduct:TProductCart ) => {

        const productExist = state.productsCart.find( pCart => pCart.id === cartProduct.id )

        if( productExist ){
            const cartProductTemp = {
                ...cartProduct,
                quantity: productExist.quantity + cartProduct.quantity
            }
            dispatch({ type: '[Cart] Update-ProductCart', payload: cartProductTemp })

        }else {
            dispatch({ type: '[Cart] Add-ProductCart', payload: cartProduct })
        }      

    }

    const removeCart = ( idCart: TProductId ) => {
        dispatch({ type: '[Cart] Remove-ProductCart', payload: idCart })
    }

    
    return (
        <CartContext.Provider value={{
            ...state,
            addCart,
            removeCart
        }}>
            { children }
        </CartContext.Provider>
    )
}