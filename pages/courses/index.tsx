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
} from '@chakra-ui/core';
import { FaChevronDown, FaArrowRight } from 'react-icons/fa';
import BaseContainer from '@components/layouts/BaseContainer';
import CourseCard from '@components/CourseCard';
import useWindowDimensions from '@utils/use-window-dimensions';
import DnaIcon2 from '@components/icons/DnaIcon2';
import HistoryIcon from '@components/icons/HistoryIcon';
import LiteratureIcon from '@components/icons/LiteratureIcon';

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
        display={['none', null, 'block']}
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
    <Box pt="64px" display={['block', null, 'none']}>
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

const courses = [
    {
        title: 'AP Biology',
        icon: <DnaIcon2 boxSize={12} color="#4F46E8" />,
        startDate: 'Nov 30',
        description:
            'Learn the core scientific principles, theories, and processes that govern living organisms and biological systems.',
    },
    {
        title: 'AP U.S. Government and Politics',
        icon: <HistoryIcon boxSize={12} color="#4F46E8" />,
        startDate: 'Nov 30',
        description:
            'Dive into the concepts and institutions of the political system and culture of the United States.',
    },
    {
        title: 'AP Literature and Composition',
        icon: <LiteratureIcon boxSize={12} color="#4F46E8" />,
        startDate: 'Nov 30',
        description:
            'Cultivate your understanding of literature through reading and analyzing texts by exploring concepts like character, setting, structure, perspective, figurative language, and literary analysis in the context of literary works.',
    },
];

const Courses = () => {
    const { width } = useWindowDimensions();

    return (
        <BaseContainer backgroundColor="gray.50">
            <Box
                px={[3, null, 16, 32]}
                py={[6, null, 16]}
                bgImg="url('ellipses-purple-2.png')"
                bgRepeat="no-repeat"
                bgPosition="0 100%"
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
                <SimpleGrid
                    columns={[1, null, null, 2]}
                    spacing={[8, null, 12]}
                >
                    {courses.map((course) => (
                        <CourseCard
                            key={course.title}
                            icon={course.icon}
                            title={course.title}
                            description={course.description}
                            startDate={course.startDate}
                        />
                    ))}
                    {width > 990 && (
                        <Box
                            borderRadius="md"
                            bgColor="#EDEDFD"
                            p={[8, null, null, 12]}
                            shadow="lg"
                        >
                            <Center h="100%">
                                <Heading
                                    as="h3"
                                    color="textPrimary"
                                    fontSize="32px"
                                    textTransform="uppercase"
                                >
                                    coming soon
                                </Heading>
                            </Center>
                        </Box>
                    )}
                </SimpleGrid>
            </Box>
            <CoursesComingSoon />
            <CoursesComingSoonMobile />
        </BaseContainer>
    );
};

export default Courses;
