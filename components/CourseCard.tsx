import Link from 'next/link';
import { Box, Center, Flex, HStack, Icon, Image, Text } from '@chakra-ui/react';
import { Heading } from '@chakra-ui/react';
import iconFactory from '@utils/helpers/iconFactory';
import { useRouter } from 'next/router';
import PlayCircleIcon from './icons/PlayCircleIcon';

type CourseCardProps = {
    uid: string;
    url: string;
    imageSrc: string;
    title: string;
    description: string;
    startDate: string;
}

const CourseCard: React.FC<CourseCardProps> = ({ uid = undefined, url = '', imageSrc = '', title = '', description = '', startDate = '' }) => {
    const router = useRouter();

    const handleClick = () => {
        router.push(`/courses/${url}`)
    }

    return (
        <Flex
            direction="column"
            tabIndex={1}
            borderRadius="md"
            bgColor="white"
            textColor="textPrimary"
            shadow="xl"
            textAlign="left"
            _active={{ outline: 'indigo.600' }}
            _focus={{ outline: 'indigo.600' }}
        >
            <Link href={`/courses/${url}/live`}>
                <Box pos="relative" display="inline-block" _hover={{ cursor: 'pointer', transition: 'all 0.25s ease', opacity: '70%' }} >
                    <Image src={imageSrc} borderTopRadius="md" alt={title} />
                    <PlayCircleIcon centerInImage={true} />
                </Box>
            </Link>
            <Box p={8} onClick={handleClick} _hover={{ cursor: 'pointer' }}>
                <HStack spacing={4}>
                    {iconFactory(uid.replace('coursecard-', ''), 6, 'indigo.600')}
                    <Heading as="h3" fontSize="24px">{title}</Heading>
                </HStack>
                <Text ml={10} as="p" py={4} maxW="xl" textColor="textTertiary">
                    {description}
                </Text>
                <Flex
                    direction={['column', null, null, 'row']}
                    alignItems="center"
                    justify="space-between"
                >
                </Flex>
            </Box>
        </Flex>
    )
}

export default CourseCard;
