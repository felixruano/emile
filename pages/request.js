import Head from 'next/head'
import Header from '../components/Header'
import Banner from '../components/Banner'
import Footer from './Footer'

function Request() {
    return <div className="antialiased" >
        <Head>
            <title>Request Info</title>
            <meta property="og:title" content="Submit request for info" key="title" />
        </Head>

        <Banner />

        <Header />

        <section className="pb-12 bg-white overflow-hidden md:pb-20 lg:pb-12">
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
                            Let's get started
            </h2>
                        <p className="mt-4 text-lg leading-6 text-gray-500">
                            Information below should be completed by parent/guardian. If you have any questions, you can reach us at contact@hiemile.com or {" "}
                            <a href="tel:+1-424-228-8696" className="text-indigo-600 hover:text-indigo-500 focus:outline-none focus:shadow-outline transition ease-in-out duration-150">
                                (424) 228-8696
                        </a>
                        </p>
                    </div>
                    <div className="mt-12">
                        <form name="contact" action="/thankyou" method="POST" className="grid grid-cols-1 row-gap-6 sm:grid-cols-2 sm:col-gap-8" data-netlify="true">
                            <input type="hidden" name="form-name" value="contact" />
                            <div>
                                <label htmlFor="first_name" className="block text-sm font-medium leading-5 text-gray-700">First name</label>
                                <div className="mt-1 relative rounded-md shadow-sm">
                                    <input name="first_name" id="first_name" className="form-input py-3 px-4 block w-full transition ease-in-out duration-150" required></input>
                                </div>
                            </div>
                            <div>
                                <label htmlFor="last_name" className="block text-sm font-medium leading-5 text-gray-700">Last name</label>
                                <div className="mt-1 relative rounded-md shadow-sm">
                                    <input name="last_name" id="last_name" className="form-input py-3 px-4 block w-full transition ease-in-out duration-150" required></input>
                                </div>
                            </div>
                            <div className="sm:col-span-2">
                                <label htmlFor="email" className="block text-sm font-medium leading-5 text-gray-700">Email</label>
                                <div className="mt-1 relative rounded-md shadow-sm">
                                    <input name="email" id="email" type="email" className="form-input py-3 px-4 block w-full transition ease-in-out duration-150" required></input>
                                </div>
                            </div>
                            <div className="sm:col-span-2">
                                <label htmlFor="phone_number" className="block text-sm font-medium leading-5 text-gray-700" required>Phone number</label>
                                <div className="mt-1 relative rounded-md shadow-sm">
                                    <input name="phone_number" id="phone_number" className="form-input py-3 px-4 block w-full transition ease-in-out duration-150" placeholder="+1 (555) 987-6543"></input>
                                </div>
                            </div>
                            <div>
                                <label htmlFor="student_first_name" className="block text-sm font-medium leading-5 text-gray-700">Student first name</label>
                                <div className="mt-1 relative rounded-md shadow-sm">
                                    <input name="student_first_name" id="student_first_name" className="form-input py-3 px-4 block w-full transition ease-in-out duration-150" required></input>
                                </div>
                            </div>
                            <div>
                                <label htmlFor="student_last_name" className="block text-sm font-medium leading-5 text-gray-700">Student last name</label>
                                <div className="mt-1 relative rounded-md shadow-sm">
                                    <input name="student_last_name" id="student_last_name" className="form-input py-3 px-4 block w-full transition ease-in-out duration-150" required></input>
                                </div>
                            </div>
                            <div className="sm:col-span-2">
                                <label htmlFor="student_school" className="block text-sm font-medium leading-5 text-gray-700">School</label>
                                <div className="mt-1 relative rounded-md shadow-sm">
                                    <input name="student_school" id="student_school" className="form-input py-3 px-4 block w-full transition ease-in-out duration-150" required></input>
                                </div>
                            </div>
                            <div>
                                <label htmlFor="city" className="block text-sm font-medium leading-5 text-gray-700">City</label>
                                <div className="mt-1 relative rounded-md shadow-sm">
                                    <input name="city" id="city" className="form-input py-3 px-4 block w-full transition ease-in-out duration-150" required></input>
                                </div>
                            </div>
                            <div>
                                <label htmlFor="state" className="block text-sm font-medium leading-5 text-gray-700">State</label>
                                <div className="mt-1 relative rounded-md shadow-sm">
                                    <select name="state" className="form-select py-3 px-4 block w-full bg-transparent text-gray-500 transition ease-in-out duration-150">
                                        <option hidden disabled selected value> -- select an option -- </option>
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
                                <label htmlFor="class_request" className="block text-sm font-medium leading-5 text-gray-700">What classes are you interested in?</label>
                                <div className="mt-1 relative rounded-md shadow-sm">
                                    <input name="class_request" id="class_request" className="form-input py-3 px-4 block w-full transition ease-in-out duration-150" required></input>
                                </div>
                            </div>

                            <div className="sm:col-span-2">

                            </div>
                            <div className="sm:col-span-2">
                                <span className="w-full inline-flex rounded-md shadow-sm">
                                    <button type="submit" className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition ease-in-out duration-150">
                                        Submit
                                    </button>
                                </span>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>

        <Footer />

    </div>
}

export default Request