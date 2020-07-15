import React from 'react'
import Link from 'next/link'
import Head from 'next/head'
import Mobile from './Mobile'
import Footer from './Footer'
import Features from './Features'

const Home = () => (
  <div className="antialiased">
    <Head>
      <title>Emile</title>
      <link rel="icon" href="/favicon.ico" />
      <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />

    </Head>

    <Mobile />

    <Features />

    <div className="bg-gray-50">
      <div className="max-w-screen-xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
        <h2 className="text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10">
          Ready to dive in?
        <br />
          <span className="text-indigo-600">Start your free trial today.</span>
        </h2>
        <div className="mt-8 flex lg:flex-shrink-0 lg:mt-0">
          <div className="inline-flex rounded-md shadow">
            <a href="https://www.google.com" className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out">
              Get started
          </a>
          </div>
          <div className="ml-3 inline-flex rounded-md shadow">
            <a href="#" className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-indigo-600 bg-white hover:text-indigo-500 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out">
              Learn more
          </a>
          </div>
        </div>
      </div>
    </div>

    <Footer />

  </div>
)

export default Home