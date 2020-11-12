import { useEffect } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';

import Header from '@components/Header';
import Hero from '@components/Hero';
import UpcomingCourses from '@components/UpcomingCourses';
import ConceptCard from '@components/ConceptCard';
import Footer from '@components/Footer';
import CircleDotPattern from '@components/background-patterns/CircleDotPattern';
import useWindowDimensions from '@utils/use-window-dimensions';
import CustomLink from '@components/CustomLink';
import SignUpButton from '@components/SignUpButton';
import LearningThatWorks from '@components/marketing/LearningThatWorks';
import CustomCountdown from '@components/CustomCountdown';

const WhatStudentsAreSayingSection = () => (
    <div className="px-3 pt-16">
        <h3 className="text-3xl font-semibold text-center text-gray-800">
            What students are saying
        </h3>
        <div className="flex flex-col items-center justify-center py-8 space-y-16 text-indigo-800 md:space-x-12 md:py-16 md:items-start md:flex-row">
            <div className="text-xs text-gray-500 align-items">
                <img
                    className="rounded-full h-80"
                    src="/starrandrews.png?nf_resize=smartcrop&w=300&h=300"
                />
                <p className="text-center">
                    Photo: Jay Adeff/U.S. Figure Skating
                </p>
            </div>
            <div className="flex flex-col justify-center space-y-8">
                <p className="max-w-sm text-xl text-center md:text-left">
                    "I'm excited to promote a platform that will give students
                    around the world a place to learn and connect!”
                </p>
                <div className="space-y-2 text-center md:text-left">
                    <p className="font-semibold text-gray-800 justify-self-start">
                        Starr Andrews
                    </p>
                    <p className="text-gray-500">
                        Team USA Figure Skater, Emile Ambassador
                    </p>
                </div>
            </div>
        </div>
    </div>
);

const ResultsSection = () => (
    <div
        className="flex items-center justify-center w-full px-3 md:p-10"
        style={{
            background: "url('/curved-background-green.png')",
            backgroundSize: '100% 85%',
            backgroundRepeat: 'no-repeat',
        }}
    >
        <div className="max-w-xl text-white bg-white border border-gray-100 rounded shadow-xl">
            <div className="flex flex-col items-center text-gray-800">
                <img
                    className="object-fill my-8 rounded-full shadow-xl h-72"
                    src="/graduates.png?nf_resize=smartcrop&w=300&h=300"
                />
                <h2 className="text-4xl font-semibold">
                    Get Measurable Results
                </h2>
                <p className="px-4 mx-6 my-4 text-center text-gray-700">
                    Score a 3+ on your AP exams to save thousands in college
                    tuition, or we’ll give you 3 free months. The best part?
                    We’re only <span className="font-bold">$19.99/month.</span>
                </p>
                <div className="my-8">
                    <SignUpButton
                        text="Get Started"
                        bgColor="#35656D"
                        actionBgColor="#468F99"
                    />
                </div>
            </div>
        </div>
    </div>
);

const LeadersInEducationSection = () => {
    const { width } = useWindowDimensions();

    return (
        <div
            className="w-full"
            style={{
                background: "url('curved-background-yellow.png')",
                backgroundSize: width < 700 ? 'cover' : '100% 100%',
            }}
        >
            <div className="flex flex-col items-center justify-center px-8 pt-32 pb-48 space-x-0 space-y-12 md:p-32 md:flex-row md:space-y-0 md:space-x-24">
                <img
                    className="object-contain w-3/4 md:w-1/3"
                    src="/educator.png?nf_resize=smartcrop&w=300&h=300"
                    alt="educator"
                />
                <div className="max-w-lg space-y-6 text-center md:text-left">
                    <h2 className="text-2xl font-medium text-gray-600">
                        Leaders in Education
                    </h2>
                    <p className="text-gray-500">
                        Learn from a diverse team with extensive teaching
                        experience. Your educators have been vetted from top
                        U.S. universities like Harvard, UC Berkeley, UCLA, and
                        more. Engage directly with our team of dedicated global
                        and community leaders.
                    </p>
                    <CustomLink
                        href="/signup"
                        color="yellow.400"
                        text="Request Free Trial"
                        hasArrow={true}
                    />
                </div>
            </div>
        </div>
    );
};

const dummyDefinitionData = [
    {
        index: 'definition-nucleus',
        type: 'definition',
        concept: 'nucleus',
        content: 'the process of combining, the result is the "sum"',
        isLocked: true,
    },
    {
        index: 'definition-proton',
        type: 'definition',
        concept: 'proton',
        content:
            'the process of taking away or adding debt, the result is the "difference"',
        isLocked: true,
    },
];

const dummyMasteryData = [
    {
        index: 'mastery-1',
        type: 'mastery',
        content:
            'To become a master of this concept, you must be able do these tasks.',
        isLocked: true,
    },
    {
        index: 'mastery-2',
        type: 'mastery',
        content:
            'To become a master of this concept, you must be able do these tasks.',
        isLocked: true,
    },
];

const BetterWayToLearnSection = () => {
    const { width } = useWindowDimensions();

    return (
        <div
            className="flex flex-col items-center px-8 pb-24 space-x-0 md:px-32 md:py-16 justify-evenly lg:flex-row-reverse bg-gray-50 md:space-x-16"
            style={{
                backgroundImage: "url('ellipses-purple.png')",
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center right',
                backgroundSize: width > 700 ? 'contain' : '0 0',
            }}
        >
            <div className="flex justify-center mt-12 lg:w-1/2 lg:mt-0">
                <ConceptCard
                    title="Atoms"
                    definitionsData={dummyDefinitionData}
                    masteryData={dummyMasteryData}
                />
            </div>
            <div className="space-y-8 text-center lg:w-1/2 md:text-left">
                <h2 className="text-2xl font-medium text-gray-800">
                    A Better Way to Learn
                </h2>
                <p className="w-full text-gray-500 lg:w-3/4">
                    Improve learning efficiency with our proven mastery
                    techniques, which measure your ability to articulate a
                    concept, rather than just a quiz score. Track your own
                    progress with our automated learning platform.
                </p>
                <CustomLink
                    href="/signup"
                    color="indigo.600"
                    text="Request Free Trial"
                    hasArrow={true}
                />
            </div>
        </div>
    );
};

const AnytimeAnywhereSection = () => (
    <div className="flex flex-col items-center justify-between mx-16 my-16 space-x-0 space-y-12 lg:flex-row md:space-y-8 md:space-x-16 md:mx-48 lg:mr-0">
        <div className="space-y-6 text-center md:text-left">
            <h2 className="text-2xl font-medium text-gray-800">
                Anytime and Anywhere
            </h2>
            <p className="max-w-lg text-gray-600">
                Participate in weekly 60-minute livestreams or watch anytime
                on-demand. Enjoy unlimited access to our 30+ courses, with new
                courses added weekly.
            </p>
            <CustomLink
                href="/signup"
                color="indigo.700"
                text="Request Free Trial"
                hasArrow={true}
            />
        </div>
        <img
            className="hidden object-contain lg:block lg:h-96 xl:h-full"
            style={{ maxHeight: '670px' }}
            src="livestream-computer.png?nf_resize=smartcrop&w=300&h=300"
        />
    </div>
);

const NowEnrollingBanner = () => (
    <div className="flex items-center justify-center p-16">
        <div className="p-16 bg-white border border-gray-100 rounded shadow-lg md:p-24">
            <div className="flex flex-col items-center justify-center space-y-8">
                <h3 className="text-xl font-semibold text-center text-gray-800 md:text-2xl">
                    Now enrolling for November 30
                </h3>
                <SignUpButton
                    text="Get Started"
                    bgColor="indigo.600"
                    actionBgColor="indigo.500"
                />
            </div>
        </div>
    </div>
);

const Home = () => {
    const router = useRouter();

    useEffect(() => {
        if (router?.query?.referral_code)
            window.localStorage.setItem(
                'referral_code',
                // @ts-ignore
                router.query.referral_code
            );
    }, [router]);

    return (
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
            <div className="bg-gray-50">
                <Header />
                <div className="flex justify-end px-32">
                    <CircleDotPattern />
                </div>
                <div className="max-w-screen-xl px-4 mx-auto sm:mt-12 sm:px-6 lg:mt-20">
                    <Hero />
                </div>
            </div>
            <main className="bg-gray-50">
                <div
                    className="flex flex-col items-center md:pb-16"
                    style={{
                        backgroundImage: "url('ellipses.svg')",
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'left top',
                        backgroundSize: '32%',
                    }}
                >
                    <img
                        className="w-full h-full mt-16 md:mt-24 md:w-5/6 xl:w-3/4"
                        src="/heroimage2.png?nf_resize=smartcrop&w=300&h=300"
                    />
                    <CustomCountdown />
                </div>
                <LearningThatWorks />
                <div className="w-full px-3 mt-16 lg:mt-0 md:px-16 xl:px-32">
                    <div className="flex flex-col justify-between md:flex-row md:mb-8 lg:mb-20">
                        <div className="px-6 space-y-6 text-center md:text-left md:items-start md:mr-12 sm:mt-8 sm:px-12">
                            <h3 className="text-2xl font-semibold text-gray-800">
                                What do you want to learn?
                            </h3>
                            <p className="text-gray-500">
                                Enroll in our next cohort starting{' '}
                                <span className="text-indigo-700">
                                    November 30{' '}
                                </span>
                                along with <br className="hidden sm:block" />
                                30+ incoming AP courses across 7 categories.
                            </p>
                            <CustomLink
                                href="/courses"
                                color="indigo.600"
                                text="Explore Courses"
                                hasArrow={true}
                            />
                        </div>
                        <UpcomingCourses />
                    </div>
                </div>
                <ResultsSection />
                <BetterWayToLearnSection />
                <LeadersInEducationSection />
                <AnytimeAnywhereSection />
                <NowEnrollingBanner />
                <div
                    className="w-full"
                    style={{
                        backgroundImage: "url('ellipses-purple-light.png')",
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'contain',
                    }}
                >
                    <WhatStudentsAreSayingSection />
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default Home;
