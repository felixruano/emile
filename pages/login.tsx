import Head from 'next/head';

import AuthCard from '@components/AuthCard';
import AuthContainer from '@components/layouts/AuthContainer';

const Login = () => (
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
        <AuthContainer>
            <AuthCard />
        </AuthContainer>
    </>
);

export default Login;
