import type { AppProps } from 'next/app'
import { Layout } from '@components/layouts/Layout'
import '../styles/globals.css'
import { ProductsProvider } from '../context/product/ProductsProvider';


export default function MyApp({ Component, pageProps }: AppProps): JSX.Element {
    return (
        <ProductsProvider>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </ProductsProvider>
    )
}

