import React from 'react'
import Head from 'next/head'
import Mobile from './Mobile'
import Footer from './Footer'
import HPCourses from '../components/CoursesListHP'
import Banner from '../components/Banner'
import Features from './Features'

// Prismic 
import { Client } from '../prismic-configuration'
import Prismic from 'prismic-javascript'
import { RichText, Date } from 'prismic-reactjs'

const Home = ({ courses }) => {
  return (
    <div className="antialiased">
      <Head>
        <title>The Emile School | Online classes for credit and full-time school</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
        <meta name="description" content="The Emile School is a 1:1, blended learning platform that offers individual classes and a full-time middle and high school. Whether you're looking for a full-time alternative to your child's current school or 1-2 classes that can count for credit, our model will unlock and develop your child's full potential." />

        <script async src="https://www.googletagmanager.com/gtag/js?id=UA-176731734-1"></script>
        <script>
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'UA-176731734-1');
        </script>

      </Head>

      <Banner />

      <Mobile />

      <HPCourses courses={courses} />

      <Features />

      <div className="bg-gray-50">
        <div className="max-w-screen-xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h2 className="text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10">
            Ready to get started?
        <br />
            <span className="text-indigo-600">Request additional info today.</span>
          </h2>
          <div className="mt-8 flex lg:flex-shrink-0 lg:mt-0">
            <div className="inline-flex rounded-md shadow">
              <a href="/request" className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out">
                Request Info
              </a>
            </div>
            <div className="ml-3 inline-flex rounded-md shadow">
              <a href="#features" className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-indigo-600 bg-white hover:text-indigo-500 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out">
                Features
              </a>
            </div>
          </div>
        </div>
      </div>

      <Footer />

    </div>
  );
}

export async function getStaticProps(context) {
  const req = context.req
  const listing = await Client(req).getSingle('listing')
  const courses = await Client(req).query([
    Prismic.Predicates.at('document.type', 'course'),
    Prismic.Predicates.fulltext('my.course.subject', 'Math')],
    { pageSize: 6 }
  )
  return {
    props: {
      listing,
      courses,
    },
  }
}


export default Home