import { ProductsState } from "./ProductsProvider"


type ProductsActionType =
    | { type: '[Product] Refresh-Data', payload: TProduct[]  }


export const productsReducer = (state: ProductsState, action: ProductsActionType) => {
    switch (action.type) {

        case "[Product] Refresh-Data":
            return { 
                ...state,
                products: action.payload
            }

        default:
            return state
    }
}
