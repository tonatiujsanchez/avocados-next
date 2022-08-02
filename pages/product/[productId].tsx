import { useRouter } from 'next/router'

const ProductPage = () => {

    const { 
        query: { productId }
    } = useRouter()

    return (
        <div>
            <h1>ProductPage - {productId}</h1>
        </div>
    )
}

export default ProductPage