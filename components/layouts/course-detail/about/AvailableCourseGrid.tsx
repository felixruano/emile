import { useState, useEffect } from 'react';
import Prismic from 'prismic-javascript';
import { Center, Heading, Wrap, WrapItem } from "@chakra-ui/react";
import GenericCourseCard from "@components/cards/GenericCourseCard";
import { Client } from 'prismic-configuration';
import { useRouter } from 'next/router';
import { useQuery } from 'react-query';

type AvailableCourseGridProps = {
  currentCourse: string;
}

const AvailableCoursesGrid: React.FC<AvailableCourseGridProps> = ({ currentCourse }): any => {
  const { isLoading, error, data: courses } = useQuery('availableCourseData', () => Client().query([Prismic.Predicates.not('my.course.uid', currentCourse), Prismic.Predicates.at('document.type', 'course')]));
  const router = useRouter();

  if (isLoading) return 'Loading...';

  if (error) return 'An error has occured: ';

  const handleCourseClick = (course = '') => {
    void router.push(`/courses/${course}`).then(() => window.scrollTo(0, 0));
  }

  if (courses) {
    return (
      <Center py={16} flexDirection="column">
        <Heading as="h3" fontWeight={600} fontSize="32px" textAlign="center">View Other Courses</Heading>
        <Wrap mt={12} spacing={[4, null, 24]} justify="center" align="center">
          {courses?.results?.map((course) => {
            const { course_image, course_title, course_stats, instructor_information } = course.data;
            const courseInfo = {
              uid: course.uid,
              imageSrc: course_image.url,
              numberOfStudents: course_stats[0].number_of_students,
              title: course_title[0].text,
              instructorName: instructor_information[0].instructor_name
            }
            return (
              <WrapItem key={courseInfo.title}>
                <GenericCourseCard handleCourseClick={handleCourseClick} isLoaded={!isLoading} {...courseInfo} />
              </WrapItem>
            )
          })}
        </Wrap>
      </Center>
    )
  }

  return (
    <Center py={16} flexDirection="column">
      <Heading as="h3" fontWeight={600} fontSize="32px" textAlign="center">View Other Courses</Heading>
      <Wrap mt={12} spacing={24} justify="center" align="center">
        <WrapItem>
          <GenericCourseCard handleCourseClick={handleCourseClick} isLoaded={false} />
        </WrapItem>
        <WrapItem>
          <GenericCourseCard handleCourseClick={handleCourseClick} isLoaded={false} />
        </WrapItem>
      </Wrap>
    </Center>
  )
}

export default AvailableCoursesGrid;