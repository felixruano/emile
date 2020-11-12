import Link from 'next/link';
import {
    Box,
    Button,
    Center,
    Flex,
    Heading,
    SimpleGrid,
    Text,
    VStack,
} from '@chakra-ui/core';

import useWindowDimensions from '../../utils/use-window-dimensions';
import ClockStarsIcon from '../icons/ClockStarsIcon';
import ReportIcon from '../icons/ReportIcon';
import SupportIcon from '../icons/SupportIcon';

const gridData = [
    {
        icon: <ClockStarsIcon boxSize={12} color="#4F46E8" />,
        title: 'Unlimited Streaming Access',
        text:
            'Unlimited access to 30+ courses, available to livestream and on-demand, whenever.',
    },
    {
        icon: <ReportIcon boxSize={12} color="#4F46E8" />,
        title: 'Content Mastery Tools',
        text:
            'Proven mastery techniques and progress tracking with our proprietary learning platform.',
    },
    {
        icon: <SupportIcon boxSize={12} color="#4F46E8" />,
        title: 'Top Quality Support',
        text:
            'Top quality instructors and a global community of student support.',
    },
];

const GridItem = ({ icon, title, text }) => (
    <VStack>
        {icon}
        <Text textAlign="center" fontSize="2xl">{title}</Text>
        <Text textAlign="center" maxW="sm" lineHeight="base" color="textSecondary">
            {text}
        </Text>
    </VStack>
);

const LearningThatWorks = () => {
    const { width } = useWindowDimensions();

    return (
        <Box
            pt={[64, null, 32]}
            pb={64}
            bg="transparent"
            bgImg={
                width > 768
                    ? "url('curved-background.png')"
                    : "url('curved-background-mobile.png')"
            }
            bgSize={width > 768 ? '100% 90%' : '100% 100%'}
            bgRepeat="no-repeat"
        >
            <Box px={4}>
                <Flex justify="center" align="center" direction="column">
                    <Heading
                        as="h4"
                        fontSize={["xs", null, "md"]}
                        fontWeight={600}
                        color="textTertiary"
                        textTransform="uppercase"
                    >
                        DISRUPTING TRADITIONAL EDUCATION
                    </Heading>
                    <Text fontSize={["xl", null, "32px"]} fontWeight={600} textAlign="center">
                        Emile is online learning that actually works.
                    </Text>
                </Flex>
                <SimpleGrid mx={[0, 0, 0, 16]} mt={16} columns={[1, null, 3]} spacing={6}>
                    {gridData.map((item) => (
                        <GridItem
                            key={item.title}
                            icon={item.icon}
                            title={item.title}
                            text={item.text}
                        />
                    ))}
                </SimpleGrid>
                <Center>
                    <Link href="/signup">
                        <Button
                            mt={16}
                            bg="indigo.600"
                            color="white"
                            textTransform="uppercase"
                            shadow="lg"
                            letterSpacing="widest"
                            _hover={{ bg: 'indigo.500' }}
                            _active={{ bg: 'indigo.500' }}
                        >
                            Request Free Trial
                        </Button>
                    </Link>
                </Center>
            </Box>
        </Box>
    );
};

export default LearningThatWorks;
