import Head from 'next/head'
import Link from 'next/link'
import Header from '../../components/Header'
import Footer from '../Footer'

function Algebraone() {
    return <div className="antialiased" >
        <Head>
            <title>Class - Algegra One</title>
            <meta property="og:title" content="Algebra One" key="title" />
        </Head>

        <Header />

        <section className="py-12 bg-white overflow-hidden md:py-20 lg:py-24">
            <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="lg:text-center mb-12">
                    <h2 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10 text-left">
                        The Problem
                    </h2>
                    <p className="mt-4 max-w-4xl text-l leading-7 text-gray-500 text-left">
                        “Factory model” schools treat students as passive receptacles of information. This outdated methodology emphasizes a remedial curriculum and often ignores the interests and intricacies of individual students. Today's rapidly changing vocational market still demands mastery of foundational skills, but it also requires critical thinking to an unprecedented degree.
                    </p>
                    <p className="mt-4 max-w-4xl text-l leading-7 text-gray-500 text-left">
                        As technological advances in automation consume what were once "safe" jobs at an exponential pace, critical thinking paired with applicable skills are now mandatory prerequisites for young people entering the economy. Many of the current online efforts to individualize instruction fail because they continue to be content-focused and teacher-centric. Rather than cultivating students' instinctual desire to learn, schools have become a rigid system hindered by political and profit driven motives without any signs of real innovation in over 50 years.
                    </p>
                </div>
                <div className="lg:text-center">
                    <h2 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10 text-left">
                        The Solution
                    </h2>
                    <p className="mt-4 max-w-4xl text-l leading-7 text-gray-500 text-left">
                        We believe that meaningful innovation in education can't be made on the margins. We can have all the free or low-cost supplemental tools available at our fingertips, but we won't move the needle if we don't challenge the underlying model. This is why we decided to build a better foundation from scratch - one that uses the latest in technology, cognitive science and curriculum development across the entire student experience. The end result is a student-centered education offering that cultivates learning where students are empowered to identify and develop their natural capacities while simultaneously learning how to think critically about the world around them so they can be part of it and contribute to it.
                    </p>
                </div>
            </div>
        </section>

        <Footer />


    </div>
}

export default Algebraone