import { Center, Heading, Wrap, WrapItem } from "@chakra-ui/react";
import GenericCourseCard from "@components/cards/GenericCourseCard";

const genericCourseCardInfo = {
  imageSrc: '',
  numberOfStudents: 400,
  title: 'AP Literature and Composition',
  avatarImgSrc: '',
  instructorName: 'Alex Benke',
}

const AvailableCoursesGrid = () => (
  <Center py={16} flexDirection="column">
    <Heading as="h3" fontWeight={600} fontSize="32px" textAlign="center">View Other Courses</Heading>
    <Wrap mt={12} spacing={24} justify="center" align="center">
      <WrapItem>
        <GenericCourseCard {...genericCourseCardInfo} />
      </WrapItem>
      <WrapItem>
        <GenericCourseCard {...genericCourseCardInfo} />
      </WrapItem>
    </Wrap>
  </Center>
);

export default AvailableCoursesGrid;