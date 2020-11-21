import { Flex } from '@chakra-ui/react';

import BaseContainer from './BaseContainer';

const AuthContainer: React.FC = ({ children }) => (
  <BaseContainer>
    <Flex justify="center" align="center" w="full" px={4} py={[24, null, null, 56]} backgroundImage="url('curve-dot-pattern.jpg')" backgroundSize="2200px 1450px">
      {children}
    </Flex>
  </BaseContainer>
);

export default AuthContainer;