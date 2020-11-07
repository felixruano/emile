import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useAuth } from '../utils/use-auth';

const MobileMenu = ({ auth, router, toggleMobileMenu }) => {
    const handleLogout = (e) => {
        e.preventDefault();
        auth.signOut();
        router.push('/');
    };

    return (
        <div class="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
            <div class="rounded-lg shadow-md">
                <div
                    class="rounded-lg bg-white shadow-xs overflow-hidden"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="main-menu"
                >
                    <div class="px-5 pt-4 flex items-center justify-between">
                        <Link href="/">
                            <div>
                                <a href="#" className="flex pb-2">
                                    <img
                                        className="w-auto h-5 sm:h-7"
                                        src="/emile_logo.svg"
                                        alt="Emile"
                                    />
                                </a>
                            </div>
                        </Link>
                        <div class="-mr-2">
                            <button
                                type="button"
                                class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
                                aria-label="Close menu"
                                onClick={toggleMobileMenu}
                            >
                                <svg
                                    class="h-6 w-6"
                                    stroke="currentColor"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>
                    {!auth?.user ? (
                        <div class="px-2 pt-2 pb-3 text-center">
                             <Link href="/courses">
                                <a
                                    href="#"
                                    class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50 transition duration-150 ease-in-out"
                                    role="menuitem"
                                >
                                    Explore Courses
                                </a>
                            </Link>
                            <Link href="/login">
                                <a
                                    href="#"
                                    class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50 transition duration-150 ease-in-out"
                                    role="menuitem"
                                >
                                    Log In
                                </a>
                            </Link>
                            <Link href="/signup">
                                <a
                                    href="#"
                                    class="mt-1 block px-3 bg-indigo-700 py-2 rounded-md text-base font-medium text-white hover:bg-indigo-500 focus:outline-none focus:bg-indigo-500 transition duration-150 ease-in-out"
                                    role="menuitem"
                                >
                                    Request Free Trial
                                </a>
                            </Link>
                        </div>
                    ) : (
                        <div className="px-2 pt-4 pb-3 space-y-2">
                            <div className="text-center">
                                <Link href="/profile">
                                    <a
                                        class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50 transition duration-150 ease-in-out"
                                        role="menuitem"
                                    >
                                        Account
                                    </a>
                                </Link>
                            </div>
                        </div>
                    )}
                </div>
                {auth?.user && (
                    <div>
                        <a
                            class="block w-full px-5 py-3 text-center font-medium text-red-600 bg-gray-50 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out"
                            role="menuitem"
                            onClick={handleLogout}
                        >
                            Sign Out
                        </a>
                    </div>
                )}
            </div>
        </div>
    );
};

const HamburgerMenu = ({ toggleMobileMenu }) => (
    <div className="-my-2 -mr-2 md:hidden" onClick={toggleMobileMenu}>
        <button className="inline-flex items-center justify-center p-2 text-gray-400 transition duration-150 ease-in-out rounded-md hover:text-gray-500 hover:bg-gray-100 focous:outline-none focus:bg-gray-100 focus:text-gray-500">
            <svg
                className="w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                />
            </svg>
        </button>
    </div>
);

const NavItem = ({ label, url, isMenu }) => (
    <div className="relative">
        <Link href={url}>
            <button className="inline-flex items-center space-x-2 text-base font-medium leading-6 text-gray-900 transition duration-150 ease-in-out group hover:text-gray-700 focus:outline-none focus:text-gray-700">
                <span className="uppercase">{label}</span>
                {/* {isMenu && (
                <svg
                    className="w-5 h-5 text-gray-400 transition duration-150 ease-in-out group-hover:text-gray-500 group-focus:text-gray-500"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                >
                    <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                    />
                </svg>
            )} */}
            </button>
        </Link>
    </div>
);

const Dropdown = ({ auth }) => {
    const router = useRouter();

    const handleLogout = (e) => {
        e.preventDefault();
        auth.signOut();
        router.push('/');
    };

    return (
        <div className="absolute right-0 w-64 mt-6 origin-top-right rounded-md shadow-lg">
            <div className="bg-white rounded-md shadow-xs">
                <div
                    className="py-1"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="options-menu"
                >
                    <Link href="/profile">
                        <a
                            className="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900"
                            role="menuitem"
                        >
                            Account
                        </a>
                    </Link>
                    <button
                        type="button"
                        className="block w-full px-4 py-2 text-sm leading-5 text-left text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900"
                        role="menuitem"
                        onClick={(e) => handleLogout(e)}
                    >
                        Sign out
                    </button>
                </div>
            </div>
        </div>
    );
};

const Header2 = () => {
    const router = useRouter();
    const auth = useAuth();
    const [showMenu, setShowMenu] = useState();
    const [showMobileMenu, setShowMobileMenu] = useState();

    const toggleMenu = () => setShowMenu(!showMenu);
    const toggleMobileMenu = () => setShowMobileMenu(!showMobileMenu);

    return (
        <div className="relative z-0 bg-white shadow">
            <div className="relative z-10 p-2">
                <div className="flex items-center justify-between px-4 py-5 mx-auto max-w-7xl sm:px-6 sm:py-4 lg:px-8 md:justify-start md:space-x-10">
                    <Link href="/">
                        <div>
                            <a href="#" className="flex pb-2">
                                <img
                                    className="w-auto h-5 sm:h-7"
                                    src="/emile_logo.svg"
                                    alt="Emile"
                                />
                            </a>
                        </div>
                    </Link>
                    <HamburgerMenu toggleMobileMenu={toggleMobileMenu} />
                    {showMobileMenu && (
                        <MobileMenu
                            auth={auth}
                            router={router}
                            toggleMobileMenu={toggleMobileMenu}
                        />
                    )}
                    <div className="justify-between hidden md:flex-1 md:flex md:items-center md:space-x-12">
                        <nav className="flex space-x-10">
                            <NavItem label="Explore Courses" url="/courses" isMenu />
                        </nav>
                        <div className="flex items-center space-x-8">
                            {!auth?.user ? (
                                <>
                                    {!router.asPath.includes('login') &&
                                        !router.asPath.includes('signup') && (
                                            <Link href="/login">
                                                <a
                                                    href="#"
                                                    className="text-base font-medium leading-6 text-gray-900 uppercase transition duration-150 ease-in-out hover:text-gray-700 focus:outline-none focus:text-gray-700"
                                                >
                                                    Log in
                                                </a>
                                            </Link>
                                        )}
                                    {!router.asPath.includes('signup') &&
                                        !router.asPath.includes('login') && (
                                            <Link href="/signup">
                                                <span className="inline-flex rounded-md shadow-sm">
                                                    <a
                                                        href="#"
                                                        className="inline-flex items-center justify-center px-4 py-2 text-base font-medium leading-6 text-white uppercase transition duration-150 ease-in-out bg-indigo-500 border border-transparent rounded-full hover:bg-indigo-400 hover:text-white focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700"
                                                    >
                                                        Request free trial
                                                    </a>
                                                </span>
                                            </Link>
                                        )}
                                </>
                            ) : (
                                !router.asPath.includes('signup') && (
                                    <div className="relative inline-block select-none">
                                        <div
                                            className="flex flex-row items-center w-auto p-2 rounded-full cursor-pointer hover:bg-gray-100"
                                            onClick={toggleMenu}
                                        >
                                            <img
                                                className="inline object-cover w-8 h-8 mr-2 rounded-full md:w-12 md:h-12"
                                                src={auth.user?.photoURL}
                                                alt="Profile image"
                                            />
                                            <h3 className="text-sm font-bold text-gray-800 uppercase md:text-base">
                                                {auth.user?.displayName}
                                            </h3>
                                        </div>
                                        <div className="relative z-10">
                                            {showMenu && (
                                                <Dropdown auth={auth} />
                                            )}
                                        </div>
                                    </div>
                                )
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header2;
