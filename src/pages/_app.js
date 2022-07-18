// Styles
import "@/styles/tailwind.css";
import "@/styles/variables.less";
import "@/styles/global.less";

// Next.js
import Head from "next/head";

// Redux
import { wrapper, store } from "@/store/store";
import { Provider } from "react-redux";

function MyApp({ Component, pageProps }) {
    return (
        <>
            <Head>
                <title>EiLab</title>
                <link
                    rel="shortcut icon"
                    href="/assets/images/favicon.ico"
                    type="image/x-icon"
                />
            </Head>
            <Provider store={store}>
                <Component {...pageProps} />
            </Provider>
        </>
    );
}

export default MyApp;
