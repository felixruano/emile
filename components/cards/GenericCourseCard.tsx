import { Avatar, Box, HStack, Image, Stack, Text } from "@chakra-ui/react";

type GenericCourseCardProps = {
  imageSrc: string;
  numberOfStudents: number;
  title: string;
  avatarImgSrc: string;
  instructorName: string;
}

const GenericCourseCard: React.FC<GenericCourseCardProps> = ({ imageSrc = '', numberOfStudents = '#', title = '', avatarImgSrc = '', instructorName = '' }) => (
  <Box shadow="xl" maxW="360px" borderRadius="lg" color="textPrimary">
    <Image borderTopRadius="lg" src="/ap-literature-hero.png" />
    <Box p={6}>
      <Stack direction="column" spacing={4}>
        <Text as="p" fontSize="sm">{numberOfStudents} students</Text>
        <Text fontWeight={700} fontSize="24px">{title}</Text>
        <HStack>
          <Avatar name={instructorName} size="xs" src={avatarImgSrc} />
          <Text as="p" color="textSecondary" fontSize="sm">{instructorName}</Text>
        </HStack>
      </Stack>
    </Box>
  </Box>
);

export default GenericCourseCard;