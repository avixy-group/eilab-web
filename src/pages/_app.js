import '@/styles/tailwind.css'
import '@/styles/variables.less'

import Head from 'next/head'

function MyApp({ Component, pageProps }) {
    return <>
        <Head>
            <title>EiLab</title>
            <link rel="shortcut icon" href="/assets/images/favicon.ico" type="image/x-icon" />
        </Head>
        <Component {...pageProps} />
    </>
}

export default MyApp
