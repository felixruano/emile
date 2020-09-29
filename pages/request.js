import Head from 'next/head'
import Header from '../components/Header'
import Banner from '../components/Banner'
import Footer from './Footer'
import PrimaryButton from "../components/PrimaryButton";

import { PHONE_NUMBER, EMAIL } from "../constants";

function Request() {
    const form = [
        {
            key: 'first_name',
            text: 'First Name',
            type: 'text',
            spanCol: false,
        },
        {
            key: 'last_name',
            text: 'Last Name',
            type: 'text',
            spanCol: false,
        },
        {
            key: 'email',
            text: 'Email',
            type: 'email',
            spanCol: true,
        },
        {
            key: 'phone_number',
            text: 'Phone Number',
            type: 'tel',
            spanCol: true,
        },
        {
            key: 'city',
            text: 'City',
            type: 'text',
            spanCol: false,
        },
    ];
    const formStateInputData = {
        key: 'state',
        text: 'State',
        stateArray: [
            'AL',
            'AK',
            'AZ',
            'AR',
            'CA',
            'CO',
            'CT',
            'DC',
            'DE',
            'FL',
            'GA',
            'HI',
            'ID',
            'IL',
            'IN',
            'IA',
            'KS',
            'KY',
            'LA',
            'ME',
            'MD',
            'MA',
            'MI',
            'MN',
            'MS',
            'MO',
            'MT',
            'NE',
            'NV',
            'NH',
            'NJ',
            'NM',
            'NY',
            'NC',
            'ND',
            'OH',
            'OK',
            'OR',
            'PA',
            'RI',
            'SC',
            'SD',
            'TN',
            'TX',
            'UT',
            'VT',
            'VA',
            'WA',
            'WV',
            'WI',
            'WY',
        ]
    };

    return <div className="antialiased">
        <Head>
            <title>Request Info</title>
            <meta property="og:title" content="Submit request for info" key="title"/>
        </Head>
        <Banner/>
        <Header/>
        <section className="pb-12 bg-white overflow-hidden md:pb-20 lg:pb-12">
            <div className="bg-white py-16 px-4 overflow-hidden sm:px-6 lg:px-8 lg:py-24">
                <div className="relative max-w-xl mx-auto">
                    <svg className="absolute left-full transform translate-x-1/2" width="404" height="404" fill="none"
                         viewBox="0 0 404 404">
                        <defs>
                            <pattern id="85737c0e-0916-41d7-917f-596dc7edfa27" x="0" y="0" width="20" height="20"
                                     patternUnits="userSpaceOnUse">
                                <rect x="0" y="0" width="4" height="4" className="text-gray-200" fill="currentColor"/>
                            </pattern>
                        </defs>
                        <rect width="404" height="404" fill="url(#85737c0e-0916-41d7-917f-596dc7edfa27)"/>
                    </svg>
                    <svg className="absolute right-full bottom-0 transform -translate-x-1/2" width="404" height="404"
                         fill="none" viewBox="0 0 404 404">
                        <defs>
                            <pattern id="85737c0e-0916-41d7-917f-596dc7edfa27" x="0" y="0" width="20" height="20"
                                     patternUnits="userSpaceOnUse">
                                <rect x="0" y="0" width="4" height="4" className="text-gray-200" fill="currentColor"/>
                            </pattern>
                        </defs>
                        <rect width="404" height="404" fill="url(#85737c0e-0916-41d7-917f-596dc7edfa27)"/>
                    </svg>
                    <div className="text-center">
                        <h2 className="text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10">
                            Let's get started
                        </h2>
                        <p className="mt-4 text-lg leading-6 text-gray-500">
                            Information below should be completed by parent/guardian. If you have any questions, you can
                            reach us at {EMAIL} or {" "}
                            <a href={`tel:${PHONE_NUMBER.href}`}
                               className="text-indigo-600 hover:text-indigo-500 focus:outline-none focus:shadow-outline transition ease-in-out duration-150">
                                {PHONE_NUMBER.text}
                            </a>
                        </p>
                    </div>
                    <div className="mt-12">
                        <form name="contact" action="/thankyou" method="POST"
                              className="grid grid-cols-1 row-gap-6 sm:grid-cols-2 sm:col-gap-8" netlify-honeypot="bot-field" data-netlify-recaptcha="true" data-netlify="true">
                            <input type="hidden" name="form-name" value="contact"/>
                            {form.map((formItem) => (
                                <div key={formItem.key} className={formItem.spanCol ? 'sm:col-span-2' : undefined}>
                                    <label htmlFor={formItem.key}
                                           className="block text-sm font-medium leading-5 text-gray-700">{formItem.text}</label>
                                    <div className="mt-1 relative rounded-md shadow-sm">
                                        <input name={formItem.key} id={formItem.key} type={formItem.type}
                                               className="form-input py-3 px-4 block w-full transition ease-in-out duration-150"
                                               required/>
                                    </div>
                                </div>
                            ))}
                            <div>
                                <label htmlFor={formStateInputData.key}
                                       className="block text-sm font-medium leading-5 text-gray-700">{formStateInputData.text}</label>
                                <div className="mt-1 relative rounded-md shadow-sm">
                                    <select name={formStateInputData.key}
                                            className="form-select py-3 px-4 block w-full bg-transparent text-gray-500 transition ease-in-out duration-150"
                                            defaultValue="DEFAULT"
                                            required>
                                        <option disabled hidden value="DEFAULT">-- select an option --
                                        </option>
                                        {formStateInputData.stateArray.map((state) => (
                                            <option key={state} value={state}>{state}</option>
                                        ))}
                                    </select>
                                </div>
                            </div>
                            <p className="hidden">
                                <label>Don’t fill this out if you're human: <input name="bot-field"/></label>
                            </p>
                            <div data-netlify-recaptcha="true"></div>
                            <div className="sm:col-span-2">
                                <PrimaryButton text="Submit" type="submit" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
        <Footer/>
    </div>
}

export default Request;