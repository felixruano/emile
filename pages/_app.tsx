import { useEffect } from 'react';
import type { AppProps } from 'next/app';
import Router from 'next/router';
import { QueryCache, ReactQueryCacheProvider } from 'react-query';
import { ChakraProvider } from '@chakra-ui/react';

import '../styles/index.css';
import * as gtag from '@utils/gtag';
import { ProvideAuth } from '@utils/hooks/use-auth';
import { firebase } from '@utils/firebase/firebaseClient';

import theme from '../theme';

const queryCache = new QueryCache();

const MyApp = ({ Component, pageProps }: AppProps) => {
    useEffect(() => {
        if (typeof window !== 'undefined') {
            firebase.analytics();
        }
        const handleRouteChange = (url) => {
            gtag.pageview(url);
        };
        Router.events.on('routeChangeComplete', handleRouteChange);
        return () => {
            Router.events.off('routeChangeComplete', handleRouteChange);
        };
    }, []);

    return (
        <div className="font-sans antialiased">
            <ReactQueryCacheProvider queryCache={queryCache}>
                <ProvideAuth>
                    <ChakraProvider theme={theme}>
                        <Component {...pageProps} />
                    </ChakraProvider>
                </ProvideAuth>
            </ReactQueryCacheProvider>
        </div>
    );
};

export default MyApp;
