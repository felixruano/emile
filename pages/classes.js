import React from 'react'
import Head from 'next/head'
import Prismic from 'prismic-javascript'
import { Link, RichText, Date } from 'prismic-reactjs'
import { Client } from '../prismic-configuration'
import Header from '../components/Header'
import CourseList from '../components/CourseList'
import Features from './Features'
import Footer from './Footer'

const Classes = ({ listing, courses }) => {
    return (
        <div className="antialiased" >
            <Head>
                <title>Classes for credit</title>
                <meta property="og:title" content="Classes for credit" key="title" />
            </Head>

            <Header />

            <section className="py-12 bg-white overflow-hidden md:py-20 lg:py-24">
                <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="lg:text-center">
                        <h1 className="text-base leading-6 text-indigo-600 font-semibold tracking-wide uppercase">{RichText.asText(listing.data.site_title)} </h1>
                        <p id="title" className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10">
                            {RichText.asText(listing.data.subtitle)}
                        </p>
                    </div>
                </div>

                <CourseList courses={courses} />

            </section>

            <Features />

            <Footer />

        </div>
    );
}

export async function getStaticProps(context) {
    const req = context.req
    const listing = await Client(req).getSingle('listing')
    const courses = await Client(req).query(
        Prismic.Predicates.at('document.type', 'course'),
        { orderings: '[my.course.subject]' }
    )
    return {
        props: {
            listing,
            courses,
        },
    }
}

export default Classes