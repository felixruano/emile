import { Box } from "@chakra-ui/core";

import Header from '@components/Header';
import Footer from '@components/Footer';

type BaseContainerProps = {
  children: React.ReactNode,
  backgroundColor?: string
};

const BaseContainer = ({ children, backgroundColor }: BaseContainerProps) => (
  <>
    <Header />
    <Box bgColor={backgroundColor}>
      {children}
    </Box>
    <Footer />
  </>
);

export default BaseContainer;