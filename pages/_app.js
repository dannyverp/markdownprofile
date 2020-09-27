import '../styles/main.scss';
import '../styles/prism-dark-one.css'
import Head from "next/head";

export default function MyApp({Component, pageProps}) {
    return <div className="h-full">
        <Head>
            <title>Markdown Profiles</title>
            <link rel="icon" href="./favicon.ico"/>
            <meta property="og:title" content="Markdown Profiles"/>
            <meta property="og:description" content="Markdown Profiles is a project that generates markdown files for those that want an awesome Github profile.It provides several templates for you to use."/>
            <meta property="og:image" content="https://markdownprofile.com/img/pagepreview.png"/>
            <meta property="og:url" content="https://markdownprofile.com"/>
            <meta name="twitter:card" content="summary_large_image"/>
        </Head>
        <Component {...pageProps} />
    </div>
        ;
}
