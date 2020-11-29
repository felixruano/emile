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
} from '@chakra-ui/react';
import { getAllUsers } from '@utils/firebase/getAllUsers';

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

const ParticipantCountBox = () => (
    <Box borderBottom="2px solid #EAEAF0">
        <Text pl={4} py={8} fontSize="14px" color="textSecondary">
            All 53
        </Text>
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
    for (let i = 0; i <= 7; i++) {
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
            {users.map((user, index) => (
                <ChatListItem
                    key={user.displayName}
                    index={index + 1}
                    photoURL={user.photoURL}
                    displayName={user.displayName}
                />
            ))}
        </List>
    );
};

const ChatBox = () => {
    const [users, setUsers] = useState();

    // useEffect(() => {
    //     async function getData() {
    //         const fetchedUsers = await getAllUsers();
    //         setUsers(fetchedUsers);
    //     }
    //     getData();
    // }, []);

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
            {/* <ParticipantCountBox /> */}
            {/* <ChatList users={users} /> */}
        </Box>
    );
};

export default ChatBox;
