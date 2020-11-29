import { Box, Center, Icon } from "@chakra-ui/react";
import { FaPlay } from "react-icons/fa";

/*
* @param color takes in any theme color from ChakraUI or theme.js
* @param centerInImage boolean value sets center in image
*/
const PlayCircleIcon = ({ color = 'indigo.600', centerInImage = false }) => (
  centerInImage ? (
    <Box pos="absolute" top="50%" left="50%" color={color}>
      <Center w="72px" h="72px" bg="currentColor" rounded="full" transform="translate(-50%, -50%)">
        <Icon w="18px" h="24px" color="white" as={FaPlay} />
      </Center>
    </Box>
  ) : (
      <Center w="72px" h="72px" bg={color} rounded="full" transform="translate(-50%, -50%)">
        <Icon w="18px" h="24px" color="white" as={FaPlay} />
      </Center>
    )
);

export default PlayCircleIcon;