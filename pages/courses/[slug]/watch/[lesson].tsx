import Link from "next/link";
import ReactPlayer from 'react-player/lazy';
import { AspectRatio, Box, Button, Center, Flex, Heading, HStack, Icon, Image, Skeleton, Spinner, Stack, Text } from "@chakra-ui/react";
import { FaArrowLeft, FaRegLightbulb } from "react-icons/fa";
import { BiCube } from "react-icons/bi";
import { AiOutlineInfoCircle } from "react-icons/ai";
import BaseContainer from '@components/layouts/BaseContainer';
import ConceptCard from '@components/ConceptCard';
import ChatBox from '@components/chat/ChatBox';
import { useQuery } from "react-query";
import { useRouter } from "next/router";
import { Client } from "prismic-configuration";

type SectionHeaderProps = {
  icon: React.ReactElement;
  text: string;
}

const SectionHeader = ({ icon, text }: SectionHeaderProps) => (
  // <HStack>
  //   <Box rounded="full" bg="#EDEDFD" p={2} mr={2}>
  //     {icon}
  //   </Box>
  <Heading as="h3" fontWeight={600} fontSize="32px" letterSpacing="wide">{text}</Heading>
  // </HStack>
);

const BackButton = () => {
  const router = useRouter();
  return (
    <Button variant="link" py={6} leftIcon={<FaArrowLeft />} color="indigo.600" textTransform="uppercase" onClick={() => router.back()}>
      Back to Course
    </Button>
  );
}

// const Concepts = ({ numConcepts }: { numConcepts: number }) => (
//   <Box py={8} borderBottom="2px solid #EAEAF0">
//     <SectionHeader icon={<Icon as={BiCube} boxSize={6} color="indigo.600" />} text={numConcepts === 1 ? `${numConcepts} Concept` : `${numConcepts} Concepts`} />
//     <Flex>
//       <ConceptCard
//         title="Evolution"
//         definitionsData={data[0].dummyDefinitionData}
//         masteryData={data[0].dummyMasteryData}
//       />
//       <ConceptCard
//         title="Energetics (ENE)"
//         definitionsData={data[1].dummyDefinitionData}
//         masteryData={data[1].dummyMasteryData}
//       />
//       <ConceptCard
//         title="Information Storage"
//         definitionsData={data[2].dummyDefinitionData}
//         masteryData={data[2].dummyMasteryData}
//       />
//       <ConceptCard
//         title="Systems Interactions (SYI)"
//         definitionsData={data[3].dummyDefinitionData}
//         masteryData={data[3].dummyMasteryData}
//       />
//     </Flex>
//   </Box>
// );

const AboutLesson = ({ text = '' }) => (
  <Stack py={8} spacing={[3, null, 8]}>
    <SectionHeader icon={<Icon as={AiOutlineInfoCircle} boxSize={6} color="indigo.600" />} text="About This Lesson" />
    <Text fontSize="14px" color="textSecondary" maxW="4xl">
      {text}
    </Text>
  </Stack>
);

const LiveCourse: React.FC = () => {
  const router = useRouter();
  const { isLoading, error, data: lessonData } = useQuery(['lesson', router.query.lesson], () => Client().getByID(router.query.lesson as string, {}));

  if (isLoading) return <Center h="100vh" w="100vw">
    <Spinner color="indigo.600" />
  </Center>

  if (error) return <div>Error!</div>;

  const { about, concepts, title, video_url, week } = lessonData.data;

  return <BaseContainer backgroundColor="gray.50">
    <Box mx="auto" maxW="1440px" px={[3, null, 8]} w="100%" color="textPrimary">
      <BackButton />
      <Flex maxH="2xl" spacing={8}>
        <Box w="100%" h="100%" mr={[0, null, 6]}>
          <AspectRatio maxW="100%" ratio={16 / 9}>
            {lessonData?.data ? (
              <ReactPlayer className="react-player" height="100%" width="100%" pip={true} url={`${video_url.url}?color=4F46E8`} controls={true} />
            ) : (
                <Skeleton h="100%" w="100%" />
              )}
          </AspectRatio>
        </Box>
        <ChatBox />
      </Flex>
      {/* <Concepts numConcepts={4} /> */}
      <AboutLesson text={about[0].text} />
    </Box>
    <style jsx>{`
      .react-player {
        position: absolute;
        top: 0;
        left: 0;
      }
    `}
    </style>
  </BaseContainer>;
};

export default LiveCourse;
