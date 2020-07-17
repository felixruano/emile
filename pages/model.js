import Head from 'next/head'
import Header from '../components/Header'

function Model() {
    return <div className="antialiased" >
        <Head>
            <title>Our Model</title>
            <meta property="og:title" content="My page title" key="title" />
        </Head>

        <Header />

        <section className="py-12 bg-white overflow-hidden md:py-20 lg:py-24">
            <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="lg:text-center">
                    <p className="text-base leading-6 text-indigo-600 font-semibold tracking-wide uppercase">Our Model</p>
                    <h3 id="features" className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10">
                        21st-century literacy skills and problem-centered inquiry
                    </h3>
                    <p className="mt-4 max-w-2xl text-xl leading-7 text-gray-500 lg:mx-auto">
                        Our integrated math and science curricula challenge students to think critically by categorizing content into big ideas and building connections that span across topics, courses and grade levels.
                    </p>
                </div>

                <div className="py-12 bg-white">
                    <div className="max-w-xl mx-auto px-4 sm:px-6 lg:max-w-screen-xl lg:px-8">
                        <div class="my-12 flex flex-col p-12 rounded-lg shadow-lg overflow-hidden bg-gray-100 bg-opacity-50">
                            <h4 id="math" className="mt-2 pb-8 text-2xl leading-8 font-extrabold tracking-tight text-indigo-600 sm:text-2xl sm:leading-10">
                                Math Journey
                            </h4>
                            <div className="lg:grid lg:grid-cols-3 lg:gap-8">

                                <div>
                                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                                        </svg>
                                    </div>
                                    <div className="mt-5">
                                        <h5 className="text-lg leading-6 font-medium text-gray-900">Competitive exchange rates</h5>
                                        <p className="mt-2 text-base leading-6 text-gray-500">
                                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.
          </p>
                                    </div>
                                </div>
                                <div className="mt-10 lg:mt-0">
                                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                                        </svg>
                                    </div>
                                    <div className="mt-5">
                                        <h5 className="text-lg leading-6 font-medium text-gray-900">No hidden fees</h5>
                                        <p className="mt-2 text-base leading-6 text-gray-500">
                                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.
          </p>
                                    </div>
                                </div>
                                <div className="mt-10 lg:mt-0">
                                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                                        </svg>
                                    </div>
                                    <div className="mt-5">
                                        <h5 className="text-lg leading-6 font-medium text-gray-900">Transfers are instant</h5>
                                        <p className="mt-2 text-base leading-6 text-gray-500">
                                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.
          </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="my-12 flex flex-col p-12 rounded-lg shadow-lg overflow-hidden bg-gray-100 bg-opacity-50">
                            <h4 id="math" className="mt-2 pb-8 text-2xl leading-8 font-extrabold tracking-tight text-indigo-600 sm:text-2xl sm:leading-10">
                                Math Journey
                            </h4>
                            <div className="lg:grid lg:grid-cols-3 lg:gap-8">

                                <div>
                                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                                        </svg>
                                    </div>
                                    <div className="mt-5">
                                        <h5 className="text-lg leading-6 font-medium text-gray-900">Competitive exchange rates</h5>
                                        <p className="mt-2 text-base leading-6 text-gray-500">
                                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.
          </p>
                                    </div>
                                </div>
                                <div className="mt-10 lg:mt-0">
                                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                                        </svg>
                                    </div>
                                    <div className="mt-5">
                                        <h5 className="text-lg leading-6 font-medium text-gray-900">No hidden fees</h5>
                                        <p className="mt-2 text-base leading-6 text-gray-500">
                                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.
          </p>
                                    </div>
                                </div>
                                <div className="mt-10 lg:mt-0">
                                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                                        </svg>
                                    </div>
                                    <div className="mt-5">
                                        <h5 className="text-lg leading-6 font-medium text-gray-900">Transfers are instant</h5>
                                        <p className="mt-2 text-base leading-6 text-gray-500">
                                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.
          </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="my-12 flex flex-col p-12 rounded-lg shadow-lg overflow-hidden bg-gray-100 bg-opacity-50">
                            <h4 id="math" className="mt-2 pb-8 text-2xl leading-8 font-extrabold tracking-tight text-indigo-600 sm:text-2xl sm:leading-10">
                                Math Journey
                            </h4>
                            <div className="lg:grid lg:grid-cols-3 lg:gap-8">

                                <div>
                                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                                        </svg>
                                    </div>
                                    <div className="mt-5">
                                        <h5 className="text-lg leading-6 font-medium text-gray-900">Competitive exchange rates</h5>
                                        <p className="mt-2 text-base leading-6 text-gray-500">
                                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.
          </p>
                                    </div>
                                </div>
                                <div className="mt-10 lg:mt-0">
                                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                                        </svg>
                                    </div>
                                    <div className="mt-5">
                                        <h5 className="text-lg leading-6 font-medium text-gray-900">No hidden fees</h5>
                                        <p className="mt-2 text-base leading-6 text-gray-500">
                                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.
          </p>
                                    </div>
                                </div>
                                <div className="mt-10 lg:mt-0">
                                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                                        </svg>
                                    </div>
                                    <div className="mt-5">
                                        <h5 className="text-lg leading-6 font-medium text-gray-900">Transfers are instant</h5>
                                        <p className="mt-2 text-base leading-6 text-gray-500">
                                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.
          </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>



            </div>
        </section>

    </div>
}

export default Model