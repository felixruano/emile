import { useEffect } from 'react';
import Router from 'next/router';
import { ChakraProvider } from '@chakra-ui/core';

import '../styles/index.css';
import * as gtag from '../utils/gtag';
import { ProvideAuth } from '../utils/use-auth';

const MyApp = ({ Component, pageProps }) => {
    useEffect(() => {
        const handleRouteChange = (url) => {
            gtag.pageview(url);
        };
        Router.events.on('routeChangeComplete', handleRouteChange);
        return () => {
            Router.events.off('routeChangeComplete', handleRouteChange);
        };
    }, []);

    return (
        <div className="antialiased">
            <ProvideAuth>
                <ChakraProvider>
                    <Component {...pageProps} />
                </ChakraProvider>
            </ProvideAuth>
        </div>
    );
};

export default MyApp;
