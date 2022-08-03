import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {

    render() {
        return (
            <Html>
                <Head>
                    {/* favicon */}
                    {/* webfont */}
                    {/* stylesheet */}
                    {/* script / js */}
                </Head>
                <body className='bg-slate-100'>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument