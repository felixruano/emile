import { Button } from '@chakra-ui/react';
import Link from 'next/link';

import { useAuth } from '@utils/hooks/use-auth';

type SignUpButtonProps = {
    text: string;
    bgColor: string;
    actionBgColor: string;
};

const SignUpButton: React.FC<SignUpButtonProps> = ({ text, bgColor, actionBgColor }: SignUpButtonProps) => {
    const auth = useAuth();

    if (auth?.user) return null;

    return (
        <Link href="/signup">
            <Button
                shadow="md"
                w={['146px', null, '219px']}
                h={['44px', null, '68px']}
                textTransform="uppercase"
                bg={bgColor}
                color="white"
                letterSpacing="widest"
                fontSize={['base', null, '2xl']}
                _hover={{ bg: `${actionBgColor}` }}
                _active={{ bg: `${actionBgColor}` }}
            >
                {text}
            </Button>
        </Link>
    );
};

export default SignUpButton;
