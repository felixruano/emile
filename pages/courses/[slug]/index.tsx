import { useState } from 'react';
import Head from 'next/head';
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import dynamic from 'next/dynamic';
import { Box, Button, Center, CircularProgress, Flex, Heading, Image, Stack, Tab, TabList, TabPanel, TabPanels, Tabs, Text, useClipboard } from "@chakra-ui/react";
import { AiOutlineShareAlt } from 'react-icons/ai';

import BaseContainer from "@components/layouts/BaseContainer";
import { queryRepeatableDocuments } from "@utils/prismic/queries";

import { Client } from "../../../prismic-configuration";
import { useRouter } from 'next/router';

const DynamicCourseInformation = dynamic(() => import('@components/layouts/course-detail/about/CourseInformation'));

const DynamicLessonView = dynamic(() => import('@components/layouts/course-detail/lessons/TimelineView'));

type HeaderProps = {
  icon?: React.ReactNode;
  title: string;
  description?: string;
}

const Header: React.FC<HeaderProps> = ({ title = '', description = '' }) => {
  const router = useRouter();
  const [value] = useState(`https://hiemile.com${router.asPath}`);
  const { hasCopied, onCopy } = useClipboard(value);

  return (
    <Flex direction={["column", null, "row"]} py={12} justify="space-between">
      <Stack direction={['column', null, 'row']} spacing={4} align={["center", null, "baseline"]}>
        <Stack spacing={4} textAlign={["center", null, "left"]}>
          <Heading as="h2" fontSize="5xl" fontWeight={700}>{title}</Heading>
          <Text mt={4} color="textTertiary" maxW="2xl">{description}</Text>
        </Stack>
      </Stack>
      <Button mt={[8, null, 0]} variant="outline" colorScheme="indigo" leftIcon={<AiOutlineShareAlt />} textTransform="uppercase" letterSpacing="widest" onClick={onCopy}>
        {hasCopied ? 'Copied!' : 'Share Course'}
      </Button>
    </Flex>
  )
}

type CourseDetailProps = {
  courseInfo: {
    [key: string]: any;
  };
}

const CourseDetail: NextPage<CourseDetailProps> = ({ courseInfo }) => {
  const [tabIndex, setTabIndex] = useState(0);

  if (!courseInfo) {
    return (
      <BaseContainer>
        <Center>
          <CircularProgress isIndeterminate color="indigo.600" />
        </Center>
      </BaseContainer>
    )
  }

  const getListOfLessons = () => {
    const lessonsArr = [];
    courseInfo.data.lessons.map((lesson) => {
      lessonsArr.push(lesson.lesson.id);
    })
    return lessonsArr;
  }

  const { course_title: courseTitle, course_image: courseImage, course_short_description: courseShortDescription } = courseInfo?.data;
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
      <BaseContainer>
        <Image mx="auto" src={courseImage.url} objectFit="contain" alt="Hero Image" />
        <Box mx="auto" px={[4, null, 16]} maxW="1440px" color="textPrimary">
          <Header title={courseTitle[0].text} description={courseShortDescription[0].text} />
          <Tabs isLazy={true} colorScheme="indigo" isFitted={true} onChange={(index) => setTabIndex(index)}>
            <TabList color="A9A9B8">
              <Tab pb={8} textTransform="uppercase" letterSpacing="widest" borderBottom="4px solid">About</Tab>
              <Tab pb={8} textTransform="uppercase" letterSpacing="widest" borderBottom="4px solid">Lessons</Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <DynamicCourseInformation isOpen={tabIndex === 0} courseInfo={courseInfo} />
              </TabPanel>
              <TabPanel>
                <DynamicLessonView courseImageSrc={courseImage.url} listOfLessons={getListOfLessons()} isOpen={tabIndex === 1} />
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Box>
      </BaseContainer>
    </>
  )
}

export const getStaticProps: GetStaticProps = async ({ params, preview = null }) => {
  const courseInfo = await Client().getByUID("course", params.slug as string, {});
  return {
    props: {
      preview,
      courseInfo
    }
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const documents = await queryRepeatableDocuments((doc: { type: string; }) => doc.type === 'course');
  const paths = documents.map((doc: { uid: string }) => ({ params: { slug: doc.uid } }));
  return {
    paths,
    fallback: false,
  }
}

export default CourseDetail;