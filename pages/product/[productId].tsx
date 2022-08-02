import { useEffect, useState } from 'react';
import { useRouter } from 'next/router'
import axios from 'axios';

const ProductPage = () => {

    const [product, setProduct] = useState<TProduct | null>(null)
    const { query: { productId } } = useRouter()
    
    const getAvo = async() => {
        const { data } = await axios.get(`/api/avo/${productId}`)
        console.log(data);        
    }

    useEffect(() => {
        getAvo()
    }, [])
    

    return (
        <div>
            <h1>ProductPage - {productId}</h1>
        </div>
    )
}

export default ProductPage