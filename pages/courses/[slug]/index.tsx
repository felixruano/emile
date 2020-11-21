import { GetStaticPaths, GetStaticProps } from 'next';
import dynamic from 'next/dynamic';
import { Box, Button, Flex, Heading, Image, Stack, Tab, TabList, TabPanel, TabPanels, Tabs, Text } from "@chakra-ui/react";
import { AiOutlineShareAlt } from 'react-icons/ai';

import DnaIcon2 from "@components/icons/DnaIcon2";
import BaseContainer from "@components/layouts/BaseContainer";
import { queryRepeatableDocuments } from "@utils/queries";

import { Client } from "../../../prismic-configuration";

const DynamicCourseInformation = dynamic(() => import('@components/layouts/course-detail/about/CourseInformation'));

type HeaderProps = {
  icon?: React.ReactNode;
  title: string;
  description?: string;
}

const Header: React.FC<HeaderProps> = ({ title = '', description = '' }) => {
  return (
    <Flex direction={["column", null, "row"]} py={12} justify="space-between">
      <Stack direction={['column', null, 'row']} spacing={4} align={["center", null, "baseline"]}>
        <DnaIcon2 boxSize={10} color="indigo.600" />
        <Stack spacing={4} textAlign={["center", null, "left"]}>
          <Heading as="h2" fontSize="5xl" fontWeight={700}>{title}</Heading>
          <Text mt={4} color="textTertiary" maxW="2xl">{description}</Text>
        </Stack>
      </Stack>
      <Button mt={[8, null, 0]} variant="outline" colorScheme="indigo" leftIcon={<AiOutlineShareAlt />} textTransform="uppercase" letterSpacing="widest">
        Share Course
      </Button>
    </Flex>
  )
}

type CourseDetailProps = {
  courseInfo: Record<string, unknown>;
}

const CourseDetail: React.FC<CourseDetailProps> = ({ courseInfo }) => {
  const { course_title: courseTitle, course_image: courseImage, course_short_description: courseShortDescription } = courseInfo.data;
  return (
    <BaseContainer>
      <Image mx="auto" src={courseImage.url} objectFit="contain" alt="Hero Image" />
      <Box mx="auto" px={[4, null, 16]} maxW="1440px" color="textPrimary">
        <Header title={courseTitle[0].text} description={courseShortDescription[0].text} />
        <Tabs isLazy={true} colorScheme="black" isFitted={false}>
          <TabList>
            <Tab pb={8} mr={[24, null, 48]} textTransform="uppercase" letterSpacing="widest" borderBottom="4px solid #5F5F6C">About</Tab>
            <Tab pb={8} textTransform="uppercase" letterSpacing="widest" borderBottom="4px solid #5F5F6C">Lessons</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <DynamicCourseInformation courseInfo={courseInfo} />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </BaseContainer>
  )
}

export const getStaticProps: GetStaticProps = async ({ params, preview = null }) => {
  console.log(params, preview);
  const courseInfo = await Client().getByUID("course", params.slug, {});
  console.log('test', courseInfo);
  return {
    props: {
      preview,
      courseInfo
    }
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const documents = await queryRepeatableDocuments((doc: { type: string; }) => doc.type === 'course');
  return {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment 
    paths: documents.map((doc: { uid: string; }) => `/courses/${doc.uid}`),
    fallback: true,
  }
}

export default CourseDetail;