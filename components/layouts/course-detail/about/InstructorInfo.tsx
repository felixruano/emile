import { Avatar, Center, Flex, Heading, Stack, Text, VStack } from "@chakra-ui/react";

type InstructorInfoProps = {
  imageSrc?: string;
  name: string;
  type: string;
  course: string;
  shortBio: string;
}

const InstructorInfo: React.FC<InstructorInfoProps> = ({ imageSrc = '', name = '', type = 'instructor', course = '', shortBio = '' }) => (
  <Center bg="#5F5F6C" p={[8, null, 16]} color="white">
    <VStack spacing={8}>
      <Heading as="h3" fontWeight={600} fontSize="4xl" textAlign="center">Meet Your Instructor</Heading>
      <Flex>
        <Avatar boxSize={16} name={name} src={imageSrc} />
        <Stack ml={4} spacing={2}>
          <Text fontWeight={700} fontSize="2xl">{name}</Text>
          <Text as="h4" fontWeight={600} textTransform="uppercase" letterSpacing="widest">{type}, {course}</Text>
        </Stack>
      </Flex>
      <Text maxW="lg" textAlign="center">{shortBio}</Text>
    </VStack>
  </Center >
);

export default InstructorInfo;