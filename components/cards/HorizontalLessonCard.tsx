import { useRouter } from "next/router";
import { Box, Center, Flex, Heading, HStack, Icon, Image, Stack, Text } from "@chakra-ui/react";
import { FaCubes, FaCube, FaLock } from 'react-icons/fa';
import PlayCircleIcon from "@components/icons/PlayCircleIcon";

const HorizontalLessonCard = ({ id = '', courseImageSrc = '', weekNumber = 1, lessonTime, title = 'Lesson Title', numConcepts = 0 }) => {
  const router = useRouter();
  // @ts-ignore
  const isLessonUnlocked = (Date.parse(lessonTime) - Date.parse(new Date())) < 0;

  const goToLesson = () => {
    if (isLessonUnlocked) {
      router.push(`${router.asPath}/watch/${id}`);
    }
  }

  return (
    <Flex as="button" textAlign="left" direction={["column", null, "row"]} maxW="600px" rounded="md" shadow="base" onClick={goToLesson}>
      <Box pos="relative">
        <Image w="269px" h="234px" fit="cover" roundedTopLeft="md" roundedBottomLeft={["none", null, "md"]} roundedTopRight={["md", null, "none"]} src={courseImageSrc} />
        {isLessonUnlocked ? (<PlayCircleIcon centerInImage={true} />) : (
          <Box pos="absolute" top="50%" left="50%" color="white">
            <Center w="72px" h="72px" bg="currentColor" rounded="full" transform="translate(-50%, -50%)">
              <Icon w="18px" h="24px" color="indigo.600" as={FaLock} />
            </Center>
          </Box>
        )}
      </Box>
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