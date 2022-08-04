import type { AppProps } from 'next/app'

import { Layout } from '../components/Layouts/Layout';

import { ProductsProvider } from '../context/product/ProductsProvider';
import { CartProvider } from 'context/cart/CartProvider';

import '../styles/globals.css'

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

