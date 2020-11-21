import { useState } from 'react';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import { Avatar, Box, Button, Flex, HStack, IconButton, Menu, MenuButton, MenuList, MenuItem, Text, VStack } from '@chakra-ui/react';
import { FaTimes } from 'react-icons/fa';

import EmileLongIcon from './icons/EmileLongIcon';
import MobileMenuButton from './MobileMenuButton';
import { useAuth } from '@utils/use-auth';

type UserMenuProps = {
    name: string;
    src: string;
    handleLogout: () => void;
}

const UserMenu: React.FC<UserMenuProps> = ({ name, src, handleLogout }: UserMenuProps) => (
    <Menu placement="bottom-end">
        <MenuButton>
            <Avatar name={name} src={src} />
        </MenuButton>
        <MenuList>
            <NextLink href="/profile">
                <MenuItem>
                    Account
            </MenuItem>
            </NextLink>
            <MenuItem onClick={handleLogout}>
                Sign Out
            </MenuItem>
        </MenuList>
    </Menu>
)

const MobileMenuLink = ({ text, href = '' }) => (
    <NextLink href={href}>
        <Button variant="unstyled" role="menuitem" w="100%">
            <Box
                textAlign="center"
                rounded="md"
                py={2}
                mx={2}
                letterSpacing="wide"
                _hover={{
                    color: 'gray.900',
                    bg: 'gray.50'
                }}
                _focus={{
                    outline: 'none',
                    color: 'gray.900',
                    background: 'gray.50',
                }}
            >
                <Flex align="center" justify="center" ml={5}>
                    <Text
                        fontSize="1rem"
                        fontWeight="medium"
                    >
                        {text}
                    </Text>
                </Flex>
            </Box>
        </Button>
    </NextLink>
);

const MobileMenu = ({ toggleMobileMenu }) => (
    <Box position="absolute" top="0" w="96.5%" m={2}>
        <Box rounded="lg" shadow="md">
            <Box
                rounded="lg"
                bg="white"
                shadow="xs"
                overflow="hidden"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="main-menu"
            >
                <Flex px="5" pt="4" align="center" justify="space-between">
                    <EmileLongIcon boxSize={16} color="#4F46E8" />
                    <IconButton
                        variant="ghost"
                        color="gray.400"
                        aria-label="Close menu"
                        size="lg"
                        icon={<FaTimes />}
                        onClick={toggleMobileMenu}
                    />
                </Flex>
                <VStack spacing={0}>
                    <MobileMenuLink text="Explore Courses" href="/courses" />
                    <MobileMenuLink text="Log In" href="/login" />
                    <FreeTrialButton />
                </VStack>
            </Box>
        </Box>
    </Box>
);

type NavItemProps = {
    href: string;
    text: string;
}

const NavItem: React.FC<NavItemProps> = ({ href, text }: NavItemProps) => (
    <NextLink href={href}>
        <Button visibility={["hidden", null, "visible"]} variant="link" color="textPrimary" textTransform="uppercase" fontWeight={400} letterSpacing="widest" textDecoration="none !important">{text}</Button>
    </NextLink>
);

const FreeTrialButton: React.FC = () => (
    <NextLink href="/signup">
        <Button
            shadow="md"
            w="211px"
            h={"40px"}
            textTransform="uppercase"
            bg="indigo.600"
            color="white"
            letterSpacing="widest"
            _hover={{ bg: "indigo.500" }}
            _active={{ bg: "indigo.500" }}
        >
            Request Free Trial
        </Button>
    </NextLink>
);

const Nav: React.FC = () => {
    const auth = useAuth();
    const router = useRouter();
    const [showMenu, setShowMenu] = useState(false);

    const toggleMobileMenu = () => setShowMenu(!showMenu);

    const handleLogout = () => {
        auth.signOut();
        router.push('/');
    }

    return (
        <nav>
            <Box w="100%" pos="fixed" top="0" left="0" right="0" zIndex="sticky" shadow="base" bg="white">
                <Box h={["42px", null, 32]} bg="transparent" maxW="1440px" mx="auto" px={[3, null, 8]}>
                    <Flex h="100%" align="center">
                        <HStack w="100%" spacing={12}>
                            <NextLink href="/">
                                <Box pb={[0, null, 2]} tabIndex={1} _hover={{ cursor: "pointer" }}>
                                    <EmileLongIcon boxSize={[16, null, 24]} color="#4F46E8" />
                                </Box>
                            </NextLink>
                            <Flex w="100%" align="center" justify="space-between">
                                <NavItem href="/courses" text="Explore Courses" />
                                <Box onClick={toggleMobileMenu}>
                                    <MobileMenuButton />
                                </Box>
                                {auth?.user ? (
                                    <UserMenu name={auth.user.displayName} src={auth.user.photoURL} handleLogout={handleLogout} />
                                ) : (
                                        <HStack display={["none", null, "block"]} spacing={8}>
                                            <NavItem href="/login" text="Log In" />
                                            <FreeTrialButton />
                                        </HStack>
                                    )}
                            </Flex>
                        </HStack>
                    </Flex>
                </Box>
                {showMenu && <MobileMenu toggleMobileMenu={toggleMobileMenu} />}
            </Box>
        </nav>
    );
}

export default Nav;
