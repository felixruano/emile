// @ts-nocheck
import { useState, useEffect } from 'react';
import {
    Avatar,
    Box,
    Center,
    Flex,
    Heading,
    HStack,
    ListItem,
    List,
    Skeleton,
    SkeletonCircle,
    Text,
    SkeletonText,
} from '@chakra-ui/react';
import { useAuth } from '@utils/hooks/use-auth';
import { addUserToChat } from '@utils/firebase/addUserToChat';
import { useRouter } from 'next/router';
import { getAllUsersInChat } from '@utils/firebase/getAllUsersInChat';
import { removeUserFromChat } from '@utils/firebase/removeUserFromChat';

const Header = () => (
    <Center>
        <Heading
            py={4}
            px={20}
            fontWeight={600}
            fontSize="16px"
            textTransform="uppercase"
            borderBottom="1px solid #EAEAF0"
        >
            Participants
        </Heading>
    </Center>
);

const ParticipantCountBox = ({ numUsers = 0 }) => (
    <Box borderBottom="2px solid #EAEAF0">
        <SkeletonText noOfLines={1} isLoaded={numUsers > 0}>
        <Text pl={4} py={8} fontSize="14px" color="textSecondary">
            All {numUsers}
        </Text>
        </SkeletonText>
    </Box>
);

const ChatListItem = ({ displayName, photoURL, index }) => (
    <ListItem py={8} px={4} borderTop="1px solid #EAEAF0" bg="gray.50">
        <Flex align="center">
            <HStack spacing={4}>
                <Text fontSize="14px" color="textTertiary">
                    {index}
                </Text>
                <Avatar name="test" src={photoURL} />
                <Text fontWeight={600} fontSize="14px" lineHeight="24px">
                    {displayName}
                </Text>
            </HStack>
        </Flex>
    </ListItem>
);

const EmptyChatListItem = ({ index }) => (
    <ListItem py={8} px={4} borderTop="1px solid #EAEAF0" bg="gray.50">
        <Flex align="center">
            <HStack spacing={4}>
                <Text fontSize="14px" color="textTertiary">
                    {index}
                </Text>
                <SkeletonCircle size="10" />
                <Skeleton height="20px">test</Skeleton>
            </HStack>
        </Flex>
    </ListItem>
);

const quickFunction = () => {
    const items = [];
    for (let i = 0; i <= 3; i++) {
        items.push(i);
    }
    return items;
};

const items = quickFunction();

const ChatList = ({ users }) => {
    if (!users) {
        return (
            <List styleType="none" overflowY="scroll">
                {items.map((item, index) => (
                    <EmptyChatListItem key={`test-${index}`} index={index} />
                ))}
            </List>
        );
    }

    return (
        <List float="left" maxH="472px" styleType="none" overflowY="scroll">
            {Object.keys(users).map((id, index) => { 
                return (
                <ChatListItem
                    key={id}
                    index={index + 1}
                    photoURL={users[id].imageSrc}
                    displayName={users[id].displayName}
                />
            )})}
        </List>
    );
};

const ChatBox = () => {
    const auth = useAuth();
    const router = useRouter();
    const [users, setUsers] = useState();

    useEffect(() => {
        if (auth?.user) {
            const sessionID = router.query.lesson;
            async function addUser() {
                await addUserToChat(sessionID, auth?.user?.uid, auth?.user?.displayName, auth?.user?.photoURL)
            }
            
            addUser();
            return () => {
                const sessionId = router.query.lesson;
                removeUserFromChat(sessionId, auth?.user?.uid);
            }
        }
    }, [auth?.user]);

    useEffect(() => {
        if (auth?.user) {
            const sessionID = router.query.lesson;
            async function getAllUsers() {
                const chatUsers = await getAllUsersInChat(sessionID);
                setUsers(chatUsers);
            }
            getAllUsers();
        }
    }, [auth?.user])

    return (
        <Box
            overflowY="scroll"
            shadow="xl"
            rounded="base"
            maxW="xl"
            bg="white"
            color="textPrimary"
            display={["none", null, "block"]}
        >
            <Header />
            <ParticipantCountBox numUsers={users ? Object.keys(users).length : undefined} />
            <ChatList users={users} />
        </Box>
    );
};

export default ChatBox;
