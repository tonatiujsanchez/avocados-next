import NextLink from 'next/link'
import { Alert } from "@components/ui/Alert"
import { useCart } from '../hooks/useCart';
import { CartList } from '@components/cart/CartList';
import { useMemo } from 'react';
import { formatPrice } from '../utils/formatPrice';


const CartPage = () => {


    const { productsCart } = useCart()
    const total = useMemo(() => productsCart.reduce( (total, product) =>{
        return total = total + ( product.price * product.quantity )  
    },0), [productsCart])

    return (
        <div className="container min-h-[600px]">
            
                { productsCart.length === 0
                    ?<div className="mt-10 mb-5 border-b pb-5"> 
                        <Alert title="Your cart is empty" subtitle="You will need to add some items to the cart before you can checkout." />
                    </div>
                    : <CartList productsCart={productsCart} />
                }
            <div className="flex justify-between items-center border p-4 rounded-md mb-10">
                <p className='text-xl'><span className="font-semibold">Total:</span> {formatPrice(total)}</p>
                <button className="bg-slate-900 hover:bg-slate-800 text-slate-100 px-6 py-2 rounded-md">
                    Checkout
                </button>
            </div>
        </div>
    )
}

export default CartPage