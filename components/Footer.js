import { FaTwitter, FaLinkedin } from 'react-icons/fa';
import EmileLongIcon from './icons/EmileLongIcon';
import EmileShortIcon from './icons/EmileShortIcon';

const Footer = () => (
    <div className="flex items-center w-full text-gray-600 bg-white border-t-8 border-gray-200">
        <div className="grid w-full grid-cols-1 md:grid-cols-3">
            <div className="flex items-center justify-center py-16 space-x-4 md:py-32">
                <EmileShortIcon />
                <EmileLongIcon color="#4F46E8" />
            </div>
            <div className="flex flex-col items-center mb-6 space-y-12 md:pt-12">
                <h3 className="text-xl font-semibold uppercase">need help?</h3>
                <p>
                    Email us at{' '}
                    <span className="text-indigo-700">contact@hiemile.com</span>
                </p>
                <p>
                    Call or text us at{' '}
                    <a className="text-indigo-700" href="tel:4242288696">
                        (424) 228-8696
                    </a>
                </p>
            </div>
            <div className="flex flex-col items-center py-12 pt-12 space-y-12">
                <h3 className="text-xl font-semibold uppercase">social</h3>
                <div className="grid grid-cols-2 gap-12">
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
            </div>
        </div>
    </div>
);

export default Footer;
