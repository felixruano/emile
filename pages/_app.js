import React from 'react'
import { useEffect } from 'react'
import Router from 'next/router'
import '../styles/index.css'
import * as gtag from '../utils/gtag'

const MyApp = ({ Component, pageProps }) => {
    useEffect(() => {
        const handleRouteChange = (url) => {
            gtag.pageview(url)
        }
        Router.events.on('routeChangeComplete', handleRouteChange)
        return () => {
            Router.events.off('routeChangeComplete', handleRouteChange)
        }
    }, [])

    return <Component {...pageProps} />
}

export default MyApp