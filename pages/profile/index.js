import { useState, useEffect } from 'react';
import useClipboard from 'react-use-clipboard';

import { db } from '../../utils/firebase/firebaseClient';
import Container from '../../components/Container';
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

const ProfileHeader = ({ auth }) => (
    <div className="flex flex-col items-center justify-between w-full p-0 pb-12 space-y-8 border-b md:p-12 md:flex-row">
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

const ReferralButton = ({ referralCode }) => {
    const [isCopied, setCopied] = useClipboard(`http://localhost:3000/?referral_code=${referralCode}`);

    return (
        <div className="inline-flex">
            <div
                aria-label="First name"
                name="firstName"
                type="text"
                className="max-w-xl p-4 text-base leading-6 text-gray-900 placeholder-gray-800 transition duration-150 ease-in-out bg-white border-t border-b border-l border-gray-300 rounded-tl rounded-bl appearance-none md:pr-32 focus:outline-none focus:shadow-outline-blue focus:border-blue-300"
            >
                {`http://localhost:3000/?referral_code=${referralCode}`}
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

const ReferralBlock = ({ referralCode }) => (
    <div className="px-8 py-8 mt-12 md:px-12 bg-teal-50">
        <div className="flex flex-col justify-between space-y-8 lg:flex-row">
            <div className="flex items-center space-x-2 lg:w-3/4">
                <img
                    className="mx-8 mb-16 lg:mx-0 lg:mr-2"
                    src="/referral-icon.svg"
                />
                <div className="space-y-4">
                    <h2 className="text-2xl">Get 2 Months Free</h2>
                    <p className="w-full text-gray-500 md:w-3/4">
                        Earn <span className="font-bold">2 free months</span> of
                        Emile for you and a friend when that friend signs up
                        using your code.
                    </p>
                </div>
            </div>
            <div className="flex flex-col w-auto space-y-8">
                <ReferralButton referralCode={referralCode} />
                <span className="max-w-xl text-center text-gray-500 lg:ml-auto">
                    Up to 5 referrals. After your first referral, you are
                    eligible for 1 free month per referral. New users receive 2
                    free months.
                </span>
            </div>
        </div>
    </div>
);

const Index = () => {
    const auth = useAuth();
    const [userInfo, setUserInfo] = useState();

    useEffect(() => {
        async function fetchUserInfo() {
            if (auth?.user) {
                const userInfo = await getUserInformation(auth?.user?.uid);
                setUserInfo(userInfo);
                console.log(userInfo);
            }
        }

        fetchUserInfo();
    }, [auth?.user]);

    if (!auth?.user) return '';

    return (
        <Container>
            <div className="pb-64 md:px-12">
                <ProfileHeader auth={auth} />
                <ReferralBlock referralCode={userInfo?.referral_code} />
            </div>
        </Container>
    );
};

export default Index;
