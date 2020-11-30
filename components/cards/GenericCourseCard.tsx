import { Avatar, Box, HStack, Image, Skeleton, SkeletonText, Stack, Text } from "@chakra-ui/react";

type GenericCourseCardProps = {
  handleCourseClick?: (course) => void,
  uid?: string;
  isLoaded?: boolean;
  imageSrc?: string;
  numberOfStudents?: number;
  title?: string;
  avatarImgSrc?: string;
  instructorName?: string;
}

const GenericCourseCard: React.FC<GenericCourseCardProps> = ({ handleCourseClick, uid = '', isLoaded = false, imageSrc = '', numberOfStudents = '#', title = '', avatarImgSrc = '', instructorName = '' }) => {
  return (
    <Box onClick={() => handleCourseClick(uid)} shadow="xl" maxW="360px" borderRadius="lg" color="textPrimary" _hover={{ cursor: 'pointer' }}>
      <Skeleton w="360px" h="198px" borderTopRadius="lg" isLoaded={isLoaded}>
        <Image w="100%" h="100%" fit="cover" borderTopRadius="lg" src={imageSrc} />
      </Skeleton>
      <Box minH="200px" p={6}>
        <Stack direction="column" spacing={4}>
          {/* <SkeletonText isLoaded={isLoaded}>
            <Text as="p" fontSize="sm">{numberOfStudents} students</Text>
          </SkeletonText> */}
          <SkeletonText isLoaded={isLoaded}>
            <Text minH="110px" fontWeight={700} fontSize="24px">{title}</Text>
          </SkeletonText>
          <Skeleton isLoaded={isLoaded}>
            <HStack>
              <Avatar name={instructorName} size="xs" src={avatarImgSrc} />
              <Text as="p" color="textSecondary" fontSize="sm">{instructorName}</Text>
            </HStack>
          </Skeleton>
        </Stack>
      </Box>
    </Box>
  )
}

export default GenericCourseCard;