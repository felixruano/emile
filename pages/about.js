import { Box, Center, Flex, Heading, Image, Text } from '@chakra-ui/core';

import BaseContainer from '../components/BaseContainer';
import LearningThatWorks from '../components/marketing/LearningThatWorks';
// import CircleDotPattern from '../components/background-patterns/CircleDotPattern';

const About = () => (
    <BaseContainer backgroundColor="bg-gray-50">
        <Box>
            <Center>
                <Image
                    src="/heroImage3.png"
                    alt="Hero Image"
                    width={1440}
                    height={558}
                    objectFit="cover"
                    priority={true}
                />
                <Heading
                    as="h2"
                    position="absolute"
                    zIndex={0}
                    maxW={['5xl', null, '4xl']}
                    textAlign="center"
                    fontSize={['3xl', null, '5xl']}
                    color="white"
                    mx={8}
                    letterSpacing="wide"
                    lineHeight="base"
                >
                    Our mission is to democratize elite education across the
                    globe.
                </Heading>
            </Center>
            {/* <Flex mt={-4} mr={56} justify="flex-end">
              <CircleDotPattern />
            </Flex> */}
            <Flex pt={16} mb={20} align="center" justify="center">
                <Box maxW="4xl" mx={8}>
                    <Heading
                        as="h4"
                        fontSize="16px"
                        fontWeight={600}
                        color="textPrimary"
                        textTransform="uppercase"
                        mb={4}
                    >
                        we’re on a mission
                    </Heading>
                    <Text as="p" fontSize="2xl" color="textSecondary">
                        Emile Learning is a subscription-based digital learning
                        platform for secondary students. We are addressing the
                        shortfalls of typical remote learning by providing
                        professional-quality livestreams and a proprietary LMS
                        focused on content mastery — all in a single platform
                        that students can access anywhere, anytime. Our vision
                        is to develop a global community of learners who are no
                        longer constrained by where they were born or the
                        resources available at their school. Our team is made up
                        of educators, engineers, designers and business analysts
                        driven by our mission to improve the academic and
                        economic potential of all learners.
                    </Text>
                </Box>
            </Flex>
            <LearningThatWorks />
        </Box>
    </BaseContainer>
);

export default About;
