import Head from 'next/head'
import Header from '../components/Header'
import Banner from '../components/Banner'
import Footer from './Footer'
import Features from './Features'

function Model() {
    return <div className="antialiased" >
        <Head>
            <title>Our Model</title>
            <meta property="og:title" content="Our model" key="title" />
        </Head>

        <Banner />

        <Header />

        <Features />

        <section className="py-12 bg-white overflow-hidden md:py-20 lg:py-24">
            <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="lg:text-center">
                    <p className="text-base leading-6 text-indigo-600 font-semibold tracking-wide uppercase">Our Curriculum</p>
                    <h3 id="features" className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10">
                        21st-century literacy skills and problem-centered inquiry
                    </h3>
                </div>

                <div className="py-12 bg-white">
                    <div className="max-w-xl mx-auto px-4 sm:px-6 lg:max-w-screen-xl lg:px-8">
                        <div class="my-12 flex flex-col p-12 rounded-lg shadow-lg overflow-hidden bg-gray-100 bg-opacity-50">
                            <h4 id="math" className="mt-2 pb-1 text-2xl leading-8 font-extrabold tracking-tight text-indigo-600 sm:text-2xl sm:leading-10">
                                Sample: Math and Science
                            </h4>
                            <p className="pb-4 text-xl leading-7 text-gray-500">
                                Our integrated math and science curricula challenge students to think critically by categorizing content into big ideas and building connections that span across topics, courses and grade levels.
                    </p>
                            <div className="lg:grid lg:grid-cols-4 lg:gap-8">

                                <div>
                                    <div className="mt-5">
                                        <h5 className="text-lg leading-6 font-medium text-indigo-600 text-left">Math Journey:</h5>
                                    </div>
                                </div>
                                <div className="mt-10 lg:mt-0">
                                    <div className="mt-5">
                                        <h5 className="text-lg leading-6 font-medium text-gray-900 text-left">1) Defining the Unknown</h5>
                                    </div>
                                </div>
                                <div className="mt-10 lg:mt-0">
                                    <div className="mt-5">
                                        <h5 className="text-lg leading-6 font-medium text-gray-900 text-left">2) Problem Solving</h5>
                                    </div>
                                </div>
                                <div className="mt-10 lg:mt-0">
                                    <div className="mt-5">
                                        <h5 className="text-lg leading-6 font-medium text-gray-900 text-left">3) Quantifying Our World</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="lg:grid lg:grid-cols-4 lg:gap-8">

                                <div>
                                    <div className="mt-5">
                                        <h5 className="text-lg leading-6 font-medium text-indigo-600 text-left">Science Journey:</h5>
                                    </div>
                                </div>
                                <div className="mt-10 lg:mt-0">
                                    <div className="mt-5">
                                        <h5 className="text-lg leading-6 font-medium text-gray-900 text-left">1) Orientation to Nature & Ourselves</h5>
                                    </div>
                                </div>
                                <div className="mt-10 lg:mt-0">
                                    <div className="mt-5">
                                        <h5 className="text-lg leading-6 font-medium text-gray-900 text-left">2) Experimentation & Questioning</h5>
                                    </div>
                                </div>
                                <div className="mt-10 lg:mt-0">
                                    <div className="mt-5">
                                        <h5 className="text-lg leading-6 font-medium text-gray-900 text-left">3) Independent Inquiry</h5>
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>



            </div>
        </section>

        <Footer />

    </div>
}

export default Model