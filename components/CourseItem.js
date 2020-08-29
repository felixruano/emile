import React from 'react'
import { default as NextLink } from 'next/link'
import { RichText } from 'prismic-reactjs'
import { hrefResolver, linkResolver } from '../prismic-configuration'

const CourseItem = ({ course }) => {
    var bg = require('../public/ed-vector-1.svg')
    return (
        <NextLink
            as={linkResolver(course)}
            href={hrefResolver(course)}
        >
            <div className="transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 flex flex-col rounded-lg shadow-lg overflow-hidden border border-indigo-600" style={{ backgroundImage: "url(" + bg + ")" }}>

                <div className="flex-1 p-6 flex flex-col justify-between">
                    <div className="flex-1">
                        <p className="text-sm leading-5 font-medium text-indigo-600">
                            <a href="#" className="hover:underline">
                                {RichText.asText(course.data.subject)}
                            </a>
                        </p>
                        <a href="#" className="block">
                            <h3 className="mt-2 text-xl leading-7 font-semibold text-gray-900">
                                {RichText.asText(course.data.course_title)}
                            </h3>
                            <h3 className="mt-2 text-l leading-7 font-regular text-gray-900">
                                {(course.data.price)}
                            </h3>
                            <p className="mt-3 text-base leading-6 text-gray-500">
                                Grades: {RichText.asText(course.data.grades)}
                            </p>
                        </a>
                    </div>
                </div>
            </div>
        </NextLink>
    )
}

export default CourseItem