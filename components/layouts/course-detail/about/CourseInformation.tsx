import { Box, SlideFade } from "@chakra-ui/react";

import { LearningThatWorkContent } from "@components/marketing/LearningThatWorks";
import { useAuth } from "@utils/hooks/use-auth";

import AvailableCoursesGrid from "./AvailableCourseGrid";
import ConceptGrid from "./ConceptGrid";
import InstructorInfo from "./InstructorInfo";
import Overview from "./Overview";

type CourseInformationProps = {
  isOpen: boolean;
  courseInfo: {
    [key: string]: any;
  }
}

const CourseInformation: React.FC<CourseInformationProps> = ({ isOpen = true, courseInfo }) => {
  const auth = useAuth();
  const { concepts_to_learn, course_title, course_long_description, course_stats, instructor_information } = courseInfo.data;
  const { text: title } = course_title[0];
  const { text } = course_long_description[0];
  const { number_of_students: numberOfStudents, number_of_weeks: numberOfWeeks, number_of_lessons: numberOfLessons } = course_stats[0];
  const { instructor_name: instructorName, instructor_type: instructorType, image } = instructor_information[0];
  const { text: shortBio } = instructor_information[0].short_bio[0];

  return (
    <SlideFade in={isOpen}>
      <Overview description={text} numberOfStudents={numberOfStudents} numberOfWeeks={numberOfWeeks} numberOfLessons={numberOfLessons} />
      <ConceptGrid concepts={concepts_to_learn} />
      <InstructorInfo imageSrc={image.url} name={instructorName} type={instructorType} course={title} shortBio={shortBio} />
      <AvailableCoursesGrid currentCourse={courseInfo.uid} />
      {!auth?.user && (<Box bg="#F7F7FF" py={16}>
        <LearningThatWorkContent />
      </Box>)}
    </SlideFade>
  )
}

export default CourseInformation;