import { Box } from "@chakra-ui/react";

import { LearningThatWorkContent } from "@components/marketing/LearningThatWorks";

import AvailableCoursesGrid from "./AvailableCourseGrid";
import ConceptGrid from "./ConceptGrid";
import InstructorInfo from "./InstructorInfo";
import Overview from "./Overview";

type CourseInformationProps = {
  courseInfo: Record<string, unknown>;
}

const CourseInformation: React.FC<CourseInformationProps> = ({ courseInfo }) => {
  const { course_title, course_long_description, course_stats, instructor_information } = courseInfo.data;
  const { text: title } = course_title[0];
  const { text } = course_long_description[0];
  const { number_of_students: numberOfStudents, number_of_weeks: numberOfWeeks, number_of_lessons: numberOfLessons } = course_stats[0];
  const { instructor_name: instructorName, instructor_type: instructorType } = instructor_information[0];
  const { text: shortBio } = instructor_information[0].short_bio[0];

  return (
    <>
      <Overview description={text} numberOfStudents={numberOfStudents} numberOfWeeks={numberOfWeeks} numberOfLessons={numberOfLessons} />
      <ConceptGrid />
      <InstructorInfo name={instructorName} type={instructorType} course={title} shortBio={shortBio} />
      <AvailableCoursesGrid />
      <Box py={16}>
        <LearningThatWorkContent />
      </Box>
    </>
  )
}

export default CourseInformation;