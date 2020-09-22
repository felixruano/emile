import Link from "next/link";
import Head from "next/head";
import Mobile from "./Mobile";
import Footer from "./Footer";
import HPCourses from "../components/CoursesListHP";
import Banner from "../components/Banner";
import Features from "./Features";

// Prismic
import { Client } from "../prismic-configuration";
import Prismic from "prismic-javascript";
import { RichText, Date } from "prismic-reactjs";

const Home = ({ courses }) => {
  return (
    <div className="antialiased">
      <Head>
        <title>
          Emile | K-12 learning platform delivering 1:1, mastery-based
          instruction
        </title>
        <meta
          name="description"
          content="Emile is a 1:1, accredited learning platform that offering classes for credit, tutorials and test prep."
        />
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
            <span className="text-indigo-600">
              Request additional info today.
            </span>
          </h2>
          <div className="mt-8 flex lg:flex-shrink-0 lg:mt-0">
            <div className="inline-flex rounded-md shadow">
              <Link href="/request">
                <a
                  className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out"
                >
                  Get Started
                </a>
              </Link>
            </div>
            <div className="ml-3 inline-flex rounded-md shadow">
              <Link href="/model">
              <a
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-indigo-600 bg-white hover:text-indigo-500 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out"
              >
                Features
              </a>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export async function getStaticProps(context) {
  const req = context.req;
  const listing = await Client(req).getSingle("listing");
  const courses = await Client(req).query(
    [
      Prismic.Predicates.at("document.type", "course"),
      Prismic.Predicates.fulltext("my.course.subject", "Math"),
    ],
    { pageSize: 6 }
  );
  return {
    props: {
      listing,
      courses,
    },
  };
}

export default Home;
