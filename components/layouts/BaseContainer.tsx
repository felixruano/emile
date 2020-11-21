import { Box } from "@chakra-ui/react";

import Header from '@components/Header';
import Footer from '@components/Footer';

type BaseContainerProps = {
  children: React.ReactNode,
  backgroundColor?: string
};

const BaseContainer = ({ children, backgroundColor }: BaseContainerProps) => (
  <>
    <Header />
    <Box mt={["42px", null, 32]} bgColor={backgroundColor}>
      {children}
    </Box>
    <Footer />
  </>
);

export default BaseContainer;