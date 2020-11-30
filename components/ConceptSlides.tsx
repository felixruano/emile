import { useState } from 'react';
import Link from 'next/link';
import { Box, Button, Center, Flex, HStack, Image, Link as ChakraLink, SimpleGrid, Skeleton, SkeletonText, Spinner, Stack, Text, VStack } from "@chakra-ui/react";
import { RichText } from 'prismic-reactjs';
import { useQuery } from 'react-query';
import { FaLink } from 'react-icons/fa';

import { Client } from "prismic-configuration";

const SmallSlide = ({ isLoadedAndAuthenticated = false, index = 1, concept, changeTabIndex }) => {
  return (
    <Flex p={[2, 6]} _focusWithin={{ background: "#ECECFF", outline: 'none' }} _active={{ background: "#ECECFF", outline: 'none' }} onClick={() => changeTabIndex(index - 1)}>
      <Text mr={4}>{index}</Text>
      <Box overflow="hidden" as="button" textAlign="left" bg="white" shadow="base" w="360px" h="209px" borderRadius="12px" p={[0, 4]} _hover={{ boxShadow: '0 0 0 2px #4F46E8' }} _active={{ boxShadow: '0 0 0 2px #4F46E8', outline: 'none' }} _focus={{ boxShadow: '0 0 0 2px #4F46E8', outline: 'none' }}>
        <Stack spacing={4}>
          <Box fontWeight={600} fontSize="sm" color="#39356D">{RichText.render(concept.data.unit_title)}</Box>
          <SkeletonText noOfLines={4} isLoaded={isLoadedAndAuthenticated}>
            <Box fontSize="14px">{RichText.render(concept.data.content)}</Box>
          </SkeletonText>
        </Stack>
      </Box>
    </Flex>
  );
}

const ImageGallery = ({ isLoadedAndAuthenticated = false, imageGallery }) => {
  return (
    <SimpleGrid columns={[1, null, 2, 3]} spacing={8}>
      {imageGallery.map((image) => (
        <Skeleton rounded="lg" isLoaded={isLoadedAndAuthenticated} _hover={{ cursor: 'pointer', borderRadius: 'lg', boxShadow: '0 0 0 2px #4F46E8', outline: 'none' }} _focus={{ cursor: 'pointer', borderRadius: 'lg', boxShadow: '0 0 0 2px #4F46E8', outline: 'none' }} >
          <ChakraLink key={image.image.url} href={image.image.url} isExternal>
            <Image transition="0.25s ease all" alt={image.image.alt} fit="contain" p={4} boxSize="250px" src={image.image.url} />
          </ChakraLink>
        </Skeleton>
      ))}
    </SimpleGrid>
  );
}

const LargeSlide = ({ isLoadedAndAuthenticated = false, concept }) => {
  return (
    <Box bg="white" shadow="0px 3.10811px 6.21622px rgba(62, 62, 79, 0.06), 0px 6.21622px 9.32432px rgba(62, 62, 79, 0.1)" borderRadius="12px" w="100%">
      <Stack h="479px" spacing={8} p={[4, null, 10]} overflowY="scroll">
        <Box fontWeight={600} color="#39356D" letterSpacing="wide">{RichText.render(concept.data.unit_title)}</Box>
        {!isLoadedAndAuthenticated ? <SkeletonText noOfLines={4} isLoaded={false} /> : <RichText render={concept.data.content} />}
        <ImageGallery imageGallery={concept.data.image_gallery} isLoadedAndAuthenticated={isLoadedAndAuthenticated} />
      </Stack>
      <Flex h="88px" borderBottomRadius="12px" align="center" justify="flex-end" bg="#F9F9F9">
        <ChakraLink href={isLoadedAndAuthenticated ? concept.data.notion_link.url : ''} color="indigo.600" mr={8} textTransform="uppercase" letterSpacing="widest" isExternal>
          <HStack spacing={2}>
            <FaLink color="#4F46E8" />
            <Text>Learn More</Text>
          </HStack>
        </ChakraLink>
      </Flex>
    </Box>
  );
}

const SlideList = ({ isLoadedAndAuthenticated = false, concepts, changeTabIndex, }) => {
  return (
    <Box h="567px" border="2px solid #EAEAF0" borderRadius="8px" overflowY="scroll">
      <Stack spacing={0}>
        {concepts.map((concept, key) => <SmallSlide key={concept.id} index={key + 1} concept={concept} changeTabIndex={changeTabIndex} isLoadedAndAuthenticated={isLoadedAndAuthenticated} />)}
      </Stack>
    </Box>
  );
}

const ConceptSlides = ({ isAuthenticated = false, conceptList = [''] }) => {
  const [tabIndex, setTabIndex] = useState(0);
  const { isLoading, error, data } = useQuery(['concept_list', conceptList], () => Client().getByIDs(conceptList, {}));
  const isLoadedAndAuthenticated = !isLoading && isAuthenticated;

  if (isLoading) return <Center h="100vh" w="100vw">
    <Spinner color="indigo.600" />
  </Center>

  if (error) return <div>Error!</div>;

  return (
    <HStack pos="relative" display={['none', null, 'flex']} pt={6} spacing={12}>
      {!isAuthenticated && (<Center pos="absolute" left="30%" zIndex={10} bg="indigo.600" py={14} px={12} color="white" borderRadius="sm" shadow="lg">
        <VStack spacing={12}>
          <Text as="h3" fontWeight={600} fontSize="24px">Join Emile to get full access to summary ideas.</Text>
          <Link href="/signup">
            <Button color="indigo.600" textTransform="uppercase">Get Started</Button>
          </Link>
        </VStack>
      </Center>)}
      <SlideList concepts={data.results} changeTabIndex={setTabIndex} isLoadedAndAuthenticated={isLoadedAndAuthenticated} />
      <LargeSlide concept={data.results[tabIndex]} isLoadedAndAuthenticated={isLoadedAndAuthenticated} />
    </HStack>
  );
}

export default ConceptSlides;