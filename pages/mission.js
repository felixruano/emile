import Head from 'next/head'
import Header from '../components/Header'

function Mission() {
    return <div className="antialiased" >
        <Head>
            <title>Our Mission</title>
            <meta property="og:title" content="My page title" key="title" />
        </Head>

        <Header />

        <section className="py-12 bg-white overflow-hidden md:py-20 lg:py-24">
            <div className="relative max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
                <svg className="absolute top-full right-full transform translate-x-1/3 -translate-y-1/4 lg:translate-x-1/2 xl:-translate-y-1/2" width="404" height="404" fill="none" viewBox="0 0 404 404" role="img" aria-labelledby="svg-workcation">
                    <title id="svg-workcation">Workcation</title>
                    <defs>
                        <pattern id="ad119f34-7694-4c31-947f-5c9d249b21f3" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                            <rect x="0" y="0" width="4" height="4" className="text-gray-200" fill="currentColor" />
                        </pattern>
                    </defs>
                    <rect width="404" height="404" fill="url(#ad119f34-7694-4c31-947f-5c9d249b21f3)" />
                </svg>

                <div className="relative">
                    <blockquote className="mt-8">
                        <h3 className="text-center text-3xl leading-8 font-extrabold tracking-tight text-indigo-600 sm:text-4xl sm:leading-10">
                            Traditional models of education are not working
    </h3>
                        <p className="mt-4 max-w-3xl mx-auto text-left text-xl leading-7 text-gray-500">
                            Traditional education is not working. Legacy “factory model” classrooms treat students as passive receptacles of information. Instruction continues to emphasize core content remediation, while a rapidly changing labor market demands mastery of a foundational set of critical skills. Online efforts to individualize instruction fail because they continue to be content-focused and teacher-centric.
    </p>
                        <footer className="mt-8">
                            <div className="md:flex md:items-center md:justify-center">

                            </div>
                        </footer>
                    </blockquote>
                    <blockquote className="mt-8">
                        <h3 className="text-center text-3xl leading-8 font-extrabold tracking-tight text-indigo-600 sm:text-4xl sm:leading-10">
                            Traditional models of education are not working
</h3>
                        <p className="mt-4 max-w-3xl mx-auto text-left text-xl leading-7 text-gray-500">
                            Traditional education is not working. Legacy “factory model” classrooms treat students as passive receptacles of information. Instruction continues to emphasize core content remediation, while a rapidly changing labor market demands mastery of a foundational set of critical skills. Online efforts to individualize instruction fail because they continue to be content-focused and teacher-centric.
</p>
                        <footer className="mt-8">
                            <div className="md:flex md:items-center md:justify-center">

                            </div>
                        </footer>
                    </blockquote>
                </div>
            </div>
        </section>

    </div>
}

export default Mission