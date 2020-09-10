import React from 'react'
import TeamItem from './TeamItem'

const TeamList = ({ teammembers }) => {
    return (
        <ul className="mx-auto space-y-16 sm:grid sm:grid-cols-2 sm:gap-16 sm:space-y-0 lg:grid-cols-3 lg:max-w-5xl">
            {
                teammembers.results.map((teacher) => (
                    <TeamItem teacher={teacher} key={teacher.uid} />
                ))
            }
        </ul>
    )
}

export default TeamList