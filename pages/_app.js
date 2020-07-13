import '../styles/main.scss';
import Head from "next/head";

export default function MyApp({Component, pageProps}) {
    return <div className="h-full">
        <Head>
            <title>Markdown Profiles</title>
            <link rel="icon" href="./favicon.ico" />
        </Head>
        <Component {...pageProps} />
    </div>;
}
