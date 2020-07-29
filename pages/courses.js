import Head from 'next/head'
import Header from '../components/Header'
import Footer from './Footer'
import Features from './Features'

function Courses() {
    return <div className="antialiased" >
        <Head>
            <title>Courses</title>
            <meta property="og:title" content="My page title" key="title" />
        </Head>

        <Header />



        <section className="py-12 bg-white overflow-hidden md:py-20 lg:py-24">
            <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="lg:text-center">
                    <p className="text-base leading-6 text-indigo-600 font-semibold tracking-wide uppercase">Our Courses</p>
                </div>

                {/*first row*/}

                <div className="mt-12 grid gap-5 max-w-lg mx-auto grid-cols-2 lg:grid-cols-4 lg:max-w-none">
                    <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
                        <div className="flex-1 p-6 flex flex-col justify-between bg-gray-100 bg-opacity-50">
                            <div className="flex-1">
                                <p className="text-sm leading-5 font-medium text-indigo-600">
                                    <a href="#" className="hover:underline">
                                        Math
                                    </a>
                                </p>
                                <a href="#" className="block">
                                    <h3 className="mt-2 text-xl leading-7 font-semibold text-gray-900">
                                        Algebra 1
                                    </h3>
                                    <p className="mt-3 text-base leading-6 text-gray-500">
                                        Grades: 8, 9
                                    </p>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
                        <div className="flex-1 p-6 flex flex-col justify-between bg-gray-100 bg-opacity-50">
                            <div className="flex-1">
                                <p className="text-sm leading-5 font-medium text-indigo-600">
                                    <a href="#" className="hover:underline">
                                        Math
                                    </a>
                                </p>
                                <a href="#" className="block">
                                    <h3 className="mt-2 text-xl leading-7 font-semibold text-gray-900">
                                        Geometry
                                    </h3>
                                    <p className="mt-3 text-base leading-6 text-gray-500">
                                        Grades: 8, 9, 10
                                    </p>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
                        <div className="flex-1 p-6 flex flex-col justify-between bg-gray-100 bg-opacity-50">
                            <div className="flex-1">
                                <p className="text-sm leading-5 font-medium text-indigo-600">
                                    <a href="#" className="hover:underline">
                                        Math
                                    </a>
                                </p>
                                <a href="#" className="block">
                                    <h3 className="mt-2 text-xl leading-7 font-semibold text-gray-900">
                                        Algebra 1
                                    </h3>
                                    <p className="mt-3 text-base leading-6 text-gray-500">
                                        Grades: 8, 9
                                    </p>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
                        <div className="flex-1 p-6 flex flex-col justify-between bg-gray-100 bg-opacity-50">
                            <div className="flex-1">
                                <p className="text-sm leading-5 font-medium text-indigo-600">
                                    <a href="#" className="hover:underline">
                                        Math
                                    </a>
                                </p>
                                <a href="#" className="block">
                                    <h3 className="mt-2 text-xl leading-7 font-semibold text-gray-900">
                                        Algebra 2/Trig
                                    </h3>
                                    <p className="mt-3 text-base leading-6 text-gray-500">
                                        Grades: 10, 11
                                    </p>
                                </a>
                            </div>
                        </div>
                    </div>


                </div>

                <div className="mt-12 grid gap-5 max-w-lg mx-auto grid-cols-2 lg:grid-cols-4 lg:max-w-none">
                    <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
                        <div className="flex-1 p-6 flex flex-col justify-between bg-gray-100 bg-opacity-50">
                            <div className="flex-1">
                                <p className="text-sm leading-5 font-medium text-indigo-600">
                                    <a href="#" className="hover:underline">
                                        Math
                                </a>
                                </p>
                                <a href="#" className="block">
                                    <h3 className="mt-2 text-xl leading-7 font-semibold text-gray-900">
                                        Precalculus
                                </h3>
                                    <p className="mt-3 text-base leading-6 text-gray-500">
                                        Grades: 11, 12
                                </p>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
                        <div className="flex-1 p-6 flex flex-col justify-between bg-gray-100 bg-opacity-50">
                            <div className="flex-1">
                                <p className="text-sm leading-5 font-medium text-indigo-600">
                                    <a href="#" className="hover:underline">
                                        Math
                                </a>
                                </p>
                                <a href="#" className="block">
                                    <h3 className="mt-2 text-xl leading-7 font-semibold text-gray-900">
                                        Statistics
                                </h3>
                                    <p className="mt-3 text-base leading-6 text-gray-500">
                                        Grades: 11, 12
                                </p>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
                        <div className="flex-1 p-6 flex flex-col justify-between bg-gray-100 bg-opacity-50">
                            <div className="flex-1">
                                <p className="text-sm leading-5 font-medium text-indigo-600">
                                    <a href="#" className="hover:underline">
                                        Math
                                </a>
                                </p>
                                <a href="#" className="block">
                                    <h3 className="mt-2 text-xl leading-7 font-semibold text-gray-900">
                                        Calculus
                                </h3>
                                    <p className="mt-3 text-base leading-6 text-gray-500">
                                        Grades: 11, 12
                                </p>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
                        <div className="flex-1 p-6 flex flex-col justify-between bg-gray-100 bg-opacity-50">
                            <div className="flex-1">
                                <p className="text-sm leading-5 font-medium text-blue-600">
                                    <a href="#" className="hover:underline">
                                        Science
                                </a>
                                </p>
                                <a href="#" className="block">
                                    <h3 className="mt-2 text-xl leading-7 font-semibold text-gray-900">
                                        Life Sciences
                                </h3>
                                    <p className="mt-3 text-base leading-6 text-gray-500">
                                        Grades: 7, 8
                                </p>
                                </a>
                            </div>
                        </div>
                    </div>


                </div>

                {/*third row*/}

                <div className="mt-12 grid gap-5 max-w-lg mx-auto grid-cols-2 lg:grid-cols-4 lg:max-w-none">
                    <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
                        <div className="flex-1 p-6 flex flex-col justify-between bg-gray-100 bg-opacity-50">
                            <div className="flex-1">
                                <p className="text-sm leading-5 font-medium text-blue-600">
                                    <a href="#" className="hover:underline">
                                        Science
                                </a>
                                </p>
                                <a href="#" className="block">
                                    <h3 className="mt-2 text-xl leading-7 font-semibold text-gray-900">
                                        Biology
                                </h3>
                                    <p className="mt-3 text-base leading-6 text-gray-500">
                                        Grades: 9, 10
                                </p>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
                        <div className="flex-1 p-6 flex flex-col justify-between bg-gray-100 bg-opacity-50">
                            <div className="flex-1">
                                <p className="text-sm leading-5 font-medium text-indigo-600">
                                    <a href="#" className="hover:underline">
                                        Science
                                </a>
                                </p>
                                <a href="#" className="block">
                                    <h3 className="mt-2 text-xl leading-7 font-semibold text-gray-900">
                                        Chemistry
                                </h3>
                                    <p className="mt-3 text-base leading-6 text-gray-500">
                                        Grades: 10, 11, 12
                                </p>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
                        <div className="flex-1 p-6 flex flex-col justify-between bg-gray-100 bg-opacity-50">
                            <div className="flex-1">
                                <p className="text-sm leading-5 font-medium text-indigo-600">
                                    <a href="#" className="hover:underline">
                                        Science
                                </a>
                                </p>
                                <a href="#" className="block">
                                    <h3 className="mt-2 text-xl leading-7 font-semibold text-gray-900">
                                        Physics
                                </h3>
                                    <p className="mt-3 text-base leading-6 text-gray-500">
                                        Grades: 10, 11, 12
                                </p>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
                        <div className="flex-1 p-6 flex flex-col justify-between bg-gray-100 bg-opacity-50">
                            <div className="flex-1">
                                <p className="text-sm leading-5 font-medium text-orange-600">
                                    <a href="#" className="hover:underline">
                                        History
                                </a>
                                </p>
                                <a href="#" className="block">
                                    <h3 className="mt-2 text-xl leading-7 font-semibold text-gray-900">
                                        Ancient Civilizations
                                </h3>
                                    <p className="mt-3 text-base leading-6 text-gray-500">
                                        Grades: 7, 8
                                </p>
                                </a>
                            </div>
                        </div>
                    </div>


                </div>

                {/*fourth row start*/}

                <div className="mt-12 grid gap-5 max-w-lg mx-auto grid-cols-2 lg:grid-cols-4 lg:max-w-none">
                    <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
                        <div className="flex-1 p-6 flex flex-col justify-between bg-gray-100 bg-opacity-50">
                            <div className="flex-1">
                                <p className="text-sm leading-5 font-medium text-orange-600">
                                    <a href="#" className="hover:underline">
                                        History
                                </a>
                                </p>
                                <a href="#" className="block">
                                    <h3 className="mt-2 text-xl leading-7 font-semibold text-gray-900">
                                        World History
                                </h3>
                                    <p className="mt-3 text-base leading-6 text-gray-500">
                                        Grades: 9
                                </p>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
                        <div className="flex-1 p-6 flex flex-col justify-between bg-gray-100 bg-opacity-50">
                            <div className="flex-1">
                                <p className="text-sm leading-5 font-medium text-orange-600">
                                    <a href="#" className="hover:underline">
                                        History
                                </a>
                                </p>
                                <a href="#" className="block">
                                    <h3 className="mt-2 text-xl leading-7 font-semibold text-gray-900">
                                        US History
                                </h3>
                                    <p className="mt-3 text-base leading-6 text-gray-500">
                                        Grades: 10, 11
                                </p>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
                        <div className="flex-1 p-6 flex flex-col justify-between bg-gray-100 bg-opacity-50">
                            <div className="flex-1">
                                <p className="text-sm leading-5 font-medium text-orange-600">
                                    <a href="#" className="hover:underline">
                                        History
                                </a>
                                </p>
                                <a href="#" className="block">
                                    <h3 className="mt-2 text-xl leading-7 font-semibold text-gray-900">
                                        US Government and Politics
                                </h3>
                                    <p className="mt-3 text-base leading-6 text-gray-500">
                                        Grades: 11, 12
                                </p>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
                        <div className="flex-1 p-6 flex flex-col justify-between bg-gray-100 bg-opacity-50">
                            <div className="flex-1">
                                <p className="text-sm leading-5 font-medium text-green-600">
                                    <a href="#" className="hover:underline">
                                        English
                                </a>
                                </p>
                                <a href="#" className="block">
                                    <h3 className="mt-2 text-xl leading-7 font-semibold text-gray-900">
                                        Poetry, Prose & The Novel
                                </h3>
                                    <p className="mt-3 text-base leading-6 text-gray-500">
                                        Grades: 7, 8, 9
                                </p>
                                </a>
                            </div>
                        </div>
                    </div>


                </div>

                {/*fifth row start*/}


                <div className="mt-12 grid gap-5 max-w-lg mx-auto grid-cols-2 lg:grid-cols-4 lg:max-w-none">
                    <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
                        <div className="flex-1 p-6 flex flex-col justify-between bg-gray-100 bg-opacity-50">
                            <div className="flex-1">
                                <p className="text-sm leading-5 font-medium text-green-600">
                                    <a href="#" className="hover:underline">
                                        English
                                </a>
                                </p>
                                <a href="#" className="block">
                                    <h3 className="mt-2 text-xl leading-7 font-semibold text-gray-900">
                                        English Literature and Composition
                                </h3>
                                    <p className="mt-3 text-base leading-6 text-gray-500">
                                        Grades: 10, 11, 12
                                </p>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
                        <div className="flex-1 p-6 flex flex-col justify-between bg-gray-100 bg-opacity-50">
                            <div className="flex-1">
                                <p className="text-sm leading-5 font-medium text-green-600">
                                    <a href="#" className="hover:underline">
                                        English
                                </a>
                                </p>
                                <a href="#" className="block">
                                    <h3 className="mt-2 text-xl leading-7 font-semibold text-gray-900">
                                        English Language and Composition
                                </h3>
                                    <p className="mt-3 text-base leading-6 text-gray-500">
                                        Grades: 11, 12
                                </p>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
                        <div className="flex-1 p-6 flex flex-col justify-between bg-gray-100 bg-opacity-50">
                            <div className="flex-1">
                                <p className="text-sm leading-5 font-medium text-green-600">
                                    <a href="#" className="hover:underline">
                                        English
                                </a>
                                </p>
                                <a href="#" className="block">
                                    <h3 className="mt-2 text-xl leading-7 font-semibold text-gray-900">
                                        Expository Writing and Research
                                </h3>
                                    <p className="mt-3 text-base leading-6 text-gray-500">
                                        Grades: 11, 12
                                </p>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col rounded-lg shadow-lg hidden">
                        <div className="flex-1 p-6 flex flex-col justify-between bg-gray-100 bg-opacity-50">
                            <div className="flex-1">
                                <p className="text-sm leading-5 font-medium text-green-600">
                                    <a href="#" className="hover:underline">

                                    </a>
                                </p>
                                <a href="#" className="block">
                                    <h3 className="mt-2 text-xl leading-7 font-semibold text-gray-900">

                                    </h3>
                                    <p className="mt-3 text-base leading-6 text-gray-500">

                                    </p>
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

export default Courses