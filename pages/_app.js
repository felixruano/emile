import { useEffect } from 'react';
import Router from 'next/router';
import { ChakraProvider } from '@chakra-ui/core';

import '../styles/index.css';
import * as gtag from '../utils/gtag';
import { ProvideAuth } from '../utils/use-auth';
import { firebase } from '../utils/firebase/firebaseClient';

import theme from '../theme';

const MyApp = ({ Component, pageProps }) => {
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
            <ProvideAuth>
                <ChakraProvider theme={theme}>
                    <Component {...pageProps} />
                </ChakraProvider>
            </ProvideAuth>
        </div>
    );
};

export default MyApp;
