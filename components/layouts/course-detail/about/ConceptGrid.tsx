import { SkeletonCircle, Text, VStack, Wrap, WrapItem } from "@chakra-ui/react";

const ConceptItem = () => (
  <VStack spacing={4}>
    <SkeletonCircle size="20" />
    <Text as="h4" fontWeight="600">Concept</Text>
    <Text color="textSecondary" textAlign="center">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
  </VStack>
)

const ConceptGrid = () => (
  <Wrap bg="gray.50" py={16} spacing={16} justify="center">
    <WrapItem w="180px">
      <ConceptItem />
    </WrapItem>
    <WrapItem w="180px">
      <ConceptItem />
    </WrapItem>
    <WrapItem w="180px">
      <ConceptItem />
    </WrapItem>
    <WrapItem w="180px">
      <ConceptItem />
    </WrapItem>
    <WrapItem w="180px">
      <ConceptItem />
    </WrapItem>
    <WrapItem w="180px">
      <ConceptItem />
    </WrapItem>
  </Wrap>
);

export default ConceptGrid;