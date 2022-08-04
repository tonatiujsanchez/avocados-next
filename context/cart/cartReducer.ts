import { CartState } from "./CartProvider"



type CartActionType =
    | { type: '[Cart] Add-ProductCart', payload: TProductCart  }
    | { type: '[Cart] Update-ProductCart', payload: TProductCart  }
    | { type: '[Cart] Remove-ProductCart', payload: TProductId  }



export const cartReducer = ( state:CartState, action:CartActionType ) => {

    switch (action.type) {
        case '[Cart] Add-ProductCart':
            return {
                ...state,
                productsCart: [...state.productsCart, action.payload]
            }
        case '[Cart] Update-ProductCart':
            return {
                ...state,
                productsCart: state.productsCart.map( product => {
                    if( product.id === action.payload.id ){
                        return action.payload
                    }
                    return product
                })
            }
            
        case '[Cart] Remove-ProductCart':
            return {
                ...state,
                productsCart: state.productsCart.filter( product =>( product.id !== action.payload ))
            }
            
        default:
            return state
    }

}