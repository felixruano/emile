import { Flex, Heading, Stack, Stat, StatHelpText, StatNumber, Text } from "@chakra-ui/react";

type CourseStatsProps = {
  numberOfStudents: number;
  numberOfWeeks: number;
  numberOfLessons: number;
}

const CourseStats: React.FC<CourseStatsProps> = ({ numberOfStudents, numberOfWeeks, numberOfLessons }) => (
  <Stack mt={[8, null,]} direction="row" spacing={12}>
    <Stat textAlign="center">
      <StatNumber>{numberOfStudents}</StatNumber>
      <StatHelpText>Students</StatHelpText>
    </Stat>
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
  numberOfStudents: number;
  numberOfWeeks: number;
  numberOfLessons: number;
}

const Overview: React.FC<OverviewProps> = ({ description = '', numberOfStudents = '', numberOfWeeks = '', numberOfLessons = '' }) => {
  return (
    <Flex direction={["column", null, "row"]} justify="space-between" pt={12} pb={16}>
      <Stack spacing={8} textAlign={["center", null, "left"]}>
        <Heading as="h3" fontSize="32px" fontWeight={600} letterSpacing="widest">Course Overview</Heading>
        <Text maxW="3xl" color="textSecondary">{description}</Text>
      </Stack>
      <CourseStats numberOfStudents={numberOfStudents} numberOfWeeks={numberOfWeeks} numberOfLessons={numberOfLessons} />
    </Flex>
  )
}

export default Overview;

