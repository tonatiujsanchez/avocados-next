import { GetServerSideProps, NextPage } from 'next'
import axios from 'axios';
import Image from 'next/image';
import { FormEvent, useState } from 'react';
import { useCart } from 'hooks/useCart';

interface Props {
    product: TProduct
}

const ProductPage: NextPage<Props> = ({ product }) => {

    const [quantity, setQuantity] = useState<number>(1)
    const { addCart } = useCart()


    const onAddCart = (ev: FormEvent<HTMLFormElement>) => {
        ev.preventDefault()

        addCart({
            ...product,
            quantity
        })
    }

    return (
        <div className='container'>
            <div className='flex gap-4 items-center'>
                <div className='relative w-72 h-72 my-10'>
                    <Image
                        priority={true}
                        layout='fill'
                        src={product.image}
                        alt={product.name}
                    />
                </div>
                <div>
                    <h1 className='font-bold text-2xl mb-4'>{product.name}</h1>
                    <p className='text-slate-800 text-lg mb-1'>${product.price}</p>
                    <p className='bg-slate-200 text-slate-700 px-3 rounded-sm inline-block mb-3'> SKU: {product.sku}</p>
                    <form onSubmit={onAddCart} className='flex border rounded-md'>
                        <input
                            type="number"
                            min={1}
                            value={quantity}
                            onChange={({ target }) => setQuantity(Number(target.value))}
                            className="mx-4 outline-none"
                        />
                        <button
                            type='submit'
                            className='bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-sm flex gap-1 font-semibold'>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                            </svg>
                            Add to cart
                        </button>
                    </form>
                </div>
            </div>
            <div className='border-b pb-6 mb-6'>
                <h2 className='font-semibold mb-3 text-xl'>About this avocado</h2>
                <p className='leading-7'>{product.attributes.description}</p>
            </div>
            <table className='w-full border mb-10'>
                <thead className='bg-slate-200'>
                    <tr>
                        <th colSpan={2} className="text-left px-4 py-4">
                            Attributes
                        </th>

                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className='px-3 py-4 border-b'>Shape</td>
                        <td className='px-3 py-4 border-b border-l'>{product.attributes.shape}</td>
                    </tr>
                    <tr>
                        <td className='px-3 py-4 border-b'>Hardiness</td>
                        <td className='px-3 py-4 border-b border-l'>{product.attributes.hardiness}</td>
                    </tr>
                    <tr>
                        <td className='px-3 py-4'>Taste</td>
                        <td className='px-3 py-4 border-b border-l'>{product.attributes.taste}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

// You should use getServerSideProps when:
// - Only if you need to pre-render a page whose data must be fetched at request time

export const getServerSideProps: GetServerSideProps = async ({ query }) => {

    const { data } = await axios(`${process.env.API_URL}/api/avo/${query.productId}`)

    if (!data.entry) {
        return {
            notFound: true,
        }
    }

    return {
        props: {
            product: data.entry
        }
    }
}

export default ProductPage