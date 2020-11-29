import { useRouter } from "next/router";
import { Box, Flex, Heading, HStack, Image, Stack, Text } from "@chakra-ui/react";
import { FaCubes, FaCube } from 'react-icons/fa';

const HorizontalLessonCard = ({ id = '', weekNumber = 1, title = 'Lesson Title', numConcepts = 0 }) => {
  const router = useRouter();

  const goToLesson = () => {
    router.push(`${router.asPath}/watch/${id}`);
  }

  return (
    <Flex as="button" textAlign="left" direction={["column", null, "row"]} maxW="600px" rounded="md" shadow="base" onClick={goToLesson}>
      <Image bg="gray.200" w="269px" h="234px" roundedTopLeft="md" roundedBottomLeft={["none", null, "md"]} roundedTopRight={["md", null, "none"]}></Image>
      <Box p={6} w={["269px", null, "330px"]}>
        <Heading as="h3" fontWeight={600} fontSize="base" color="textSecondary" textTransform="uppercase">
          week {weekNumber}
        </Heading>
        <Stack mt={[4, null, 8]} direction="column" spacing={3}>
          <Flex align="center">
            <Box mr={2}>
              <FaCubes size="20px" />
            </Box>
            <Text fontWeight={700} fontSize="24px" isTruncated={true}>{title}</Text>
          </Flex>
          <HStack>
            <FaCube size="20px" />
            <Text>{numConcepts}</Text>
          </HStack>
        </Stack>
      </Box>
    </Flex>
  );
}

export default HorizontalLessonCard;