function Carousel() {
    var bg = require('../public/ed-vector-1.svg')
    return (
        <div className="scrolling-wrapper-flexbox p-6" >
            <div className="card rounded-lg shadow-lg border border-indigo-600" style={{ backgroundImage: "url(" + bg + ")" }}>
                <div className="flex-1 p-6 flex flex-col justify-between">
                    <div className="flex-1">
                        <p className="text-sm leading-5 font-medium text-indigo-600">
                            <a href="#" className="hover:underline">
                                Math
                    </a>
                        </p>
                        <a href="#" className="block">
                            <h3 className="mt-2 text-xl leading-7 font-semibold text-gray-900">
                                Algebra 1
                    </h3>
                            <p className="mt-3 text-base leading-6 text-gray-500">
                                Grades: 8, 9
                    </p>
                        </a>
                    </div>
                </div>
            </div>
            <div className="card rounded-lg shadow-lg border border-indigo-600" style={{ backgroundImage: "url(" + bg + ")" }}>
                <div className="flex-1 p-6 flex flex-col justify-between">
                    <div className="flex-1">
                        <p className="text-sm leading-5 font-medium text-indigo-600">
                            <a href="#" className="hover:underline">
                                Math
                    </a>
                        </p>
                        <a href="#" className="block">
                            <h3 className="mt-2 text-xl leading-7 font-semibold text-gray-900">
                                Geometry
                    </h3>
                            <p className="mt-3 text-base leading-6 text-gray-500">
                                Grades: 8, 9, 10
                    </p>
                        </a>
                    </div>
                </div>
            </div>
            <div className="card rounded-lg shadow-lg border border-indigo-600" style={{ backgroundImage: "url(" + bg + ")" }}>
                <div className="flex-1 p-6 flex flex-col justify-between">
                    <div className="flex-1">
                        <p className="text-sm leading-5 font-medium text-indigo-600">
                            <a href="#" className="hover:underline">
                                Math
                </a>
                        </p>
                        <a href="#" className="block">
                            <h3 className="mt-2 text-xl leading-7 font-semibold text-gray-900">
                                Precalculus
                </h3>
                            <p className="mt-3 text-base leading-6 text-gray-500">
                                Grades: 11, 12
                </p>
                        </a>
                    </div>
                </div>
            </div>
            <div className="card rounded-lg shadow-lg border border-blue-600" style={{ backgroundImage: "url(" + bg + ")" }}>
                <div className="flex-1 p-6 flex flex-col justify-between">
                    <div className="flex-1">
                        <p className="text-sm leading-5 font-medium text-blue-600">
                            <a href="#" className="hover:underline">
                                Science
                </a>
                        </p>
                        <a href="#" className="block">
                            <h3 className="mt-2 text-xl leading-7 font-semibold text-gray-900">
                                Life Sciences
                </h3>
                            <p className="mt-3 text-base leading-6 text-gray-500">
                                Grades: 7, 8
                </p>
                        </a>
                    </div>
                </div>
            </div>
            <div className="card rounded-lg shadow-lg border border-blue-600" style={{ backgroundImage: "url(" + bg + ")" }}>
                <div className="flex-1 p-6 flex flex-col justify-between">
                    <div className="flex-1">
                        <p className="text-sm leading-5 font-medium text-blue-600">
                            <a href="#" className="hover:underline">
                                Science
                </a>
                        </p>
                        <a href="#" className="block">
                            <h3 className="mt-2 text-xl leading-7 font-semibold text-gray-900">
                                Biology
                </h3>
                            <p className="mt-3 text-base leading-6 text-gray-500">
                                Grades: 9, 10
                </p>
                        </a>
                    </div>
                </div>
            </div>
            <div className="card rounded-lg shadow-lg border border-blue-600" style={{ backgroundImage: "url(" + bg + ")" }}>
                <div className="flex-1 p-6 flex flex-col justify-between">
                    <div className="flex-1">
                        <p className="text-sm leading-5 font-medium text-blue-600">
                            <a href="#" className="hover:underline">
                                Science
                </a>
                        </p>
                        <a href="#" className="block">
                            <h3 className="mt-2 text-xl leading-7 font-semibold text-gray-900">
                                Chemistry
                </h3>
                            <p className="mt-3 text-base leading-6 text-gray-500">
                                Grades: 10, 11, 12
                </p>
                        </a>
                    </div>
                </div>
            </div>
            <div className="card rounded-lg shadow-lg border border-orange-600" style={{ backgroundImage: "url(" + bg + ")" }}>
                <div className="flex-1 p-6 flex flex-col justify-between">
                    <div className="flex-1">
                        <p className="text-sm leading-5 font-medium text-orange-600">
                            <a href="#" className="hover:underline">
                                History
                </a>
                        </p>
                        <a href="#" className="block">
                            <h3 className="mt-2 text-xl leading-7 font-semibold text-gray-900">
                                Ancient Civilizations
                </h3>
                            <p className="mt-3 text-base leading-6 text-gray-500">
                                Grades: 7, 8
                </p>
                        </a>
                    </div>
                </div>
            </div>
            <div className="card rounded-lg shadow-lg border border-orange-600" style={{ backgroundImage: "url(" + bg + ")" }}>
                <div className="flex-1 p-6 flex flex-col justify-between">
                    <div className="flex-1">
                        <p className="text-sm leading-5 font-medium text-orange-600">
                            <a href="#" className="hover:underline">
                                History
                </a>
                        </p>
                        <a href="#" className="block">
                            <h3 className="mt-2 text-xl leading-7 font-semibold text-gray-900">
                                World History
                </h3>
                            <p className="mt-3 text-base leading-6 text-gray-500">
                                Grades: 9
                </p>
                        </a>
                    </div>
                </div>
            </div>
            <div className="card rounded-lg shadow-lg border border-orange-600" style={{ backgroundImage: "url(" + bg + ")" }}>
                <div className="flex-1 p-6 flex flex-col justify-between">
                    <div className="flex-1">
                        <p className="text-sm leading-5 font-medium text-orange-600">
                            <a href="#" className="hover:underline">
                                History
                </a>
                        </p>
                        <a href="#" className="block">
                            <h3 className="mt-2 text-xl leading-7 font-semibold text-gray-900">
                                US History
                </h3>
                            <p className="mt-3 text-base leading-6 text-gray-500">
                                Grades: 10, 11
                </p>
                        </a>
                    </div>
                </div>
            </div>
            <div className="card rounded-lg shadow-lg border border-green-600" style={{ backgroundImage: "url(" + bg + ")" }}>
                <div className="flex-1 p-6 flex flex-col justify-between">
                    <div className="flex-1">
                        <p className="text-sm leading-5 font-medium text-green-600">
                            <a href="#" className="hover:underline">
                                English
                </a>
                        </p>
                        <a href="#" className="block">
                            <h3 className="mt-2 text-xl leading-7 font-semibold text-gray-900">
                                English Literature and Composition
                </h3>
                            <p className="mt-3 text-base leading-6 text-gray-500">
                                Grades: 10, 11, 12
                </p>
                        </a>
                    </div>
                </div>
            </div>
            <div className="card rounded-lg shadow-lg border border-green-600" style={{ backgroundImage: "url(" + bg + ")" }}>
                <div className="flex-1 p-6 flex flex-col justify-between">
                    <div className="flex-1">
                        <p className="text-sm leading-5 font-medium text-green-600">
                            <a href="#" className="hover:underline">
                                English
                </a>
                        </p>
                        <a href="#" className="block">
                            <h3 className="mt-2 text-xl leading-7 font-semibold text-gray-900">
                                Expository Writing and Research
                </h3>
                            <p className="mt-3 text-base leading-6 text-gray-500">
                                Grades: 11, 12
                </p>
                        </a>
                    </div>
                </div>
            </div>


            <style jsx>{`
                .scrolling-wrapper-flexbox {
                scroll-snap-type: x mandatory;
                display: flex;
                overflow-x: scroll;
                }
              
                .card {
                min-width: 200px;
                min-height: 250px;
                margin: 5px;
                scroll-snap-align: center;
                }

            `}</style>
        </div>
    )
}

export default Carousel