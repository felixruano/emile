const HamburgerMenu = () => (
    <div className="-mr-2 -my-2 md:hidden">
        <button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focous:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out">
            <svg
                className="h-6 w-6"
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

const NavItem = ({ label, isMenu }) => (
    <div className="relative">
        <button className="text-gray-500 group inline-flex items-center space-x-2 text-base leading-6 font-medium hover:text-gray-900 focus:outline-none focus:text-gray-900 transition ease-in-out duration-150">
            <span className="uppercase">{label}</span>
            {isMenu && (
                <svg
                    class="text-gray-400 h-5 w-5 group-hover:text-gray-500 group-focus:text-gray-500 transition ease-in-out duration-150"
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
            )}
        </button>
    </div>
);

const Header2 = () => (
    <div className="z-0 relative">
        <div className="md:pt-10 relative z-10">
            <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-5 sm:px-6 sm:py-4 lg:px-8 md:justify-start md:space-x-10">
                <div>
                    <a href="#" className="flex pb-2">
                        <img
                            className="h-5 w-auto sm:h-7"
                            src="/emile_logo.svg"
                            alt="Emile"
                        />
                    </a>
                </div>
                {/* <HamburgerMenu /> */}
                {/* <div className="hidden md:flex-1 md:flex md:items-center md:justify-between md:space-x-12">
                    <nav className="flex space-x-10">
                        <NavItem label="Explore Courses" isMenu />
                    </nav> */}
                    {/* Uncomment when account creation is available */}
                    {/* <div className="flex items-center space-x-8">
                        <a
                            href="#"
                            class="text-base leading-6 font-medium uppercase text-gray-500 hover:text-gray-900 focus:outline-none focus:text-gray-900 transition ease-in-out duration-150"
                        >
                            Log in
                        </a>
                        <span class="inline-flex rounded-md shadow-sm">
                            <a
                                href="#"
                                class="inline-flex items-center justify-center px-4 py-2 border border-transparent text-base leading-6 font-medium uppercase rounded-md text-indigo-600 border-indigo-600 hover:bg-indigo-500 hover:text-white focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition ease-in-out duration-150"
                            >
                                Request free trial
                            </a>
                        </span>
                    </div> */}
                {/* </div> */}
            </div>
        </div>
    </div>
);

export default Header2;
