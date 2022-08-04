
import { FC } from 'react'
import { CartItem } from './CartItem'

interface Props {
    productsCart: TProductCart[]
}

export const CartList: FC<Props> = ({ productsCart }) => {
    return (
        <div className='my-10'>
            {
                productsCart.map(product => (
                    <CartItem key={product.id} product={ product } />
                ))
            }
        </div>
    )
}
