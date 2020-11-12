import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import useClipboard from 'react-use-clipboard';
import {
    Box,
    Flex,
    Heading,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalBody,
    ModalCloseButton,
    Text,
    useDisclosure,
    VStack,
} from '@chakra-ui/core';

import { db } from '../../utils/firebase/firebaseClient';
import BaseContainer from '../../components/layouts/BaseContainer';
import { useAuth } from '../../utils/use-auth';

const getUserInformation = async (uid) => {
    const docRef = db.collection('users').doc(uid);

    return await docRef
        .get()
        .then((doc) => {
            if (doc.exists) {
                return doc.data();
            } else {
                console.log('No such document!');
            }
        })
        .catch((err) => console.log(err));
};

const getReferralCount = async (referralCode) => {
    const docRef = db.collection('referralCodes').doc(referralCode);

    return await docRef.get().then((doc) => {
        if (doc.exists) {
            return doc.data();
        }
    });
};

const ProfileHeader = ({ auth }) => (
    <div className="flex flex-col items-center justify-between w-full p-0 py-12 space-y-8 border-b md:p-12 md:flex-row">
        <div className="flex flex-col items-center space-y-4 md:space-y-0 md:space-x-8 md:flex-row">
            <img
                className="inline object-cover w-32 h-32 mr-2 rounded-full"
                src={auth?.user?.photoURL}
                alt="Profile image"
            />
            <div className="space-y-4">
                {/* <p className="font-semibold text-gray-500">Username</p> */}
                <h1 className="text-4xl font-bold text-gray-800">
                    {auth?.user?.displayName}
                </h1>
                {/* <p className="text-gray-400">
                    He/Him/His • Sophomore • Santa Monica, CA
                </p> */}
            </div>
        </div>
        {/* <Link href="/profile/manage">
            <a className="inline-flex items-center space-x-2 font-semibold text-indigo-600 uppercase">
                <span>Account</span>
                <FaArrowRight />
            </a>
        </Link> */}
    </div>
);

const ReferralButton = ({ referralCode }: { referralCode: string }) => {
    const [isCopied, setCopied] = useClipboard(
        `http://hiemile.com/?referral_code=${referralCode}`
    );

    return (
        <div className="flex flex-col lg:flex-row">
            <div className="w-full p-4 text-base leading-6 text-gray-900 placeholder-gray-800 transition duration-150 ease-in-out bg-white border-t border-l border-r border-gray-300 rounded-tl rounded-bl appearance-none lg:max-w-xl md:border-t md:border-b md:border-l md:pr-32 focus:outline-none focus:shadow-outline-blue focus:border-blue-300">
                {`http://hiemile.com/?referral_code=${referralCode}`}
            </div>
            <button
                className="p-4 text-white bg-indigo-700 rounded-tr rounded-br"
                onClick={setCopied}
            >
                <span className="font-semibold uppercase">
                    {isCopied ? 'Copied!' : 'Copy'}
                </span>
            </button>
        </div>
    );
};

const ReferralBlock = ({ referralCode, referralData }) => (
    <div className="px-8 py-8 mt-12 md:px-12 bg-teal-50">
        <div className="flex flex-col justify-between space-y-8 lg:flex-row">
            <div className="flex flex-col items-center space-x-2 md:flex-row lg:w-3/4">
                <img
                    className="mx-8 mb-16 lg:mx-0 lg:mr-2"
                    src="/referral-icon.svg"
                />
                <div className="space-y-4">
                    <h2 className="text-2xl text-center md:text-left">
                        Get 1 Month Free
                    </h2>
                    <p className="w-full text-center text-gray-500 md:text-left md:w-3/4">
                        Earn <span className="font-bold">1 free month</span> of
                        Emile for you and a friend when that friend signs up
                        using your code.
                    </p>
                </div>
            </div>
            <div className="w-auto space-y-8">
                <ReferralButton referralCode={referralCode} />
                {referralData?.used_count > 0 && (
                    <p className="w-full text-center text-gray-500 lg:max-w-xl lg:ml-auto">
                        You have{' '}
                        <span className="font-bold">
                            {referralData?.used_count}{' '}
                            {referralData?.used_count === 1
                                ? 'month'
                                : 'months'}
                        </span>{' '}
                        on top of your free trial available. Thanks for sharing!
                        🚀
                    </p>
                )}
            </div>
        </div>
    </div>
);

const Index = () => {
    const auth = useAuth();
    const router = useRouter();
    const [userInfo, setUserInfo] = useState<any>();
    const [referralData, setReferralData] = useState<any>();
    const { isOpen, onOpen, onClose } = useDisclosure();

    useEffect(() => {
        async function fetchData() {
            if (auth?.user) {
                const userInfo = await getUserInformation(auth?.user?.uid);
                setUserInfo(userInfo);
                const referralData = await getReferralCount(
                    // @ts-ignore
                    userInfo.referral_code
                );
                setReferralData(referralData);
            }
        }

        fetchData();
    }, [auth?.user]);

    useEffect(() => {
        if (router.query.accountCreated) {
            onOpen();
        }
    }, [router]);

    if (!auth?.user) return '';

    return (
        <BaseContainer>
            <div className="pb-64 md:px-12">
                <ProfileHeader auth={auth} />
                <ReferralBlock
                    referralCode={userInfo?.referral_code}
                    referralData={referralData}
                />
            </div>
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalCloseButton />
                    <ModalBody>
                        <Flex justifyContent="center" py={4}>
                            <VStack mt={8} spacing={4}>
                                <img src="/balloons-icon.svg" />
                                <Heading as="h3" size="xl">
                                    Welcome!
                                </Heading>
                                <Text textAlign="center" color="gray.600">
                                    You’ve successfully created your profile on
                                    Emile! Your free trial begins on{' '}
                                    <span className="font-semibold">
                                        November 30
                                    </span>
                                    , when we officially launch our courses. In
                                    the meantime, access your profile and
                                    account settings here.
                                </Text>
                                <Box
                                    as="button"
                                    height="48px"
                                    width="200px"
                                    color="white"
                                    rounded="2px"
                                    textTransform="uppercase"
                                    fontWeight={600}
                                    bg="#4F46E8"
                                    onClick={onClose}
                                >
                                    Got It
                                </Box>
                            </VStack>
                        </Flex>
                    </ModalBody>
                </ModalContent>
            </Modal>
        </BaseContainer>
    );
};

export default Index;
