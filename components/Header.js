import { useState } from 'react'
import Transition from '../pages/Transition.js'
import Link from 'next/link'

function Header({ }) {
    const [open, setOpen] = useState(false);
    return (
        <div className="z-40 relative bg-white">
            <div className="max-w-screen-xl mx-auto">
                <div className="relative z-10 pb-2 bg-white sm:pb-16 md:pb-2 lg:max-w-2xl lg:w-full lg:pb-2 xl:pb-2">
                    <svg className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2" fill="currentColor" viewBox="0 0 100 100" preserveAspectRatio="none">
                        <polygon points="50,0 100,0 50,100 0,100" />
                    </svg>

                    <div className="relative pt-6 px-4 sm:px-6 lg:px-8">
                        <nav className="relative flex items-center justify-between sm:h-10 lg:justify-start">
                            <div className="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
                                <div className="flex items-center justify-between w-full md:w-auto">
                                    <Link href="/" ><a aria-label="Home">
                                        <img className="h-8 w-auto sm:h-10" src={require('../public/squarelogo.svg')} alt="Logo" />
                                    </a></Link>
                                    <div className="-mr-2 flex items-center md:hidden">
                                        <button type="button" onClick={() => setOpen(!open)} className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out" id="main-menu" aria-label="Main menu" aria-haspopup="true">
                                            <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="hidden md:block md:ml-10 md:pr-4">
                                <Link href="/mission"><a className="font-medium text-gray-500 hover:text-gray-900 transition duration-150 ease-in-out">Our Mission</a></Link>
                                <Link href="/model"><a className="ml-8 font-medium text-gray-500 hover:text-gray-900 transition duration-150 ease-in-out">Our Model</a></Link>
                                <Link href="/team"><a className="ml-8 font-medium text-gray-500 hover:text-gray-900 transition duration-150 ease-in-out">Who We Are</a></Link>
                                <Link href="/request"><a className="ml-8 font-medium text-indigo-600 hover:text-indigo-900 transition duration-150 ease-in-out">Request Info</a></Link>
                            </div>
                        </nav>
                    </div>


                    <Transition
                        show={open}
                        enter="duration-150 ease-out"
                        enterFrom="opacity-0 scale-95"
                        enterTo="opacity-100 scale-100"
                        leave="duration-100 ease-in"
                        leaveFrom="opacity-100 scale-100"
                        leaveTo="opacity-0 scale-95">

                        <div className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
                            <div className="rounded-lg shadow-md">
                                <div className="rounded-lg bg-white shadow-xs overflow-hidden" role="menu" aria-orientation="vertical" aria-labelledby="main-menu">
                                    <div className="px-5 pt-4 flex items-center justify-between">
                                        <div>
                                            <img className="h-8 w-auto sm:h-10" src={require('../public/squarelogo.svg')} alt="Logo" />
                                        </div>
                                        <div className="-mr-2">
                                            <button type="button" onClick={() => setOpen(!open)} className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out" aria-label="Close menu">
                                                <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                    <div className="px-2 pt-2 pb-3">
                                        <Link href="/mission"><a className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50 transition duration-150 ease-in-out" role="menuitem">Our Mission</a></Link>
                                        <Link href="/model"><a className="mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50 transition duration-150 ease-in-out" role="menuitem">Our Model</a></Link>
                                        <Link href="/team"><a className="mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50 transition duration-150 ease-in-out" role="menuitem">Who We Are</a></Link>

                                    </div>
                                    <div>
                                        <a href="/request" className="block w-full px-5 py-3 text-center font-medium text-indigo-600 bg-gray-50 hover:bg-gray-100 hover:text-indigo-700 focus:outline-none focus:bg-gray-100 focus:text-indigo-700 transition duration-150 ease-in-out" role="menuitem">
                                            Request Info
                    </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Transition>

                </div>
            </div>

        </div >
    )
}


export default Header