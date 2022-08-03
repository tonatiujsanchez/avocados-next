import type { AppProps } from 'next/app'
import { Layout } from '@components/Layouts/Layout'
import '../styles/globals.css'


export default function MyApp({ Component, pageProps }: AppProps): JSX.Element {
    return (
        <Layout>
            <Component {...pageProps} />
        </Layout>
    )
}

