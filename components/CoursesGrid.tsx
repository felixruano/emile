import { useQuery } from "react-query";
import Prismic from 'prismic-javascript';
import { Box, Center, Heading, SimpleGrid } from "@chakra-ui/react";

import { Client } from "prismic-configuration";
import useWindowDimensions from "@utils/hooks/use-window-dimensions";
import CourseCard from "./CourseCard";

const CoursesGrid = () => {
  const { isLoading, error, data: courses } = useQuery('course_grid', () => Client().query(Prismic.Predicates.at('document.type', 'coursecard')));
  const { width } = useWindowDimensions();

  if (isLoading) return <div>'Loading...'</div>;

  if (error) return <div>'An error has occured: '</div>;

  if (courses) {
    const { results } = courses;
    return (
      <SimpleGrid
        columns={[1, null, 2]}
        spacing={[8, null, 12]}
      >
        {results.map((course) => {
          const { title, url, image, description, start_date } = course.data;
          return (
            <CourseCard
              key={title[0].text}
              uid={course.uid}
              url={url}
              imageSrc={image.url}
              title={title[0].text}
              description={description[0].text}
              startDate={start_date}
            />
          )
        })}
        {width > 990 && (
          <Box
            borderRadius="md"
            bgColor="#EDEDFD"
            p={[8, null, null, 12]}
            shadow="lg"
          >
            <Center h="100%">
              <Heading
                as="h3"
                color="textPrimary"
                fontSize="32px"
                textTransform="uppercase"
              >
                coming soon
              </Heading>
            </Center>
          </Box>
        )}
      </SimpleGrid>
    )
  }
}

export default CoursesGrid;