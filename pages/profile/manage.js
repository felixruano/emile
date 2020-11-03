import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

import Container from '../../components/Container';

const ProfileTabs = ({ handleTabChange, currentTab }) => (
    <ul className="flex space-x-8 border-b sm:flex-row" role="tablist">
        <li
            className={`${
                currentTab === 1 && 'font-bold border-b-4 border-gray-700'
            } cursor-pointer pb-8 text-xl text-gray-900 uppercase select-none`}
            role="tablist"
            data-toggle="tab"
            onClick={(e) => {
                e.preventDefault();
                handleTabChange(1);
            }}
        >
            Account Information
        </li>
        <li
            className={`${
                currentTab === 2 && 'font-bold border-b-4 border-gray-700'
            } cursor-pointer pb-8 text-xl text-gray-900 uppercase select-none`}
            role="tablist"
            data-toggle="tab"
            onClick={(e) => {
                e.preventDefault();
                handleTabChange(2);
            }}
        >
            Profile Information
        </li>
    </ul>
);

const ProfileContent = () => {
    const [currentTab, setCurrentTab] = useState(1);

    const profileContentData = [
        {
            key: 'first-name',
            text: 'First Name',
        },
        {
            key: 'last-name',
            text: 'Last Name',
        },
        {
            key: 'phone-number',
            text: 'Phone Number',
        },
    ];

    return (
        <div>
            <ProfileTabs
                currentTab={currentTab}
                handleTabChange={setCurrentTab}
            />
            <div className="mt-4">
                {profileContentData.map((profileContent) => (
                    <div
                        key={profileContent.key}
                        className="flex flex-col items-center justify-between py-4 space-y-8 lg:space-y-0 lg:flex-row"
                    >
                        <h3 className="mr-8 text-lg font-semibold text-gray-800 uppercase">
                            {profileContent.text}
                        </h3>
                        <input
                            aria-label="First name"
                            name="firstName"
                            type="text"
                            className="w-full px-4 py-2 text-base leading-6 text-gray-900 placeholder-gray-500 transition duration-150 ease-in-out bg-white border border-gray-300 rounded appearance-none focus:outline-none focus:shadow-outline-blue focus:border-blue-300 lg:max-w-md"
                            placeholder="testing"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

const Manage = () => {
    const router = useRouter();

    useEffect(() => {
        router.replace('/profile');
    }, []);

    return (
        <Container>
            <div className="py-4 md:py-12 md:px-24">
                <h2 className="text-4xl font-bold text-gray-900">
                    Manage My Account
                </h2>
                <div className="py-24">
                    <ProfileContent />
                </div>
            </div>
        </Container>
    );
};

export default Manage;
