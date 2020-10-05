import Head from 'next/head'
import Header from '../components/Header'
import { InlineWidget } from 'react-calendly'

function Thankyou() {
    return <div className="antialiased" >
        <Head>
            <title>Emile | Thank You!</title>
            <meta property="og:title" content="Thank you" key="title" />
        </Head>

        <Header />

        <section className="pb-12 bg-white overflow-hidden md:pb-20 lg:pb-12">
            <div className="bg-white py-16 px-4 overflow-hidden sm:px-6 lg:px-8 lg:py-24">
                <div className="relative max-w-xl mx-auto">
                    <svg className="absolute left-full transform translate-x-1/2" width="404" height="404" fill="none" viewBox="0 0 404 404">
                        <defs>
                            <pattern id="85737c0e-0916-41d7-917f-596dc7edfa27" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                                <rect x="0" y="0" width="4" height="4" className="text-gray-200" fill="currentColor" />
                            </pattern>
                        </defs>
                        <rect width="404" height="404" fill="url(#85737c0e-0916-41d7-917f-596dc7edfa27)" />
                    </svg>
                    <svg className="absolute right-full bottom-0 transform -translate-x-1/2" width="404" height="404" fill="none" viewBox="0 0 404 404">
                        <defs>
                            <pattern id="85737c0e-0916-41d7-917f-596dc7edfa27" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                                <rect x="0" y="0" width="4" height="4" className="text-gray-200" fill="currentColor" />
                            </pattern>
                        </defs>
                        <rect width="404" height="404" fill="url(#85737c0e-0916-41d7-917f-596dc7edfa27)" />
                    </svg>
                    <div className="text-center">
                        <h2 className="text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10">
                            Thank you!
            </h2>
                        <p className="mt-4 text-lg leading-6 text-gray-500">
                            Please schedule a 30-min consultation with one a team advisor below. If you have any questions, you can reach us at contact@hiemile.com or {" "}
                            <a href="tel:+1-424-228-8696" className="text-indigo-600 hover:text-indigo-500 focus:outline-none focus:shadow-outline transition ease-in-out duration-150">
                                (424) 228-8696
                        </a>
                        </p>
                    </div>

                    <InlineWidget
                        pageSettings={{
                            backgroundColor: 'ffffff',
                            hideEventTypeDetails: false,
                            hideLandingPageDetails: false,
                            primaryColor: '464BE3',
                            textColor: '4d5055'
                        }}
                        prefill={{}}
                        styles={{
                            height: '1000px'
                        }}
                        url="https://calendly.com/c/BCGVIZFXOU4R5FKZ"
                        utm={{}}
                    />

                </div>
            </div>
        </section>

    </div>
}

export default Thankyou