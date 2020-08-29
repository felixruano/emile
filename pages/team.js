import Head from 'next/head'
import Header from '../components/Header'
import Banner from '../components/Banner'
import Footer from './Footer'

function Team() {
    return <div className="antialiased" >
        <Head>
            <title>Who We Are</title>
            <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
            <meta property="og:title" content="Who we are" key="title" />
            <script>
                window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', 'UA-176731734-1');
                </script>
        </Head>

        <Banner />

        <Header />

        <section className="pb-12 bg-white overflow-hidden md:pb-20 lg:pb-24">
            <div className="relative pt-8 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
                <div className="absolute inset-0">
                    <div className="bg-white"></div>
                </div>
                <div className="relative max-w-7xl mx-auto">
                    <div className="text-center">
                        <h2 className="text-3xl leading-9 tracking-tight font-extrabold text-gray-900 sm:text-4xl sm:leading-10">
                            Our Team
      </h2>
                    </div>
                    <div className="mt-12 grid gap-10 max-w-lg mx-auto lg:grid-cols-3 lg:max-w-none">
                        <div className="flex flex-col pt-8 rounded-lg shadow-lg overflow-hidden items-center border border-gray-200">
                            <div className="flex-shrink-0">
                                <img className="h-64 w-64 rounded-full object-cover" src="/felix.jpg?nf_resize=fit&h=500" alt="" />
                            </div>

                            <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                                <div className="flex-1">

                                    <h3 className="mt-2 text-xl leading-7 font-semibold text-gray-900 text-center">
                                        Felix Ruano
              </h3>
                                    <h3 className="mt-2 text-xl leading-7 text-gray-500 text-center">
                                        CEO
              </h3>
                                    <p className="mt-3 text-base leading-6 text-gray-500">
                                        Felix is Emile's Chief Executive Officer, leading the team as it builds the K-12 platform for the 21st-century. He previously worked as a management consultant with McKinsey & Company, where he advised retail and industrial clients across strategy and operations projects. He is a board member of Asia Society’s Center for Global Education, comprised of education leaders from around the world. He earned a degree in Economics from Harvard University.
              </p>

                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col pt-8 rounded-lg shadow-lg overflow-hidden items-center border border-gray-200">
                            <div className="flex-shrink-0">
                                <img className="h-64 w-64 rounded-full object-cover" src="/lidia.jpg?nf_resize=fit&h=500" alt="" />
                            </div>

                            <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                                <div className="flex-1">

                                    <h3 className="mt-2 text-xl leading-7 font-semibold text-gray-900 text-center">
                                        Lidia Medina
              </h3>
                                    <h3 className="mt-2 text-xl leading-7 text-gray-500 text-center">
                                        COO
              </h3>
                                    <p className="mt-3 text-base leading-6 text-gray-500">
                                        Lidia is Emile's Chief Operating Officer, overseeing day-to-day operations and strategy.  She previously was an Associate at the Chan Zuckerberg Initiative as a part of the ventures team.  Lidia earned a Bachelor of Science degree from Syracuse University and is an MBA candidate at Harvard Business School.
              </p>

                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col pt-8 rounded-lg shadow-lg overflow-hidden items-center border border-gray-200">
                            <div className="flex-shrink-0">
                                <img className="h-64 w-64 rounded-full object-cover" src="/johnny.jpg?nf_resize=fit&h=500" alt="" />
                            </div>

                            <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                                <div className="flex-1">

                                    <h3 className="mt-2 text-xl leading-7 font-semibold text-gray-900 text-center">
                                        Johnny Duda
              </h3>
                                    <h3 className="mt-2 text-xl leading-7 text-gray-500 text-center">
                                        Chief Academic Officer
              </h3>
                                    <p className="mt-3 text-base leading-6 text-gray-500">
                                        Johnny is Chief Academic Officer at The Emile School. Prior to Emile, he started Vault Prep in 2011 and was Executive Director of the non-profit Student Voice Project – a non-profit in inner-city LA focused on providing 21st Century critical literacy support to students and teachers in LA’s most impacted and under-funded schools. Dr. Duda has extensive experience in the classroom and has taught everything from special needs math in middle school to AP Physics, World History, and Ethics at the high school level. Johnny graduated from Harvard University and received his doctorate in Education from UCLA.
              </p>

                                </div>
                            </div>
                        </div>


                    </div>
                    <div className="mt-12 grid gap-10 max-w-lg mx-auto lg:grid-cols-3 lg:max-w-none">
                        <div className="flex flex-col pt-8 rounded-lg shadow-lg overflow-hidden items-center border border-gray-200">
                            <div className="flex-shrink-0">
                                <img className="h-64 w-64 rounded-full object-cover" src="/sarah.jpg?nf_resize=fit&h=500" alt="" />
                            </div>

                            <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                                <div className="flex-1">

                                    <h3 className="mt-2 text-xl leading-7 font-semibold text-gray-900 text-center">
                                        Sarah Crilley
              </h3>
                                    <h3 className="mt-2 text-xl leading-7 text-gray-500 text-center">
                                        Director of Curriculum and Instruction
              </h3>
                                    <p className="mt-3 text-base leading-6 text-gray-500">
                                        Sarah is Director of Curriculum and Instruction at Emile, overseeing curriculum development and teacher training. She previously worked as the Director of High School and College Placement for a NativityMiguel school in New Haven, Connecticut. She specialized in standardized test preparation, high school placement, college counseling, and mathematics instruction. Sarah earned a B.A. in Psychology and Spanish from the University of Notre Dame.
              </p>

                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col pt-8 rounded-lg shadow-lg overflow-hidden items-center border border-gray-200">
                            <div className="flex-shrink-0">
                                <img className="h-64 w-64 rounded-full object-cover" src="/abdiel.jpg?nf_resize=fit&h=500" alt="" />
                            </div>

                            <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                                <div className="flex-1">

                                    <h3 className="mt-2 text-xl leading-7 font-semibold text-gray-900 text-center">
                                        Abdiel Garcia
              </h3>
                                    <h3 className="mt-2 text-xl leading-7 text-gray-500 text-center">
                                        Admissions
              </h3>
                                    <p className="mt-3 text-base leading-6 text-gray-500">
                                        Abdiel coordinates Admissions for Emile. Prior to joining us, he spent 5 years as a Harvard Undergraduate Admissions Officer. He has also worked and taught in K-8 classrooms in Los Angeles, Boston, New York, and Latin America.  Abdiel earned a B.A. in Child Development from Tufts University in 2014 and earned a Masters in Education from Harvard in 2019.
              </p>

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

export default Team