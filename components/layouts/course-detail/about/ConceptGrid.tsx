import { Box, Image, Skeleton, SkeletonCircle, SkeletonText, VStack, Wrap, WrapItem } from "@chakra-ui/react";
import { RichText, RichTextBlock } from "prismic-reactjs";

const EmptyConceptItem = () => (
  <VStack spacing={3}>
    <SkeletonText isLoaded={false} noOfLines={1} />
    <SkeletonText isLoaded={false} noOfLines={3} />
  </VStack>
);

type ConceptItemProps = {
  icon: any;
  title: RichTextBlock[];
  description: RichTextBlock[];
}

const ConceptItem: React.FC<ConceptItemProps> = ({ icon, title, description }) => {
  return (
    <VStack spacing={3}>
      <SkeletonCircle size="20" isLoaded={icon}>
        <Image src={icon.url} alt={icon.alt} />
      </SkeletonCircle>
      <Skeleton isLoaded={!!title}>
        <Box fontWeight="600" textTransform="uppercase" textAlign="center">{RichText.render(title)}</Box>
      </Skeleton>
      <Skeleton isLoaded={!!description}>
        <Box color="textSecondary" textAlign="center">{RichText.render(description)}</Box>
      </Skeleton>
    </VStack>
  );
}

const ConceptGrid = ({ concepts }) => {
  if (concepts.length === 0) {
    return (
      <Wrap bg="gray.50" py={16} spacing={12} justify="center">
        <WrapItem w="300px">
          <EmptyConceptItem />
        </WrapItem>
        <WrapItem w="300px">
          <EmptyConceptItem />
        </WrapItem>
        <WrapItem w="300px">
          <EmptyConceptItem />
        </WrapItem>
      </Wrap>
    );
  }

  return (
    <Wrap bg="gray.50" py={16} spacing={12} justify="center">
      {concepts.map((concept) => <WrapItem key={concept.title[0].text} w="220px">
        <ConceptItem icon={concept.icon} title={concept.title} description={concept.description} />
      </WrapItem>)}
    </Wrap>
  )
}

export default ConceptGrid;