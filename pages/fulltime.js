import Head from 'next/head'
import Header from '../components/Header'
import Footer from './Footer'
import Features from './Features'

function Fulltime() {
    var bg = require('../public/ed-vector-1.svg')
    return <div className="antialiased" >
        <Head>
            <title>Emile | Pilot Full-Time School</title>
            <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
            <meta property="og:title" content="Our pilot full-time program" key="title" />
        </Head>

        <section className="relative py-16 bg-white overflow-hidden">
            <div className="hidden lg:block lg:absolute lg:inset-y-0 lg:h-full lg:w-full">
                <div className="relative h-full text-lg max-w-prose mx-auto">
                    <svg className="absolute top-12 left-full transform translate-x-32" width="404" height="384" fill="none" viewBox="0 0 404 384">
                        <defs>
                            <pattern id="74b3fd99-0a6f-4271-bef2-e80eeafdf357" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                                <rect x="0" y="0" width="4" height="4" className="text-gray-200" fill="currentColor" />
                            </pattern>
                        </defs>
                        <rect width="404" height="384" fill="url(#74b3fd99-0a6f-4271-bef2-e80eeafdf357)" />
                    </svg>
                    <svg className="absolute top-1/2 right-full transform -translate-y-1/2 -translate-x-32" width="404" height="384" fill="none" viewBox="0 0 404 384">
                        <defs>
                            <pattern id="f210dbf6-a58d-4871-961e-36d5016a0f49" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                                <rect x="0" y="0" width="4" height="4" className="text-gray-200" fill="currentColor" />
                            </pattern>
                        </defs>
                        <rect width="404" height="384" fill="url(#f210dbf6-a58d-4871-961e-36d5016a0f49)" />
                    </svg>
                    <svg className="absolute bottom-12 left-full transform translate-x-32" width="404" height="384" fill="none" viewBox="0 0 404 384">
                        <defs>
                            <pattern id="d3eb07ae-5182-43e6-857d-35c643af9034" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                                <rect x="0" y="0" width="4" height="4" className="text-gray-200" fill="currentColor" />
                            </pattern>
                        </defs>
                        <rect width="404" height="384" fill="url(#d3eb07ae-5182-43e6-857d-35c643af9034)" />
                    </svg>
                </div>
            </div>

            <div className="relative px-4 sm:px-6 lg:px-8">
                <div className="pb-8 justify-left lg:justify-center">
                    <img className="lg:h-32 h-20 w-auto mx-auto object-cover" src="/emileschool.png?nf_resize=fit&h=500" alt="" />
                </div>
                <div className="text-lg max-w-prose mx-auto mb-6">



                    <h1 className="mt-2 mb-4 text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10">Pilot Full-Time School</h1>

                    <p className="text-xl text-gray-500 leading-8">Emile Academy is a pilot school and program of Emile. Our full-time school (grades 7-12)
                    combines <strong>1:1 instruction</strong> with small group interactions to teach every subject through the lens of
                    three foundational, <strong>21st-century skills</strong>: Critical Thinking, Comprehension and Communication. We value content mastery over rote memorization, and personalized instruction over
                    traditional style course lectures.</p>

                </div>

                <div className="prose prose-lg text-gray-500 mx-auto">
                    <p>Components of Emile Academy:</p>

                    <ul>
                        <li>
                            <div className="">
                                <div className="ml-2">
                                    <h4 className="text-lg leading-6 font-medium text-gray-900">1:1 Instruction</h4>
                                    <p className="mt-2 text-base leading-6 text-gray-500">
                                        We "flip" the classroom to engage students in self-directed study, supported by 100+ hours a year of 1:1 teacher interaction to keep students engaged every day, all year long.
                                </p>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="">
                                <div className="ml-2">
                                    <h4 className="text-lg leading-6 font-medium text-gray-900">Skills-based curriculum</h4>
                                    <p className="mt-2 text-base leading-6 text-gray-500">
                                        We teach every subject through the lens of three foundational, 21st-century skills: Critical Thinking, Comprehension and Communication.
                                </p>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="">
                                <div className="ml-2">
                                    <h4 className="text-lg leading-6 font-medium text-gray-900">Mastery learning</h4>
                                    <p className="mt-2 text-base leading-6 text-gray-500">
                                        Our curriculum is designed to ensure every student achieves mastery based on their ability to articulate the concept, not just a quiz score.
                                </p>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="">
                                <div className="ml-2">
                                    <h4 className="text-lg leading-6 font-medium text-gray-900">Tech-enabled executive functioning</h4>
                                    <p className="mt-2 text-base leading-6 text-gray-500">
                                        We've built a proprietary tech platform that empowers students to teach themselves, and that tracks their progress with complete transparency.
                                </p>
                                </div>
                            </div>
                        </li>
                    </ul>



                    <h2>Sample Weekly Schedule</h2>
                    <figure className="">
                        <img class="w-full rounded-lg" src="/sampleschedule.png" alt="" width="1310" height="873" />
                        <figcaption>A flexible yet rigorous school schedule coupled with the constant support of our
                        instructors to help you achieve your goals and unlock your true learning potential</figcaption>
                    </figure>


                    <h2>Our Platform</h2>
                    <figure className="shadow-xl">
                        <img className="w-full rounded-lg" src="/curriculum.png" alt="" width="1310" height="873" />
                    </figure>

                    <h2>Tuition</h2>
                    <p>Standard tuition is $7,500 per semester. We offer financial aid on a sliding scale basis. Please contact us if you're interested in requesting financial aid.</p>



                    <h2>Get Started</h2>
                    <p>To get started, please submit your information and a team member will reach out to schedule a free consultation.</p>
                    <p>To learn more about the team behind The Emile School, please visit our main site at <a href="https://www.hiemile.com/">hiemile.com</a>. If you have any questions, you can reach out to the team at <a href="mailto:contact@hiemile.com">contact@hiemile.com</a>. </p>

                </div>

                <div className="pt-8 relative h-full text-lg max-w-prose mx-auto">
                    <div className="rounded-md shadow">
                        <a href="/request" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10">
                            Get Started
                        </a>
                    </div>
                </div>


            </div>

        </section>

        <Footer />

    </div>
}

export default Fulltime