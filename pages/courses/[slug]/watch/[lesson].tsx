import Link from "next/link";
import ReactPlayer from 'react-player/lazy';
import { AspectRatio, Box, Button, Center, Flex, Heading, HStack, Icon, Image, Modal, ModalContent, ModalOverlay, Skeleton, Spinner, Stack, Text } from "@chakra-ui/react";
import { FaArrowLeft, FaCube } from "react-icons/fa";
import BaseContainer from '@components/layouts/BaseContainer';
import ChatBox from '@components/chat/ChatBox';
import { useQuery } from "react-query";
import { useRouter } from "next/router";
import { Client } from "prismic-configuration";
import ConceptSlides from "@components/ConceptSlides";
import { LearningThatWorkContent } from "@components/marketing/LearningThatWorks";
import { useAuth } from "@utils/hooks/use-auth";

type SectionHeaderProps = {
  text: string;
}

const SectionHeader = ({ text }: SectionHeaderProps) => (
  <Heading as="h3" fontWeight={600} fontSize="32px" letterSpacing="wide">{text}</Heading>
);

const BackButton = () => {
  const router = useRouter();
  return (
    <Button variant="link" py={6} leftIcon={<FaArrowLeft />} color="indigo.600" textTransform="uppercase" onClick={() => router.back()}>
      Back to Course
    </Button>
  );
}

const AboutLesson = ({ text = '' }) => (
  <Stack py={8} spacing={[3, null, 8]}>
    <SectionHeader text="About This Lesson" />
    <Text fontSize="14px" color="textSecondary" maxW="3xl">
      {text}
    </Text>
  </Stack>
);

const LiveCourse: React.FC = () => {
  const auth = useAuth();
  const router = useRouter();
  const { isLoading, error, data: lessonData } = useQuery(['lesson', router.query.lesson], () => Client().getByID(router.query.lesson as string, {}));

  if (isLoading) return <Center h="100vh" w="100vw">
    <Spinner color="indigo.600" />
  </Center>

  if (error) return <div>Error!</div>;

  const { about, concepts, video_url } = lessonData.data;

  const getListOfConcepts = () => {
    const conceptArr = [];
    concepts.map((concept) => {
      conceptArr.push(concept.concept.id);
    })
    return conceptArr;
  }

  return <BaseContainer backgroundColor="gray.50">
    <Box mx="auto" maxW="1440px" px={[3, null, 8]} w="100%" color="textPrimary">
      <BackButton />
      <Flex maxH="2xl" spacing={8}>
        <Box w="100%" h="100%" mr={[0, null, 6]}>
          <AspectRatio maxW="100%" ratio={16 / 9}>
            {(lessonData?.data && auth?.user) ? (
              <ReactPlayer className="react-player" height="100%" width="100%" pip={true} url={`${video_url.url}?color=4F46E8`} controls={true} />
            ) : (
                <Skeleton h="100%" w="100%" />
              )}
          </AspectRatio>
        </Box>
        <ChatBox />
      </Flex>
      <HStack mt={6} fontSize="32px" color="textPrimary" display={['none', null, 'flex']}>
        <FaCube />
        <Heading as="h3" fontWeight={600}>Summary Ideas</Heading>
        <Box display="inline-block" color="gray.600">({concepts.length})</Box>
      </HStack>
      <ConceptSlides conceptList={getListOfConcepts()} isAuthenticated={!!auth?.user} />
      <AboutLesson text={about[0].text} />
      {!auth?.user && (<Box bg="#F7F7FF" py={16}>
        <LearningThatWorkContent />
      </Box>)}
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
