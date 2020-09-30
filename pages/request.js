import Head from 'next/head';
import Header from '../components/Header';
import Banner from '../components/Banner';
import Footer from './Footer';
import SquareDotsDesign from '../components/SquareDotsDesign';
import Form from "../components/Form";

import { PHONE_NUMBER, EMAIL } from '../constants';

function Request() {
    const getNextNYears = () => {
        const length = 7;
        const year = new Date().getFullYear() + 1;
        const tempArr = [year];
        for (let i = 1; i < length; i++) {
            const nextYear = year + i;
            tempArr.push(nextYear);
        }
        return tempArr;
    };

    const form = {
        formData: [
            {
                name: 'first_name',
                text: 'Student First Name',
                type: 'text',
                spanCol: false,
                required: true,
            },
            {
                name: 'last_name',
                text: 'Student Last Name',
                type: 'text',
                spanCol: false,
                required: true,
            },
            {
                name: 'school',
                text: 'School',
                type: 'text',
                spanCol: false,
                required: true,
            },
            {
                name: 'graduation_year',
                text: 'Graduation Year',
                options: getNextNYears(),
                required: true,
            },
            {
                name: 'email',
                text: 'Parent Email',
                type: 'email',
                spanCol: true,
                required: true,
            },
            {
                name: 'phone_number',
                text: 'Parent Phone Number',
                type: 'tel',
                spanCol: true,
                required: true,
            },
        ],
        formConsent: {
            id: 'consent',
            name: 'consent',
            value: 'consent',
            spanCol: true,
            text: "By clicking submit I'm giving Emile Learning permission to contact me directly.",
            required: true,
        }
    };

    return (
        <div className="antialiased">
            <Head>
                <title>Request Info</title>
                <meta
                    property="og:title"
                    content="Submit request for info"
                    key="title"
                />
            </Head>
            <Banner />
            <Header />
            <section className="pb-12 bg-white overflow-hidden md:pb-20 lg:pb-12">
                <div className="bg-white py-16 px-4 overflow-hidden sm:px-6 lg:px-8 lg:py-24">
                    <div className="relative max-w-xl mx-auto">
                        <SquareDotsDesign />
                        <SquareDotsDesign side="left" />
                        <div className="text-center">
                            <h2 className="text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10">
                                Let's get started
                            </h2>
                            <p className="mt-4 text-lg leading-6 text-gray-500">
                                Information below should be completed by
                                parent/guardian. If you have any questions, you
                                can reach us at {EMAIL} or{' '}
                                <a
                                    href={`tel:${PHONE_NUMBER.href}`}
                                    className="text-indigo-600 hover:text-indigo-500 focus:outline-none focus:shadow-outline transition ease-in-out duration-150"
                                >
                                    {PHONE_NUMBER.text}
                                </a>
                            </p>
                        </div>
                        <Form form={form} />
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    );
}

export default Request;
