import Head from 'next/head'
import Header from '../components/Header'
import Banner from '../components/Banner'
import Footer from './Footer'
import Features from './Features'

function Explore() {
    var bg = require('../public/ed-vector-1.svg')
    return <div className="antialiased" >
        <Head>
            <title>Explore our programs</title>
            <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
            <meta property="og:title" content="Our programs" key="title" />
            <script>
                window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', 'UA-176731734-1');
                </script>
        </Head>

        <Banner />

        <Header />

        <section className="py-12 bg-white overflow-hidden md:py-20 lg:py-24">
            <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="lg:text-center">
                    <p className="text-base leading-6 text-indigo-600 font-semibold tracking-wide uppercase">Our programs</p>
                    <h3 id="features" className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10">
                        What are you looking for?
                    </h3>
                </div>

                <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">

                    <div className="mt-12 grid gap-5 max-w-lg mx-auto grid-cols-1 lg:grid-cols-2 lg:max-w-none">
                        <div className="card flex flex-col rounded-lg shadow-lg overflow-hidden border border-indigo-600" style={{ backgroundImage: "url(" + bg + ")" }}>
                            <div className="flex-1 p-6 flex flex-col justify-between">
                                <div className="flex-1">
                                    <a href="/classes" className="block">
                                        <h3 className="mt-2 text-2xl leading-7 font-semibold text-gray-900">
                                            Classes for credit
                                        </h3>
                                        <div className="mt-3 text-base leading-6 text-gray-600">
                                            <ul>
                                                <li>- For students looking to take classes for credit at any time</li>
                                                <li>- Option to choose from 20+ currently available classes</li>
                                                <li>- New classes getting added weekly</li>
                                            </ul>
                                        </div>

                                        <p className="mt-3 text-sm leading-5 font-medium text-indigo-600">
                                            Learn more &rarr;
                                        </p>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="card flex flex-col rounded-lg shadow-lg overflow-hidden border border-indigo-600" style={{ backgroundImage: "url(" + bg + ")" }}>
                            <div className="flex-1 p-6 flex flex-col justify-between">
                                <div className="flex-1">
                                    <a href="/fulltime" className="block">
                                        <h1 className="mt-2 text-2xl leading-7 font-semibold text-gray-900">
                                            Full-time enrollment
                                        </h1>
                                        <div className="mt-3 text-base leading-6 text-gray-600">
                                            <ul>
                                                <li>- For sudents looking for a full-time replace to traditional school</li>
                                                <li>- Combination of 1:1 instruction with small group interactions</li>
                                                <li>- Now enrolling student entering 7th-10th grade for Fall 2020</li>
                                            </ul>
                                        </div>

                                        <p className="mt-3 text-sm leading-5 font-medium text-indigo-600">
                                            Learn more &rarr;
                                        </p>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <style jsx>{`
                    .card {
                    min-width: 100px;
                    min-height: 250px;
                    scroll-snap-align: center;
                    }
    
                `}</style>

                </div>

            </div>
        </section>

        <Features />

        <Footer />

    </div>
}

export default Explore