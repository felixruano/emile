import Link from 'next/link';
import {
    Box,
    Button,
    Center,
    Collapse,
    Flex,
    Heading,
    Icon,
    List,
    ListItem,
    SimpleGrid,
    Text,
    Stack,
    useDisclosure,
} from '@chakra-ui/react';
import { FaChevronDown, FaArrowRight } from 'react-icons/fa';

import BaseContainer from '@components/layouts/BaseContainer';
import useWindowDimensions from '@utils/hooks/use-window-dimensions';
import CoursesGrid from '@components/CoursesGrid';
import Head from 'next/head';

const coursesList = [
    [
        {
            label: 'AP Capstone Diploma Program',
            courses: ['AP Research', 'AP Seminar'],
        },
        {
            label: 'Arts',
            courses: [
                'AP Art and Design Program',
                'AP Art History',
                'AP Music Theory',
            ],
        },
        {
            label: 'English',
            courses: [
                'AP English Language and Composition',
                'AP English Literature and Composition',
            ],
        },
    ],
    [
        {
            label: 'History and Social Sciences',
            courses: [
                'AP Comparative Government and Politics',
                'AP European History',
                'AP Human Geography',
                'AP Macroeconomics',
                'AP Microeconomics',
                'AP Psychology',
                'AP United States Government and Politics',
                'AP United States History',
                'AP World History: Modern',
            ],
        },
        {
            label: 'Math & Computer Science',
            courses: [
                'AP Calculus AB',
                'AP Calculus BC',
                'AP Computer Science A',
                'AP Computer Science Pricinples',
            ],
        },
    ],
    [
        {
            label: 'Sciences',
            courses: [
                'AP Environmental Science',
                'AP Physics 1: Algebra-Based',
                'AP Physics 2: Algebra-Based',
                'AP Physics C: Electricity and Magnetism',
                'AP Physics C: Mechanics',
            ],
        },
        {
            label: 'World Languages and Cultures',
            courses: [
                'AP Chinese Language and Culture',
                'AP French Language and Culture',
                'AP German Language and Culture',
                'AP Italian Language and Culture',
                'AP Japaneses Language and Culture',
                'AP Latin',
                'AP Spanish Language and Culture',
                'AP Spanish Literature and Culture',
            ],
        },
    ],
];

const CourseItem = ({ label, courses }) => (
    <Stack px={8} direction="column" my={12} spacing={6}>
        <Text fontWeight={600} textTransform="uppercase" mb={2}>
            {label}
        </Text>
        {courses.map((course) => (
            <List key={course} spacing={4}>
                <ListItem color="textSecondary">{course}</ListItem>
            </List>
        ))}
    </Stack>
);

const CoursesComingSoon = () => (
    <Box
        bgImage="url('/curved-background-purple.svg')"
        backgroundSize="100% 94%"
        backgroundRepeat="no-repeat"
        pb={32}
    >
        <Box px={[3, 8, 16, 32]} py={64}>
            <Center>
                <Heading as="h3">Courses Coming Soon</Heading>
            </Center>
            <SimpleGrid columns={3}>
                {coursesList.map((courseCategory, index) => (
                    <Box key={index}>
                        {courseCategory.map((courseItem) => (
                            <CourseItem
                                key={courseItem.label}
                                label={courseItem.label}
                                courses={courseItem.courses}
                            />
                        ))}
                    </Box>
                ))}
            </SimpleGrid>
            <Center>
                <Link href="/signup">
                    <Button
                        mt={64}
                        position="absolute"
                        bg="teal.400"
                        color="white"
                        textTransform="uppercase"
                        size="lg"
                        shadow="lg"
                        _hover={{ bg: 'teal.300' }}
                        _active={{ bg: 'teal.300' }}
                    >
                        Request Free Trial
                    </Button>
                </Link>
            </Center>
        </Box>
    </Box>
);

const CourseItemMobile = ({ label, courses }) => {
    const { isOpen, onToggle } = useDisclosure();

    return (
        <Box
            p={8}
            m={4}
            shadow="xl"
            borderRadius="4px"
            bg="white"
            onClick={onToggle}
            userSelect="none"
            cursor="pointer"
        >
            <Flex align="center">
                <Heading
                    as="h4"
                    fontWeight={600}
                    fontSize="16px"
                    textAlign="center"
                    textTransform="uppercase"
                    w="90%"
                >
                    {label}
                </Heading>
                <Icon
                    as={FaChevronDown}
                    boxSize={4}
                    color="indigo.600"
                    transform={isOpen && 'rotate(180deg)'}
                />
            </Flex>
            <Collapse in={isOpen} animateOpacity>
                {courses.map((course) => (
                    <List mt={4} key={course}>
                        <ListItem color="textSecondary">{course}</ListItem>
                    </List>
                ))}
            </Collapse>
        </Box>
    );
};

const CoursesComingSoonMobile = () => (
    <Box pt="64px">
        <Center>
            <Heading as="h4" fontSize="20px" mb="32px">
                Courses Coming Soon
            </Heading>
        </Center>
        {coursesList.map((courseCategory, index) => (
            <Box key={index}>
                {courseCategory.map((courseItem) => (
                    <CourseItemMobile
                        key={courseItem.label}
                        label={courseItem.label}
                        courses={courseItem.courses}
                    />
                ))}
            </Box>
        ))}
        <Link href="/signup">
            <Center>
                <Button
                    py={12}
                    variant="link"
                    color="indigo.600"
                    textTransform="uppercase"
                    lineHeight="24px"
                    fontWeight={600}
                >
                    Request Free Trial{' '}
                    <Icon ml={2} as={FaArrowRight} color="#4F46E8" />
                </Button>
            </Center>
        </Link>
    </Box>
);

const Courses = () => {
    const { width } = useWindowDimensions();

    return (
        <>
            <Head>
                <title>
                    Emile | K-12 learning platform delivering mastery-based
                    instruction
                </title>
                <meta
                    name="description"
                    content="Emile is an accredited global virtual K-12 school."
                />
            </Head>
            <BaseContainer backgroundColor="bg-gray-50">
                <Box
                    bgImg="url('ellipses-purple-2.png')"
                    bgRepeat="no-repeat"
                    bgPosition="0 100%"
                >
                    <Box
                        mx="auto"
                        maxW="1440px"
                        color="textPrimary"
                        px={[4, null, 16]}
                        py={[6, null, 16]}
                    >
                        <Heading
                            as="h3"
                            size="3xl"
                            textAlign={['center', null, 'start']}
                        >
                            Browse our{' '}
                            <Text
                                as="span"
                                textDecoration="none"
                                position="relative"
                                color="indigo.600"
                                _after={{
                                    content: '""',
                                    display: 'block',
                                    position: 'absolute',
                                    margin: '0 auto',
                                    width: '100%',
                                    height: '8px',
                                    background: '#4F46E8',
                                    borderRadius: '24px',
                                    left: 0,
                                    right: 0,
                                    bottom: '-4px',
                                }}
                            >
                                courses.
                    </Text>
                        </Heading>
                        <Text
                            as="p"
                            fontSize="2xl"
                            color="#5F5F6C"
                            mt={10}
                            mb={16}
                            textAlign={['center', null, 'start']}
                        >
                            Courses that challenge and inspire you. See why students
                            love us!
                </Text>
                        <CoursesGrid />
                    </Box>
                </Box>
                {width > 990 ? <CoursesComingSoon /> : <CoursesComingSoonMobile />}
            </BaseContainer>
        </>
    );
};

export default Courses;
