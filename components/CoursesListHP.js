import React from 'react'
import CourseItem from './CourseItem'

const CourseListHP = ({ courses }) => {
    return (
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="pt-12 lg:text-center">
                <p className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 text-base leading-6 text-indigo-600 font-semibold tracking-wide uppercase">Sample classes for credit</p>
            </div>
            <div className="mt-12 grid gap-5 max-w-lg mx-auto grid-cols-1 lg:grid-cols-3 lg:max-w-none">
                {courses.results.map((course) => (
                    <CourseItem course={course} key={course.uid} />
                ))}
            </div>
        </div>
    )
}

export default CourseListHP