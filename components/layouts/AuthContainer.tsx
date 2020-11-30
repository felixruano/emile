import { Flex } from '@chakra-ui/react';

import BaseContainer from './BaseContainer';

const AuthContainer: React.FC = ({ children }) => (
  <BaseContainer>
    <Flex direction="column" justify="center" align="center" w="full" px={4} pt={[8, null, 16]} pb={[8, null, 40]} backgroundImage="url('curve-dot-pattern.jpg')" backgroundSize="2200px 1450px">
      {children}
    </Flex>
  </BaseContainer>
);

export default AuthContainer;