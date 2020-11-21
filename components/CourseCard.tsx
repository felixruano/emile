import Link from 'next/link';
import { Box, Button, Flex, HStack, Text } from '@chakra-ui/react';
import { Heading } from '@chakra-ui/react';

type ReserveButtonProps = {
    uid: string;
}

const ReserveButton: React.FC<ReserveButtonProps> = ({ uid }) => (
    <Link href={`/courses/${uid}`}>
        <Button
            mt={4}
            bg="indigo.600"
            color="white"
            w={['100%', null, null, 'inherit']}
            textTransform="uppercase"
            _hover={{ bg: 'indigo.500' }}
            _active={{ bg: 'indigo.500' }}
        >
            Access Course
        </Button>
    </Link>
);

type CourseCardProps = {
    icon?: React.ReactNode;
    uid: string;
    title: string;
    description: string;
    startDate: string;
}

// TODO: Finish x days
const CourseCard: React.FC<CourseCardProps> = ({ icon, uid, title = '', description = '', startDate = '' }) => (
    <Box
        borderRadius="md"
        bgColor="white"
        p={[8, null, null, 12]}
        textColor="textPrimary"
        shadow="lg"
    >
        <HStack spacing={4} pb={4} borderBottom="6px solid #F6F6FF">
            {icon}
            <Heading as="h3">{title}</Heading>
        </HStack>
        <Text as="p" py={8} textColor="textTertiary">
            {description}
        </Text>
        <Flex
            direction={['column', null, null, 'row']}
            // alignItems={['center', null, 'flex-start']}
            alignItems="center"
            justify="space-between"
        >
            {/* <Flex justify mb={2}> */}
            <Text as="p" textTransform="uppercase" fontWeight={600} mb={2}>
                starts {startDate}
            </Text>
            {/* <Text as="p">X days left to enroll</Text> */}
            <ReserveButton uid={uid} />
            {/* </Flex> */}
        </Flex>
    </Box>
);

export default CourseCard;
