import React from 'react'
import Head from 'next/head'
import Prismic from 'prismic-javascript'
import { Link, RichText, Date } from 'prismic-reactjs'
import { Client } from '../prismic-configuration'
import Header from '../components/Header'
import TeamList from '../components/TeamList'
import Footer from './Footer'

const Team = ({ teammembers }) => {
    return (
        <div className="antialiased" >
            <Head>
                <title>Emile | Our Team</title>
                <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
                <meta property="og:title" content="Meet our team" key="title" />
            </Head>

            <Header />

            <section className="bg-white">
                <div className="max-w-screen-xl mx-auto py-12 px-4 text-center sm:px-6 lg:px-8 lg:py-24">
                    <div className="space-y-12">
                        <div className="space-y-5 sm:mx-auto sm:max-w-xl sm:space-y-4 lg:max-w-5xl">
                            <h2 className="text-3xl leading-9 font-extrabold tracking-tight sm:text-4xl">Meet our team</h2>
                            <p className="text-xl leading-7 text-gray-500"></p>
                        </div>

                        <TeamList teammembers={teammembers} />

                    </div>
                </div>

            </section>

            <Footer />

        </div>
    );
}

export async function getStaticProps(context) {
    const req = context.req
    const listing = await Client(req).getSingle('listing')
    const teammembers = await Client(req).query(
        Prismic.Predicates.at('document.type', 'teacher'),
        { orderings: '[my.teacher.title]' }
    )
    return {
        props: {
            listing,
            teammembers,
        },
    }
}

export default Team