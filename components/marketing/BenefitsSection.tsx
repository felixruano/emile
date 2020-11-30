import { Box, Center, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import { FaRegCheckCircle } from 'react-icons/fa';

const BenefitsSections = () => {
  return (
    <Box py={14} bg="#2A2848">
      <SimpleGrid justify="center" align={["center", null, "flex-start"]} spacing={8} columns={[1, null, 3]} px={8} maxW="1440px" mx="auto">
        <Center>
          <Stack align={["center", null, "flex-start"]} justify="center" direction="column" spacing={2} textAlign={["center", null, "left"]}>
            <Box pb={4}>
              <FaRegCheckCircle size="32px" color="#ADA9FF" />
            </Box>
            <Text fontWeight={700} fontSize="20px" color="#F9F9F9" maxW="sm" minH="4em">
              Unlimited access to our
              learning platform
          </Text>
            <Text color="#ECECFF" fontSize="sm">
              Livestream the best instructors or watch recordings on-demand, participate in our vibrant global community, and more.
          </Text>
          </Stack>
        </Center>
        <Center>
          <Stack align={["center", null, "flex-start"]} justify="center" direction="column" spacing={2} textAlign={["center", null, "left"]}>
            <Box pb={4}>
              <FaRegCheckCircle size="32px" color="#ADA9FF" />
            </Box>
            <Text fontWeight={700} fontSize="20px" color="#F9F9F9" maxW="sm" minH="4em">
              Our proven mastery techniques accelerate learning
          </Text>
            <Text color="#ECECFF" fontSize="sm">
              Track your progress through your ability to articulate a concept, not just a quiz score, with our proprietary learning platform.
          </Text>
          </Stack>
        </Center>
        <Center>
          <Stack align={["center", null, "flex-start"]} direction="column" spacing={2} textAlign={["center", null, "left"]}>
            <Box pb={4}>
              <FaRegCheckCircle size="32px" color="#ADA9FF" />
            </Box>
            <Text fontWeight={700} fontSize="20px" color="#F9F9F9" maxW="sm" minH="4em">
              $19.99 per month to continue learning after trial ends
          </Text>
            <Text color="#ECECFF" fontSize="sm">
              No need to break the bank! We are intentionally affordable to make high-quality education accessible to all.
          </Text>
          </Stack>
        </Center>
      </SimpleGrid>
    </Box>
  );
}

export default BenefitsSections;