import Head from 'next/head'
import Header from '../components/Header'

function Request() {
    return <div className="antialiased" >
        <Head>
            <title>Request Info</title>
            <meta property="og:title" content="My page title" key="title" />
        </Head>
        <Header />

        <section className="py-12 bg-white overflow-hidden md:pb-20 lg:pb-12">
            <div className="bg-white py-16 px-4 overflow-hidden sm:px-6 lg:px-8 lg:py-24">
                <div className="relative max-w-xl mx-auto">
                    <svg className="absolute left-full transform translate-x-1/2" width="404" height="404" fill="none" viewBox="0 0 404 404">
                        <defs>
                            <pattern id="85737c0e-0916-41d7-917f-596dc7edfa27" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                                <rect x="0" y="0" width="4" height="4" className="text-gray-200" fill="currentColor" />
                            </pattern>
                        </defs>
                        <rect width="404" height="404" fill="url(#85737c0e-0916-41d7-917f-596dc7edfa27)" />
                    </svg>
                    <svg className="absolute right-full bottom-0 transform -translate-x-1/2" width="404" height="404" fill="none" viewBox="0 0 404 404">
                        <defs>
                            <pattern id="85737c0e-0916-41d7-917f-596dc7edfa27" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                                <rect x="0" y="0" width="4" height="4" className="text-gray-200" fill="currentColor" />
                            </pattern>
                        </defs>
                        <rect width="404" height="404" fill="url(#85737c0e-0916-41d7-917f-596dc7edfa27)" />
                    </svg>
                    <div className="text-center">
                        <h2 className="text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10">
                            Please send me more info
            </h2>
                        <p className="mt-4 text-lg leading-6 text-gray-500">
                            Information below should be completed by parent/guardian. If you have any questions, you can reach us at team@hiemile.com.
            </p>
                    </div>
                    <div className="mt-12">
                        <form name="contact" action="/thankyou" method="POST" className="grid grid-cols-1 row-gap-6 sm:grid-cols-2 sm:col-gap-8" data-netlify="true">
                            <input type="hidden" name="form-name" value="contact" />
                            <div>
                                <label htmlFor="first_name" className="block text-sm font-medium leading-5 text-gray-700">First name</label>
                                <div className="mt-1 relative rounded-md shadow-sm">
                                    <input name="first_name" id="first_name" className="form-input py-3 px-4 block w-full transition ease-in-out duration-150"></input>
                                </div>
                            </div>
                            <div>
                                <label htmlFor="last_name" className="block text-sm font-medium leading-5 text-gray-700">Last name</label>
                                <div className="mt-1 relative rounded-md shadow-sm">
                                    <input name="last_name" id="last_name" className="form-input py-3 px-4 block w-full transition ease-in-out duration-150"></input>
                                </div>
                            </div>
                            <div className="sm:col-span-2">
                                <label htmlFor="email" className="block text-sm font-medium leading-5 text-gray-700">Email</label>
                                <div className="mt-1 relative rounded-md shadow-sm">
                                    <input name="email" id="email" type="email" className="form-input py-3 px-4 block w-full transition ease-in-out duration-150"></input>
                                </div>
                            </div>
                            <div className="sm:col-span-2">
                                <label htmlFor="phone_number" className="block text-sm font-medium leading-5 text-gray-700">Phone number</label>
                                <div className="mt-1 relative rounded-md shadow-sm">
                                    <input name="phone_number" id="phone_number" className="form-input py-3 px-4 block w-full transition ease-in-out duration-150" placeholder="+1 (555) 987-6543"></input>
                                </div>
                            </div>
                            <div>
                                <label htmlFor="student_first_name" className="block text-sm font-medium leading-5 text-gray-700">Student first name</label>
                                <div className="mt-1 relative rounded-md shadow-sm">
                                    <input name="student_first_name" id="student_first_name" className="form-input py-3 px-4 block w-full transition ease-in-out duration-150"></input>
                                </div>
                            </div>
                            <div>
                                <label htmlFor="student_last_name" className="block text-sm font-medium leading-5 text-gray-700">Student last name</label>
                                <div className="mt-1 relative rounded-md shadow-sm">
                                    <input name="student_last_name" id="student_last_name" className="form-input py-3 px-4 block w-full transition ease-in-out duration-150"></input>
                                </div>
                            </div>
                            <div className="sm:col-span-2">
                                <label htmlFor="student_email" className="block text-sm font-medium leading-5 text-gray-700">Student email</label>
                                <div className="mt-1 relative rounded-md shadow-sm">
                                    <input name="student_email" id="student_email" type="email" className="form-input py-3 px-4 block w-full transition ease-in-out duration-150"></input>
                                </div>
                            </div>
                            <div className="sm:col-span-2">
                                <label htmlFor="student_school" className="block text-sm font-medium leading-5 text-gray-700">Student school (attended Spring 2020)</label>
                                <div className="mt-1 relative rounded-md shadow-sm">
                                    <input name="student_school" id="student_school" className="form-input py-3 px-4 block w-full transition ease-in-out duration-150"></input>
                                </div>
                            </div>
                            <div>
                                <label htmlFor="city" className="block text-sm font-medium leading-5 text-gray-700">City</label>
                                <div className="mt-1 relative rounded-md shadow-sm">
                                    <input name="city" id="city" className="form-input py-3 px-4 block w-full transition ease-in-out duration-150"></input>
                                </div>
                            </div>
                            <div>
                                <label htmlFor="state" className="block text-sm font-medium leading-5 text-gray-700">State</label>
                                <div className="mt-1 relative rounded-md shadow-sm">
                                    <select name="state" aria-label="Country" class="form-select py-3 px-4 block w-full border-transparent bg-transparent text-gray-500 transition ease-in-out duration-150">
                                        <option>AL</option>
                                        <option>AK</option>
                                        <option>AZ</option>
                                        <option>AR</option>
                                        <option>CA</option>
                                        <option>CO</option>
                                        <option>CT</option>
                                        <option>DC</option>
                                        <option>DE</option>
                                        <option>FL</option>
                                        <option>GA</option>
                                        <option>HI</option>
                                        <option>ID</option>
                                        <option>IL</option>
                                        <option>IN</option>
                                        <option>IA</option>
                                        <option>KS</option>
                                        <option>KY</option>
                                        <option>LA</option>
                                        <option>ME</option>
                                        <option>MD</option>
                                        <option>MA</option>
                                        <option>MI</option>
                                        <option>MN</option>
                                        <option>MS</option>
                                        <option>MO</option>
                                        <option>MT</option>
                                        <option>NE</option>
                                        <option>NV</option>
                                        <option>NH</option>
                                        <option>NJ</option>
                                        <option>NM</option>
                                        <option>NY</option>
                                        <option>NC</option>
                                        <option>ND</option>
                                        <option>OH</option>
                                        <option>OK</option>
                                        <option>OR</option>
                                        <option>PA</option>
                                        <option>RI</option>
                                        <option>SC</option>
                                        <option>SD</option>
                                        <option>TN</option>
                                        <option>TX</option>
                                        <option>UT</option>
                                        <option>VT</option>
                                        <option>VA</option>
                                        <option>WA</option>
                                        <option>WV</option>
                                        <option>WI</option>
                                        <option>WY</option>
                                    </select>
                                </div>
                            </div>

                            <div className="sm:col-span-2">
                                <fieldset>
                                    <legend className="block text-sm font-medium leading-5 text-gray-700">
                                        Grade for Fall 2020
                              </legend>
                                    <div className="mt-4 grid grid-cols-5 row-gap-4">
                                        <div className="flex items-center">
                                            <input id="seventh_grade" name="grade" value="seventh_grade" type="radio" className="form-radio h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"></input>
                                            <label htmlFor="seventh_grade" className="ml-3">
                                                <span className="block text-sm leading-5 text-gray-700">7th</span>
                                            </label>
                                        </div>
                                        <div className="flex items-center">
                                            <input id="eighth_grade" name="grade" value="eighth_grade" type="radio" className="form-radio h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"></input>
                                            <label htmlFor="eighth_grade" className="ml-3">
                                                <span className="block text-sm leading-5 text-gray-700">8th</span>
                                            </label>
                                        </div>
                                        <div className="flex items-center">
                                            <input id="ninth_grade" name="grade" value="ninth_grade" type="radio" className="form-radio h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"></input>
                                            <label htmlFor="ninth_grade" className="ml-3">
                                                <span className="block text-sm leading-5 text-gray-700">9th</span>
                                            </label>
                                        </div>
                                        <div className="flex items-center">
                                            <input id="tenth_grade" name="grade" value="tenth_grade" type="radio" className="form-radio h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"></input>
                                            <label htmlFor="tenth_grade" className="ml-3">
                                                <span className="block text-sm leading-5 text-gray-700">10th</span>
                                            </label>
                                        </div>
                                        <div className="flex items-center">
                                            <input id="eleventh_grade" name="grade" value="eleventh_grade" type="radio" className="form-radio h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"></input>
                                            <label htmlFor="eleventh_grade" className="ml-3">
                                                <span className="block text-sm leading-5 text-gray-700">11th</span>
                                            </label>
                                        </div>
                                    </div>
                                </fieldset>
                            </div>

                            <div className="sm:col-span-2">
                                <fieldset>
                                    <legend className="block text-sm font-medium leading-5 text-gray-700">
                                        What brings you here today?
                              </legend>
                                    <div className="mt-4 grid grid-cols-1 row-gap-4">
                                        <div className="flex items-center">
                                            <input id="just_info" name="intention" value="just_info" type="radio" className="form-radio h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"></input>
                                            <label htmlFor="just_info" className="ml-3">
                                                <span className="block text-sm leading-5 text-gray-700">I'm just collecting information</span>
                                            </label>
                                        </div>
                                        <div className="flex items-center">
                                            <input id="actively_looking" name="intention" value="actively_looking" type="radio" className="form-radio h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"></input>
                                            <label htmlFor="actively_looking" className="ml-3">
                                                <span className="block text-sm leading-5 text-gray-700">I'm actively looking at school options for Fall 2020</span>
                                            </label>
                                        </div>
                                    </div>
                                </fieldset>
                            </div>

                            <div className="sm:col-span-2">
                                <fieldset>
                                    <legend className="block text-sm font-medium leading-5 text-gray-700">
                                        How would you like us to reach out?
                              </legend>
                                    <div className="mt-4 grid grid-cols-3 row-gap-4">
                                        <div className="flex items-center">
                                            <input id="email_comm" name="communication" value="email_comm" type="checkbox" className="form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"></input>
                                            <label htmlFor="email_comm" className="ml-3">
                                                <span className="block text-sm leading-5 text-gray-700">Email</span>
                                            </label>
                                        </div>
                                        <div className="flex items-center">
                                            <input id="phone_comm" name="communication" value="phone_comm" type="checkbox" className="form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"></input>
                                            <label htmlFor="phone_comm" className="ml-3">
                                                <span className="block text-sm leading-5 text-gray-700">Phone call</span>
                                            </label>
                                        </div>
                                        <div className="flex items-center">
                                            <input id="text_comm" name="communication" value="text_comm" type="checkbox" className="form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"></input>
                                            <label htmlFor="text_comm" className="ml-3">
                                                <span className="block text-sm leading-5 text-gray-700">Text</span>
                                            </label>
                                        </div>
                                    </div>
                                </fieldset>
                            </div>

                            <div className="sm:col-span-2">
                                <label htmlFor="options" className="block text-sm font-medium leading-5 text-gray-700">(Optional) What other school options are you exploring?</label>
                                <div className="mt-1 relative rounded-md shadow-sm">
                                    <input name="options" id="options" className="form-input py-3 px-4 block w-full transition ease-in-out duration-150"></input>
                                </div>
                            </div>

                            <div className="sm:col-span-2">
                                <label htmlFor="message" className="block text-sm font-medium leading-5 text-gray-700">Anything else you would like to share?</label>
                                <div className="mt-1 relative rounded-md shadow-sm">
                                    <textarea name="message" id="message" rows="4" className="form-textarea py-3 px-4 block w-full transition ease-in-out duration-150"></textarea>
                                </div>
                            </div>
                            <div className="sm:col-span-2">

                            </div>
                            <div className="sm:col-span-2">
                                <span className="w-full inline-flex rounded-md shadow-sm">
                                    <button type="submit" className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition ease-in-out duration-150">
                                        Let's talk
                                    </button>
                                </span>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>

    </div>
}

export default Request