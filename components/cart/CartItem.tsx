import { FC } from "react"
import NextLink from 'next/link'
import { useCart } from '../../hooks/useCart';
import { formatPrice } from "utils/formatPrice";

interface Props {
    product: TProductCart
}

export const CartItem: FC<Props> = ({ product }) => {

    const { removeCart } = useCart()

    const onRemoveProductoToCart = () => {
        removeCart( product.id )
    }

    return (
        <article className='flex justify-between items-center border-b'>
            <div className='flex items-start gap-2'>
                <div className='max-w-[200px]'>
                    <img src={product.image} alt={product.name} className="w-full" />
                </div>
                <div>
                    <NextLink href={`/product/${product.id}`}>
                        <a className='cursor-pointer font-semibold text-sky-600 hover:text-sky-700 inline-block my-2'>
                            <h3 className="text-2xl cursor-pointer">{product.name}</h3>
                        </a>
                    </NextLink>
                    <p className='my-1'>{product.quantity} x {formatPrice(product.price)}</p>
                    <p className="text-lg"><span className="font-semibold">Subtotal:</span> {formatPrice( product.quantity * product.price )}</p>
                </div>
            </div>
            <button 
                onClick={ onRemoveProductoToCart }
                className='border py-2 px-3 rounded font-bold opacity-70 hover:opacity-100'>
                X
            </button>

        </article>
    )
}
