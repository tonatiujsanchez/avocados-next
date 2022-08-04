import type { AppProps } from 'next/app'
import { Layout } from '@components/layouts/Layout'
import '../styles/globals.css'
import { ProductsProvider } from '../context/product/ProductsProvider';
import { CartProvider } from 'context/cart/CartProvider';


export default function MyApp({ Component, pageProps }: AppProps): JSX.Element {
    return (
        <CartProvider>
            <ProductsProvider>
                <Layout>
                    <Component {...pageProps} />
                </Layout>
            </ProductsProvider>
        </CartProvider>
    )
}

