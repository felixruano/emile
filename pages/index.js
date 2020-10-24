import Head from 'next/head';

import Header2 from '../components/Header2';
import Hero from '../components/Hero';
// import { FaArrowRight } from 'react-icons/fa';
import UpcomingCourses from '../components/UpcomingCourses';
import RisingIcon from '../components/icons/RisingIcon';
import ClockStarsIcon from '../components/icons/ClockStarsIcon';
import ThinkingIcon from '../components/icons/ThinkingIcon';
import ReportIcon from '../components/icons/ReportIcon';
import ConceptCard from '../components/ConceptCard';
import Footer from './Footer';

const ResultsSection = () => (
    <div
        className="w-full p-6 md:p-10 flex justify-center items-center"
        style={{
            background: 'linear-gradient(180deg, #938EF1 0%, #4F46E8 100%)',
        }}
    >
        <div className="border rounded text-white mx-4 md:mx-1/4 xl:mx-1/3">
            <div className="flex flex-col items-center">
                <div className="py-10">
                    <RisingIcon color="#EDEDFD" />
                </div>
                <h2 className="text-xl font-medium">Measurable Results</h2>
                <p className="m-6 text-center text-gray-100">
                    Score a 3+ on your AP exams to save thousands in college
                    tuition, or we’ll give you 3 free months. The best part?
                    We’re only <span className="font-bold">$19.99/month.</span>
                </p>
                {/* <button className="flex items-center uppercase font-semibold space-x-2 mb-12">
                    <span>request free trial</span>
                    <FaArrowRight />
                </button> */}
            </div>
        </div>
    </div>
);

const LearningThatWorksSection = () => (
    <div className="mx-10 my-12 lg:my-20 ">
        <div className="flex flex-col items-center justify-center space-y-6">
            <h3 className="text-gray-600 text-xl font-medium">
                Online learning that actually works.
            </h3>
            <div className="grid grid-cols-1 space-y-6 md:space-y-0 md:grid-cols-3 text-gray-500">
                <div className="flex flex-col items-center justify-center text-center space-y-6">
                    <ClockStarsIcon color="#4F46E8" />
                    <p className="lg:mx-8">
                        Unlimited access to 30+ courses, available to livestream
                        and on-demand, whenever
                    </p>
                </div>
                <div className="flex flex-col items-center text-center space-y-6">
                    <ThinkingIcon color="#4F46E8" />
                    <p className="lg:mx-8">
                        Top quality instructors and a global community of
                        student support
                    </p>
                </div>
                <div className="flex flex-col items-center justify-center text-center space-y-6">
                    <ReportIcon color="#4F46E8" />
                    <p className="lg:mx-8">
                        Proven mastery techniques and progress tracking with our
                        proprietary learning platform
                    </p>
                </div>
            </div>
        </div>
    </div>
);

const LeadersInEducationSection = () => (
    <div
        className="w-full py-10 px-16 lg:px-32 flex justify-center items-center"
        style={{
            background: 'linear-gradient(180deg, #EDEDFD 0%, #DCDAFA 100%)',
        }}
    >
        <div className="flex flex-col md:flex-row items-center justify-around space-x-0 space-y-12 md:space-y-0 md:space-x-16">
            <div className="space-y-6">
                <h2 className="text-gray-600 font-medium text-2xl">
                    Leaders in Education
                </h2>
                <p className="text-gray-500">
                    Learn from a diverse team with extensive teaching
                    experience. Your educators have been vetted from top U.S.
                    universities like Harvard, UC Berkeley, UCLA, and more.
                    Engage directly with our team of dedicated global and
                    community leaders.
                </p>
            </div>
            <img
                className="object-contain w-full md:w-1/2"
                src="/educator.png"
                alt="educator"
            />
        </div>
    </div>
);

const dummyDefinitionData = [
    {
        type: 'definition',
        concept: 'nucleus',
        content: 'the process of combining, the result is the "sum"',
        isLocked: true,
    },
    {
        type: 'definition',
        concept: 'proton',
        content:
            'the process of taking away or adding debt, the result is the "difference"',
        isLocked: true,
    },
];

const dummyMasteryData = [
    {
        type: 'mastery',
        content:
            'To become a master of this concept, you must be able do these tasks.',
        isLocked: true,
    },
    {
        type: 'mastery',
        content:
            'To become a master of this concept, you must be able do these tasks.',
        isLocked: true,
    },
];

const BetterWayToLearnSection = () => (
    <div className="flex flex-col-reverse lg:flex-row items-center justify-evenly space-x-0 md:space-x-16 m-16">
        <div className="flex justify-end lg:w-1/2 mt-12 lg:mt-0">
            <ConceptCard
                title="Atoms"
                definitionsData={dummyDefinitionData}
                masteryData={dummyMasteryData}
            />
        </div>
        <div className="flex flex-col justify-start lg:w-1/2 space-y-6">
            <h2 className="text-gray-600 font-medium text-2xl">
                A Better Way to Learn
            </h2>
            <p className="text-gray-500 w-full lg:w-3/4">
                Improve learning efficiency with our proven mastery techniques,
                which measure your ability to articulate a concept, rather than
                just a quiz score. Track your own progress with our automated
                learning platform.
            </p>
        </div>
    </div>
);

const AnytimeAnywhereSection = () => (
    <div className="flex flex-col lg:flex-row items-center justify-between space-x-0 space-y-12 md:space-y-8 md:space-x-16 mx-16 md:mx-32 lg:mr-0 my-16">
        <div className="flex flex-col justify-start space-y-6">
            <h2 className="text-gray-600 font-medium text-2xl">
                Anytime and Anywhere
            </h2>
            <p className="text-gray-500">
                Participate in weekly 60-minute livestreams or watch anytime
                on-demand. Enjoy unlimited access to our 30+ courses, with new
                courses added weekly.
            </p>
        </div>
        <img className="hidden lg:block object-contain lg:h-96 xl:h-full" style={{ maxHeight: '670px'}} src="livestream-computer.png" /> 
    </div>
);

const NowEnrollingBanner = () => (
  <div className="flex items-center justify-center pt-12 pb-24 mx-6">
    <div className="flex items-center w-5/6 border rounded p-10">
      <h3 className="text-xl text-gray-700">Now enrolling for November 30</h3>
    </div>
  </div>
);

const Home = () => (
    <div>
        <Head>
            <title>
                Emile | K-12 learning platform delivering mastery-based
                instruction
            </title>
            <meta
                name="description"
                content="Emile is an accredited global virtual K-12 school."
            />
        </Head>
        <div style={{ backgroundImage: `url('/Grid.svg')` }}>
            <Header2 />
            <div className="mx-auto max-w-screen-xl px-4 sm:mt-12 sm:px-6 lg:mt-20">
                <Hero />
                <img className="mt-12 pb-12 md:pb-32" src="/heroimage.jpg" />
            </div>
        </div>
        <main className="mx-auto max-w-screen-xl px-6 sm:mt-8 sm:px-12">
            <div className="flex flex-col sm:flex-row justify-between md:mb-8 lg:mb-20">
                <div className="space-y-6 md:mr-12">
                    <h3 className="text-2xl text-gray-600">
                        What do you want to learn?
                    </h3>
                    <p className="text-gray-500">
                        Enroll in our next cohort starting <span className="text-indigo-700">November 30</span>, or{' '}
                        <br className="hidden sm:block" />
                        view our 30+ AP courses across 7 categories.
                    </p>
                    {/* <button className="flex items-center space-x-2 text-indigo-600 focus:outline-none hover:text-indigo-500 font-semibold uppercase"> */}
                        {/* <span className="tracking-widest">explore courses</span> */}
                        {/* <FaArrowRight /> */}
                    {/* </button> */}
                </div>
                <UpcomingCourses />
            </div>
        </main>
        <ResultsSection />
        <LearningThatWorksSection />
        <LeadersInEducationSection />
        <BetterWayToLearnSection />
        <AnytimeAnywhereSection />
        <NowEnrollingBanner />
        <Footer />
    </div>
);

export default Home;
