import Link from 'next/link';
import { Button, HStack, Text } from '@chakra-ui/core';
import { FaArrowRight } from 'react-icons/fa';

type CustomLinkProps = {
    href: string;
    color: string;
    text: string;
    hasArrow?: boolean;
};

const CustomLink = ({ href, color, text, hasArrow }: CustomLinkProps) => {
    return (
        <Link href={href}>
            <Button
                variant="link"
                size="lg"
                color={color}
                textTransform="uppercase"
                rightIcon={hasArrow && <FaArrowRight />}
            >
                {text}
            </Button>
        </Link>
    );
};

export default CustomLink;
