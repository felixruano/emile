import Document, { Html, Head, Main, NextScript } from 'next/document';
import * as snippet from '@segment/snippet';

const { NEXT_PUBLIC_ANALYTICS_WRITE_KEY_DEV, NODE_ENV } = process.env;

import { GA_TRACKING_ID } from '../utils/gtag';

export default class MyDocument extends Document {
    // renderSnippet() {
    //   console.log(NEXT_PUBLIC_ANALYTICS_WRITE_KEY_DEV, NODE_ENV);
    //   let opts = {
    //     apiKey: NEXT_PUBLIC_ANALYTICS_WRITE_KEY_DEV,
    //     page: true,
    //   }

    //   if (NODE_ENV === 'development') {
    //     return snippet.max(opts);
    //   }

    //   return snippet.min(opts);
    // }
    render() {
        return (
            <Html>
                <Head>
                    {/* Segment Tag */}
                    <script
                        dangerouslySetInnerHTML={{
                            __html: `
                              !function(){var analytics=window.analytics=window.analytics||[];if(!analytics.initialize)if(analytics.invoked)window.console&&console.error&&console.error("Segment snippet included twice.");else{analytics.invoked=!0;analytics.methods=["trackSubmit","trackClick","trackLink","trackForm","pageview","identify","reset","group","track","ready","alias","debug","page","once","off","on","addSourceMiddleware","addIntegrationMiddleware","setAnonymousId","addDestinationMiddleware"];analytics.factory=function(e){return function(){var t=Array.prototype.slice.call(arguments);t.unshift(e);analytics.push(t);return analytics}};for(var e=0;e<analytics.methods.length;e++){var key=analytics.methods[e];analytics[key]=analytics.factory(key)}analytics.load=function(key,e){var t=document.createElement("script");t.type="text/javascript";t.async=!0;t.src="https://cdn.segment.com/analytics.js/v1/" + key + "/analytics.min.js";var n=document.getElementsByTagName("script")[0];n.parentNode.insertBefore(t,n);analytics._loadOptions=e};analytics.SNIPPET_VERSION="4.13.1";
                              analytics.load("rPAWRRvDUfxIC6xhZK3k6czVqORJwhVe");
                              analytics.page();
                              }}();
                            `,
                        }}
                    />
                    {/* Global Site Tag (gtag.js) - Google Analytics */}
                    <script
                        async
                        src={`https://www.googletagmanager.com/gtag/js`}
                    />
                    <script
                        dangerouslySetInnerHTML={{
                          __html: `
                            window.dataLayer = window.dataLayer || [];
                            function gtag(){dataLayer.push(arguments);}
                            gtag('js', new Date());
                          `,
                        }}
                    />
                    <link rel="icon" href="/favicon.ico" />
                    <link rel="stylesheet" href="https://use.typekit.net/fbc0dff.css" />
                    {/* <link
                        rel="stylesheet"
                        href="https://rsms.me/inter/inter.css"
                    /> */}
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}
