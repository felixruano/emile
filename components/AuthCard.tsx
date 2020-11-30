import Link from 'next/link';
import { useRouter } from 'next/router';
import { nanoid } from 'nanoid';
import { FcGoogle } from 'react-icons/fc';
import { FaArrowRight } from 'react-icons/fa';

import { useAuth } from '@utils/hooks/use-auth';
import createUser from '@utils/firebase/createUser';
import EmileShortIcon from './icons/EmileShortIcon';
import { db } from '@utils/firebase/firebaseClient';

const verifyAndUpdateReferralCode = (currentUserReferralCode) => {
    const referralCode = window.localStorage.getItem('referral_code');
    if (referralCode) {
        const referralCodeRef = db
            .collection('referralCodes')
            .doc(referralCode);
        const currentUserReferralCodeRef = db
            .collection('referralCodes')
            .doc(currentUserReferralCode);
        let newUsedCount;
        let newCurrentUsedCount;
        referralCodeRef
            .get()
            .then((doc) => {
                if (doc.exists) {
                    newUsedCount = doc.data().used_count + 1;
                    referralCodeRef.update({ used_count: newUsedCount });
                    window.localStorage.removeItem(referralCode);
                    currentUserReferralCodeRef
                        .get()
                        .then((doc) => {
                            if (doc.exists) {
                                newCurrentUsedCount = doc.data().used_count + 1;
                                currentUserReferralCodeRef.update({
                                    used_count: newCurrentUsedCount,
                                });
                            }
                        })
                        .catch((err) => console.log(err));
                }
            })
            .catch((err) => console.log(err));
    }
};

const AuthFooter = ({ isSignUpFlow }) => (
    <div className="px-8 py-8 bg-gray-100 md:px-20 md:py-12">
        <div className="flex flex-row items-center justify-center space-x-2">
            <span className="text-gray-600">
                {isSignUpFlow ? 'Have an account?' : "Don't have an account?"}
            </span>
            <Link href={isSignUpFlow ? '/login' : '/signup'}>
                <a className="flex items-center space-x-2 font-semibold tracking-wider text-indigo-600">
                    <span className="uppercase">
                        {isSignUpFlow ? 'Log in' : 'Request free trial'}
                    </span>
                    <FaArrowRight />
                </a>
            </Link>
        </div>
    </div>
);

export const AuthContent = ({ isSignUpFlow }) => {
    const router = useRouter();
    const auth = useAuth();

    const handleGoogleAuth = () => {
        auth.signInWithGoogleAuth()
            .then((data) => {
                if (data?.result?.additionalUserInfo?.isNewUser) {
                    const {
                        email,
                        given_name,
                        family_name,
                        locale,
                        verified_email,
                    } = data.result.additionalUserInfo.profile;
                    const { uid, displayName, photoURL } = data?.result?.user;
                    const creationTime =
                        data?.result?.user?.metadata?.creationTime;
                    const role = 'student';
                    const referralCode = nanoid();
                    createUser(
                        uid,
                        given_name,
                        family_name,
                        displayName,
                        email,
                        verified_email,
                        locale,
                        photoURL,
                        creationTime,
                        role,
                        referralCode
                    );
                    verifyAndUpdateReferralCode(referralCode);
                    // @ts-expect-error
                    analytics.identify(uid, {
                        given_name,
                        family_name,
                        displayName,
                        email,
                        verified_email,
                        locale,
                        creationTime,
                        role,
                        referralCode,
                    });
                    // @ts-expect-error
                    analytics.track('Account created', {
                        authentication: 'Google',
                    });
                    router.push('/signup/trial-info');
                } else if (
                    data?.code !==
                    ('auth/popup-closed-by-user' ||
                        'auth/cancelled-popup-request')
                ) {
                    // @ts-expect-error
                    analytics.track('Log in', { authentication: 'Google' });
                    router.push('/');
                }
            })
            .catch((error) => console.log(error));
    };

    return (
        <form>
            <div>
                <div className="flex flex-col items-center justify-center h-full px-4 py-8 mx-auto space-y-8">
                    <EmileShortIcon />
                    <h1 className="pb-8 text-5xl font-bold text-center text-gray-900 md:text-left">
                        {isSignUpFlow ? 'Get ' : 'Hey, '}
                        <span className="pb-4 leading-loose text-indigo-600 border-b-8 border-indigo-600 md:whitespace-pre">
                            {isSignUpFlow ? 'started.' : 'welcome back!'}
                        </span>
                    </h1>
                    <p className="text-base text-center text-gray-600">
                        {isSignUpFlow
                            ? 'Enjoy a complimentary 1-month trial. No payment information required.'
                            : 'Log in to continue to your account.'}
                    </p>
                </div>
                <button
                    type="button"
                    className="flex items-center w-full px-4 py-2 my-4 text-base font-medium leading-6 text-white uppercase transition duration-150 ease-in-out bg-white border rounded-md focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo"
                    onClick={handleGoogleAuth}
                >
                    <div className="float-left">
                        <FcGoogle size="2rem" />
                    </div>
                    <p className="ml-20 text-base text-gray-800 uppercase sm:ml-32">
                        {isSignUpFlow
                            ? 'Sign up with Google'
                            : 'Log In With Google'}
                    </p>
                </button>
            </div>
        </form>
    );
};

const AuthCard: React.FC = () => {
    const router = useRouter();
    const isSignUpFlow = router.asPath.includes('signup');

    return (
        <div className="w-full max-w-xl rounded shadow-lg sm:w-auto">
            <div className="p-8 overflow-hidden bg-white">
                <AuthContent isSignUpFlow={isSignUpFlow} />
            </div>
            <AuthFooter isSignUpFlow={isSignUpFlow} />
        </div>
    );
};

export default AuthCard;
