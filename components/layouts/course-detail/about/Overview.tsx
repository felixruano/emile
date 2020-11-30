import { ReactText } from "react";
import { Flex, Heading, Stack, Stat, StatHelpText, StatNumber, Text } from "@chakra-ui/react";

type CourseStatsProps = {
  numberOfStudents: ReactText | number;
  numberOfWeeks: ReactText | number;
  numberOfLessons: ReactText | number;
}

const CourseStats: React.FC<CourseStatsProps> = ({ numberOfStudents, numberOfWeeks, numberOfLessons }) => (
  <Stack direction="row" spacing={12}>
    <Stat textAlign="center">
      <StatNumber>{numberOfWeeks}</StatNumber>
      <StatHelpText>Weeks</StatHelpText>
    </Stat>
    <Stat textAlign="center">
      <StatNumber>{numberOfLessons}</StatNumber>
      <StatHelpText>Lessons</StatHelpText>
    </Stat>
  </Stack>
);

type OverviewProps = {
  description: string;
  numberOfStudents: ReactText | number;
  numberOfWeeks: ReactText | number;
  numberOfLessons: ReactText | number;
}

const Overview: React.FC<OverviewProps> = ({ numberOfStudents = '', numberOfWeeks = '', numberOfLessons = '' }) => {
  return (
    <Flex direction={["column", null, "row"]} justify="space-between" py={4}>
      <Heading as="h3" fontSize="32px" fontWeight={600} letterSpacing="widest">Course Overview</Heading>
      <CourseStats numberOfStudents={numberOfStudents} numberOfWeeks={numberOfWeeks} numberOfLessons={numberOfLessons} />
    </Flex>
  )
}

export default Overview;

