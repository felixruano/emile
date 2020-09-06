function Footer() {
    return (
        <div className="bg-white">
            <div className="max-w-screen-xl mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8">
                <nav className="-mx-5 -my-2 flex flex-wrap justify-center">
                    <div className="px-5 py-2">
                        <a href="/mission" className="text-base leading-6 text-gray-500 hover:text-gray-900">
                            Our Mission
          </a>
                    </div>
                    <div className="px-5 py-2">
                        <a href="/model" className="text-base leading-6 text-gray-500 hover:text-gray-900">
                            Our Model
          </a>
                    </div>
                    <div className="px-5 py-2">
                        <a href="/team" className="text-base leading-6 text-gray-500 hover:text-gray-900">
                            Who We Are
          </a>
                    </div>
                    <div className="px-5 py-2">
                        <a href="/request" className="text-base leading-6 text-gray-500 hover:text-gray-900">
                            Request Info
          </a>
                    </div>

                </nav>
                <div className="mt-8">
                    <p className="text-center text-base leading-6 text-gray-400">
                        &copy; Emile
        </p>
                </div>
            </div>
        </div>
    )
}

export default Footer