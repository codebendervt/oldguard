
import Head from 'next/head'


export default function Header(props) {


    return (

        <Head>
            <title>{props.title || "Sauveur"}</title>
            <link rel="shortcut icon" type="image/jpg" href="/images/favicon.jpg" />
            <meta name="description" content={props.desc || "Digital Transformation for small business"} />
            <meta name="author" content="Rawk" />
            <meta name='viewport' content='width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no' />

            <meta property="og:type" content="website" />
            <meta property="og:title" content={props.title || "Sauveur"} />
            <meta property="og:description" content={props.desc || "Digital Transformation for small business"} />
            <meta
                property="og:image"
                content={props.image|| "https://devuniversity.github.io/dot/card.jpg"}
            />
            <meta property="og:url" content="https://sauveur.xyz" />

            <link rel="apple-touch-icon" href="/images/icon_alt.png"></link>
            <meta name="theme-color" content="#317EFB"/>


            <meta name="mobile-web-app-capable" content="yes"/>
            <meta name="apple-mobile-web-app-capable" content="yes"/>
            <meta name="apple-mobile-web-app-status-bar-style" content="default"/> 
            <meta name="apple-mobile-web-app-title" content={props.title}/>

            {/* Global site tag (gtag.js) - Google Analytics  */}
            <script async src={`https://www.googletagmanager.com/gtag/js?id=${props.tag || "" }`}></script>
            <script async src="/scripts/ga.js">
            gtag('config', `${props.tag || "" }`);
            </script>
            <link href="/manifest.json" rel="manifest"></link>
            {/* <script src="https://cdn.jsdelivr.net/npm/@shopify/draggable@1.0.0-beta.12/lib/sortable.js"></script> */}

            {props.children}
        </Head>

    )
}
