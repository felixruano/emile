import Link from "next/link";
import { Box, Button, Center, Flex, Heading, HStack, Icon, Image, Stack, Text } from "@chakra-ui/core";
import { FaArrowLeft, FaRegLightbulb } from "react-icons/fa";
import { BiCube } from "react-icons/bi";
import { AiOutlineInfoCircle } from "react-icons/ai";
import BaseContainer from '@components/layouts/BaseContainer';
import ConceptCard from '@components/ConceptCard';
import ChatBox from '@components/chat/ChatBox';

type SectionHeaderProps = {
  icon: React.ReactElement;
  text: string;
}

const SectionHeader = ({ icon, text }: SectionHeaderProps) => (
  <HStack>
    <Box rounded="full" bg="#EDEDFD" p={2} mr={2}>
      {icon}
    </Box>
    <Heading as="h3" fontWeight={600} fontSize="32px" letterSpacing="wide">{text}</Heading>
  </HStack>
);

const BackButton = () => (
  <Link href="/courses">
      <Button variant="link" py={6} leftIcon={<FaArrowLeft />} color="indigo.600" textTransform="uppercase">
          Back to Course
      </Button>
  </Link>
);

const LearningObjective = () => (
    <Stack py={8} borderBottom="2px solid #EAEAF0" spacing={4}>
      <SectionHeader icon={<Icon as={FaRegLightbulb} boxSize={6} color="indigo.600" />} text="Learning Objective" />
      <Text pl={14} fontSize="14px" color="textSecondary" maxW="4xl">
        Learn the core scientific principles, theories, and processes that govern living organisms and biological systems.
      </Text>
    </Stack>
);

const data = [
  {
    dummyDefinitionData: [
      {
        index: 'definition-nucleus',
        type: 'definition',
        concept: 'Evolution',
        content: 'The process of evolution drives the diversity and unity of life.',
        isLocked: false,
      },
      {
        index: 'definition-proton',
        type: 'definition',
        concept: 'Natural Selection',
        content:
          'the process whereby organisms better adapted to their environment tend to survive and produce more offspring.',
        isLocked: false,
      }
    ],
    dummyMasteryData: [
      {
        index: 'mastery-1',
        type: 'mastery',
        content:
          'To become a master of this concept, you must be able do these tasks.',
        isLocked: true,
      },
      {
        index: 'mastery-2',
        type: 'mastery',
        content:
          'To become a master of this concept, you must be able do these tasks.',
        isLocked: true,
      },
    ]
  },
  {
    dummyDefinitionData: [
      {
        index: 'definition-nucleus',
        type: 'definition',
        concept: 'Energetics',
        content: 'Biological systems use energy and molecular building blocks to grow, reproduce, and maintain dynamic homeostasis. ',
        isLocked: false,
      },
      {
        index: 'definition-proton',
        type: 'definition',
        concept: 'Natural Selection',
        content:
          'the process whereby organisms better adapted to their environment tend to survive and produce more offspring.',
        isLocked: false,
      }
    ],
    dummyMasteryData: [
      {
        index: 'mastery-1',
        type: 'mastery',
        content:
          'To become a master of this concept, you must be able do these tasks.',
        isLocked: true,
      },
      {
        index: 'mastery-2',
        type: 'mastery',
        content:
          'To become a master of this concept, you must be able do these tasks.',
        isLocked: true,
      },
    ]
  },
  {
    dummyDefinitionData: [
      {
        index: 'definition-nucleus',
        type: 'definition',
        concept: 'Information Storage and Transmission',
        content: 'Living systems store, retrieve, transmit, and respond to information essential to life processes. ',
        isLocked: false,
      },
      {
        index: 'definition-proton',
        type: 'definition',
        concept: 'Natural Selection',
        content:
          'the process whereby organisms better adapted to their environment tend to survive and produce more offspring.',
        isLocked: false,
      }
    ],
    dummyMasteryData: [
      {
        index: 'mastery-1',
        type: 'mastery',
        content:
          'To become a master of this concept, you must be able do these tasks.',
        isLocked: true,
      },
      {
        index: 'mastery-2',
        type: 'mastery',
        content:
          'To become a master of this concept, you must be able do these tasks.',
        isLocked: true,
      },
    ]
  },
  {
    dummyDefinitionData: [
      {
        index: 'definition-nucleus',
        type: 'definition',
        concept: 'Systems Interactions',
        content: 'Biological systems interact, and these systems and their interactions exhibit complex properties. ',
        isLocked: false,
      },
      {
        index: 'definition-proton',
        type: 'definition',
        concept: 'Natural Selection',
        content:
          'the process whereby organisms better adapted to their environment tend to survive and produce more offspring.',
        isLocked: false,
      }
    ],
    dummyMasteryData: [
      {
        index: 'mastery-1',
        type: 'mastery',
        content:
          'To become a master of this concept, you must be able do these tasks.',
        isLocked: true,
      },
      {
        index: 'mastery-2',
        type: 'mastery',
        content:
          'To become a master of this concept, you must be able do these tasks.',
        isLocked: true,
      },
    ]
  },
]

const Concepts = ({ numConcepts }: { numConcepts: number }) => (
  <Box py={8} borderBottom="2px solid #EAEAF0">
    <SectionHeader icon={<Icon as={BiCube} boxSize={6} color="indigo.600" />} text={numConcepts === 1 ? `${numConcepts} Concept` : `${numConcepts} Concepts`} />
    <Flex>
      <ConceptCard
        title="Evolution"
        definitionsData={data[0].dummyDefinitionData}
        masteryData={data[0].dummyMasteryData}
      />
      <ConceptCard
        title="Energetics (ENE)"
        definitionsData={data[1].dummyDefinitionData}
        masteryData={data[1].dummyMasteryData}
      />
      <ConceptCard
        title="Information Storage"
        definitionsData={data[2].dummyDefinitionData}
        masteryData={data[2].dummyMasteryData}
      />
      <ConceptCard
        title="Systems Interactions (SYI)"
        definitionsData={data[3].dummyDefinitionData}
        masteryData={data[3].dummyMasteryData}
      />
    </Flex>
  </Box>
);

const AboutLesson = () => (
  <Stack py={8} spacing={4}>
    <SectionHeader icon={<Icon as={AiOutlineInfoCircle} boxSize={6} color="indigo.600" />} text="About This Lesson" />
    <Text pl={14} fontSize="14px" color="textSecondary" maxW="4xl">
      The course content is organized into commonly taught units of study that provide a suggested sequence for the course. These units comprise the content and skills colleges and universities typically expect students to master to qualify for college credit and/or placement. This content is grounded in big ideas, which are crosscutting concepts that build conceptual understanding and spiral throughout the course.
    </Text>
  </Stack>
);

const LiveCourse: React.FC = () => {
    return <BaseContainer backgroundColor="gray.50">
        <Center color="textPrimary">
          <Box>
            <BackButton />
            <Flex maxH="2xl" spacing={8}>
              <Image
                // boxSize="800px"
                objectFit="contain"
                src="/livestream.png"
                alt="Livestream"
                mr={6}
              />
              <ChatBox />
            </Flex>
            <LearningObjective />
            <Concepts numConcepts={4} />
            <AboutLesson />
          </Box>
        </Center>
    </BaseContainer>;
};

export default LiveCourse;
