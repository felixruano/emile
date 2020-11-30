import Head from 'next/head';
import { Flex } from '@chakra-ui/react';

import AuthCard from '@components/AuthCard';
import BaseContainer from '@components/layouts/BaseContainer';
import BenefitsSections from '@components/marketing/BenefitsSection';

const Index = () => (
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
            <Flex direction="column" justify="center" align="center" w="full" px={4} pt={[8, null, 16]} pb={[8, null, 40]} backgroundImage="url('curve-dot-pattern.jpg')" backgroundSize="2200px 1450px">
                <AuthCard />
            </Flex>
            <BenefitsSections />
        </BaseContainer>
    </>
);

export default Index;