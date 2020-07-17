import Head from 'next/head'
import Header from '../components/Header'
import Footer from './Footer'
import Features from './Features'

function Tuition() {
    return <div className="antialiased" >
        <Head>
            <title>Tuition</title>
            <meta property="og:title" content="My page title" key="title" />
        </Head>

        <Header />

        <section className="py-12 bg-white overflow-hidden md:py-20 lg:py-24">
            <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="lg:text-center">
                    <p className="text-base leading-6 text-indigo-600 font-semibold tracking-wide uppercase">Tuition</p>
                </div>

                <div className="max-w-lg mx-auto rounded-lg shadow-lg overflow-hidden lg:max-w-none lg:flex">
                    <div className="bg-white px-6 py-8 lg:flex-shrink-1 lg:p-12">
                        <h3 className="text-2xl leading-8 font-extrabold text-gray-900 sm:text-3xl sm:leading-9">
                            Fall 2020
                  </h3>
                        <p className="mt-6 text-base leading-6 text-gray-500">
                            You won't find typical $30-40k+ private school price tags here. By building our product from the ground-up, we're able to provide a lower-cost alternative to expensive private school. Truly personalized, 1:1 education is now within reach for more families.
                  </p>
                        <div className="mt-8">
                            <div className="flex items-center">
                                <h4 className="flex-shrink-0 pr-4 bg-white text-sm leading-5 tracking-wider font-semibold uppercase text-indigo-600">
                                    What's available
                      </h4>
                                <div className="flex-1 border-t-2 border-gray-200"></div>
                            </div>
                            <ul className="mt-8 lg:grid lg:grid-cols-2 lg:col-gap-8 lg:row-gap-5">
                                <li className="flex items-start lg:col-span-1">
                                    <div className="flex-shrink-0">
                                        <svg className="h-5 w-5 text-green-400" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                                        </svg>
                                    </div>
                                    <p className="ml-3 text-sm leading-5 text-gray-700">
                                        Flexible tuition programs
                        </p>
                                </li>
                                <li className="mt-5 flex items-start lg:col-span-1 lg:mt-0">
                                    <div className="flex-shrink-0">
                                        <svg className="h-5 w-5 text-green-400" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                                        </svg>
                                    </div>
                                    <p className="ml-3 text-sm leading-5 text-gray-700">
                                        Early sign-up discount
                        </p>
                                </li>
                                <li className="mt-5 flex items-start lg:col-span-1 lg:mt-0">
                                    <div className="flex-shrink-0">
                                        <svg className="h-5 w-5 text-green-400" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                                        </svg>
                                    </div>
                                    <p className="ml-3 text-sm leading-5 text-gray-700">
                                        Locked in price for full year
                        </p>
                                </li>
                                <li className="mt-5 flex items-start lg:col-span-1 lg:mt-0">
                                    <div className="flex-shrink-0">
                                        <svg className="h-5 w-5 text-green-400" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                                        </svg>
                                    </div>
                                    <p className="ml-3 text-sm leading-5 text-gray-700">
                                        Money-back guarantee
                        </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="py-8 px-6 text-center bg-gray-50 lg:flex-shrink-0 lg:flex lg:flex-col lg:justify-center lg:p-12">
                        <p className="text-lg leading-6 font-medium text-gray-900">
                            Semester Tuition (Fall 2020)
            </p>
                        <div className="mt-4 flex items-center justify-center text-5xl leading-none font-extrabold text-gray-900">
                            <span>
                                $5,000
              </span>
                            <span className="ml-3 text-xl leading-7 font-medium text-gray-500">
                                USD
              </span>
                        </div>

                        <div className="mt-6">
                            <div className="rounded-md shadow">
                                <a href="/request" className="flex items-center justify-center px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-gray-900 hover:bg-gray-800 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out">
                                    Request Info
                </a>
                            </div>
                        </div>
                    </div>


                </div>
            </div>

        </section>

        <Footer />

    </div>
}

export default Tuition