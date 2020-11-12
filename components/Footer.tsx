import Link from 'next/link';
import { FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';
import EmileLongIcon from './icons/EmileLongIcon';
import EmileShortIcon from './icons/EmileShortIcon';

const Footer = () => (
    <div className="flex items-center w-full text-gray-600 bg-white border-t border-gray-200">
        <div className="grid w-full grid-cols-1 md:grid-cols-3">
            <div className="flex items-center justify-center py-10 space-x-4">
                <EmileShortIcon />
                <EmileLongIcon color="#4F46E8" />
            </div>
            <div className="flex flex-col items-center justify-center space-y-4 text-gray-500">
                <Link href="/courses">
                    <a>Browse Courses</a>
                </Link>
                <Link href="/about">
                    <a>About Emile</a>
                </Link>
                <Link href="/login">
                    <a>Member Log In</a>
                </Link>
            </div>
            <div className="flex flex-col items-center justify-center py-12 pt-12 space-y-6">
                <div className="grid grid-cols-3 gap-6">
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://www.instagram.com/emilelearning/"
                    >
                        <FaInstagram color="#A9A9B8" size="32px" />
                    </a>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://twitter.com/emilelearning"
                    >
                        <FaTwitter color="#A9A9B8" size="32px" />
                    </a>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://www.linkedin.com/company/emileschool/"
                    >
                        <FaLinkedin color="#A9A9B8" size="32px" />
                    </a>
                </div>
                <p>
                    Email us at{' '}
                    <a className="text-indigo-600" href="mailto:contact@hiemile.com">contact@hiemile.com</a>
                </p>
            </div>
        </div>
    </div>
);

export default Footer;
