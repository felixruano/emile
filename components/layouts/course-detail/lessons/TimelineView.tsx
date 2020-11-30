import { Box, Center, Divider, Flex, Heading, HStack, SlideFade, Spinner } from "@chakra-ui/react";
import { useQuery } from "react-query";

import HorizontalLessonCard from "@components/cards/HorizontalLessonCard";
import { Client } from "prismic-configuration";

const WeekCircle = ({ weekNumber }: { weekNumber: number }) => (
  <Center minW="32px" minH="32px" rounded="full" bg="indigo.600" color="white">
    {weekNumber}
  </Center>
);

interface HeaderProps {
  weekNumber: number;
  title: string;
}

const Header = ({ weekNumber, title }: HeaderProps) => (
  <HStack spacing={8}>
    <WeekCircle weekNumber={weekNumber} />
    <Heading as="h3" fontWeight={600} fontSize="32px">{title}</Heading>
  </HStack>
);

const WeekView = ({ id = '', courseImageSrc = '', week = 1, unit = 1, lessonTime, title = '', numConcepts = 0 }) => {
  return (
    <Box my={4} color="textPrimary">
      <Header weekNumber={week} title={`Unit ${unit}, Week ${week}: ${title}`} />
      <Flex h={["520px", null, "260px"]} align="center">
        <Divider color="#C4C4C4" borderWidth="1px" ml={4} mt={4} orientation="vertical" mr={[6, null, 12]} />
        <HStack spacing="2rem">
          <HorizontalLessonCard id={id} courseImageSrc={courseImageSrc} weekNumber={week} lessonTime={lessonTime} title={title} numConcepts={numConcepts} />
        </HStack>
      </Flex>
    </Box>
  )
}

const TimelineView = ({ courseImageSrc = '', listOfLessons = [''], isOpen = false }) => {
  const options = { orderings: '[my.lesson.week]' };
  const { isLoading, error, data } = useQuery(['lessons', listOfLessons], () => Client().getByIDs(listOfLessons, options));

  if (isLoading) return <Center>
    <Spinner color="indigo.600" />
  </Center>

  if (error) return <div>There has been an error. Please try again.</div>

  return (
    <SlideFade in={isOpen}>
      {data.results.map((lesson) => {
        const { data } = lesson;
        return <WeekView key={lesson.id} id={lesson.id} courseImageSrc={courseImageSrc} week={data.week} unit={data.unit} lessonTime={data.lesson_time} title={data.title[0].text} numConcepts={data.concepts.length} />
      })}
    </SlideFade>
  );
}

export default TimelineView;