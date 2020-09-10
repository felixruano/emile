import React from 'react'
import Head from 'next/head'
import { Client } from '../../prismic-configuration'
import Prismic from 'prismic-javascript'
import { Link, RichText, Date } from 'prismic-reactjs'
import Header from '../../components/Header'
import Features from '../Features'
import Footer from '../Footer'

import { queryRepeatableDocuments } from '../../utils/queries'

const Teammember = ({ teacher }) => {
    if (teacher && teacher.data) {
        const name = RichText.asText(teacher.data.name)

        return (
            <div className="antialiased" >
                <Head>
                    <title>{name}</title>
                    <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
                </Head>

                <Header />

                <section className="bg-white">
                    <div className="max-w-screen-xl mx-auto py-12 px-4 text-center sm:px-6 lg:px-8 lg:py-24">
                        <div className="space-y-6">
                            <img className="mx-auto max-w-full h-40 w-40 rounded-full xl:w-64 xl:h-64" src={(teacher.data.photo.url)} alt="" />
                            <div className="space-y-5 sm:mx-auto sm:max-w-xl sm:space-y-4 lg:max-w-5xl">
                                <h2 className="text-3xl leading-9 font-extrabold tracking-tight sm:text-4xl">{RichText.asText(teacher.data.name)}</h2>
                            </div>
                            <div className="text-lg leading-6 font-medium">
                                <p className="text-indigo-600">{(teacher.data.title)}</p>
                            </div>
                            <p className="text-l leading-7 text-gray-500">{(teacher.data.bio)}</p>


                        </div>


                    </div>

                </section>


                <Footer />
            </div >
        );
    }

    return null;
};

export async function getStaticProps({ params, preview = null, previewData = {} }) {
    const { ref } = previewData
    const teacher = await Client().getByUID("teacher", params.uid, ref ? { ref } : null) || {}
    return {
        props: {
            preview,
            teacher
        }
    }
}

export async function getStaticPaths() {
    const documents = await queryRepeatableDocuments((doc) => doc.type === 'teacher')
    return {
        paths: documents.map(doc => `/team/${doc.uid}`),
        fallback: false,
    }
}

export default Teammember