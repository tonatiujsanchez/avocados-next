import { FC } from "react"
import NextLink from 'next/link';
import Image from "next/image";

interface Props {
    product: TProduct
}

export const ProductCard: FC<Props> = ({ product }) => {
    return (
        <NextLink href={`/product/${product.id}`} passHref>
            <a className="group">
                <div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8 relative">
                    <Image
                    layout="responsive"
                    width={340}
                    height={340}
                    src={product.image} 
                    alt={ product.name }
                    className="w-full h-full object-center object-cover group-hover:opacity-75" />
                </div>
                <h3 className="mt-4 text-lg text-gray-700">{ product.name }</h3>
                <p className="mt-1 text-lg font-medium text-gray-900">${ product.price}</p>
            </a>
        </NextLink>
    )
}
