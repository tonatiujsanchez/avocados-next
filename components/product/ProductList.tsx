import { FC } from "react"
import { ProductCard } from '@components/product/ProductCard';

interface Props {
    productList: TProduct[]
}

export const ProductList:FC<Props> = ({ productList }) => {
    return (
        <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:gap-x-8 mb-10">
            {
                productList.map(product => (
                    <ProductCard key={product.id} product={ product } />
                ))
            }
        </div>
    )
}
