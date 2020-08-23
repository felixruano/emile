import React from 'react'
import CourseItem from './CourseItem'

const CourseList = ({ courses }) => {
    return (
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mt-12 grid gap-5 max-w-lg mx-auto grid-cols-1 lg:grid-cols-4 lg:max-w-none">
                {courses.results.map((course) => (
                    <CourseItem course={course} key={course.uid} />
                ))}
            </div>
        </div>
    )
}

export default CourseList