import Header from '../components/Header'

function Team() {
    return <div className="antialiased" >
        <Header />

        <section className="py-12 bg-white overflow-hidden md:pb-20 lg:pb-24">
            <div className="relative bg-gray-50 pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
                <div className="absolute inset-0">
                    <div className="bg-white h-1/3 sm:h-2/3"></div>
                </div>
                <div className="relative max-w-7xl mx-auto">
                    <div className="text-center">
                        <h2 className="text-3xl leading-9 tracking-tight font-extrabold text-gray-900 sm:text-4xl sm:leading-10">
                            Our Team
      </h2>
                        <p className="mt-3 max-w-2xl mx-auto text-xl leading-7 text-gray-500 sm:mt-4">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa libero labore natus atque, ducimus sed.
      </p>
                    </div>
                    <div className="mt-12 grid gap-10 max-w-lg mx-auto lg:grid-cols-3 lg:max-w-none">
                        <div className="flex flex-col rounded-lg shadow-lg overflow-hidden items-center">
                            <div className="flex-shrink-0">
                                <img className="h-64 w-64 rounded-full object-cover" src="/felix.jpg?nf_resize=fit&h=500" alt="" />
                            </div>

                            <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                                <div className="flex-1">

                                    <h3 className="mt-2 text-xl leading-7 font-semibold text-gray-900 text-center">
                                        Felix Ruano
              </h3>
                                    <h3 className="mt-2 text-xl leading-7 text-gray-500 text-center">
                                        CEO
              </h3>
                                    <p className="mt-3 text-base leading-6 text-gray-500">
                                        Orem ipsum dolor sit amet consectetur adipisicing elit. Architecto accusantium praesentium eius, ut atque fuga culpa, similique sequi cum eos quis dolorum.
              </p>

                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col rounded-lg shadow-lg overflow-hidden items-center">
                            <div className="flex-shrink-0">
                                <img className="h-64 w-64 rounded-full object-cover" src="/felix.jpg?nf_resize=fit&h=500" alt="" />
                            </div>

                            <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                                <div className="flex-1">

                                    <h3 className="mt-2 text-xl leading-7 font-semibold text-gray-900 text-center">
                                        Lidia Medina
              </h3>
                                    <h3 className="mt-2 text-xl leading-7 text-gray-500 text-center">
                                        COO
              </h3>
                                    <p className="mt-3 text-base leading-6 text-gray-500">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto accusantium praesentium eius, ut atque fuga culpa, similique sequi cum eos quis dolorum.
              </p>

                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col rounded-lg shadow-lg overflow-hidden items-center">
                            <div className="flex-shrink-0">
                                <img className="h-64 w-64 rounded-full object-cover" src="/felix.jpg?nf_resize=fit&h=500" alt="" />
                            </div>

                            <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                                <div className="flex-1">

                                    <h3 className="mt-2 text-xl leading-7 font-semibold text-gray-900 text-center">
                                        Johnny Duda
              </h3>
                                    <h3 className="mt-2 text-xl leading-7 text-gray-500 text-center">
                                        Chief Academic Officer
              </h3>
                                    <p className="mt-3 text-base leading-6 text-gray-500">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto accusantium praesentium eius, ut atque fuga culpa, similique sequi cum eos quis dolorum.
              </p>

                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </div>

        </section>

    </div>
}

export default Team