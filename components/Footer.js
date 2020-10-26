import { FaTwitter, FaLinkedin } from 'react-icons/fa';
import EmileLongIcon from '../components/icons/EmileLongIcon';

const Footer = () => (
    <div className="w-full flex items-center text-white bg-indigo-600">
        <div className="w-full grid grid-cols-1 md:grid-cols-3">
            <div className="flex items-center justify-center py-16 md:py-32">
                <EmileLongIcon color="white" />
            </div>
            <div className="flex flex-col items-center md:pt-12 mb-6 space-y-12">
                <h3 className="font-semibold uppercase text-xl">need help?</h3>
                <p className="text-gray-100">Email us at contact@hiemile.com</p>
                <p className="text-gray-100">
                    Call or text us at{' '}
                    <a href="tel:4242288696" className="hover:text-orange-200">
                        (424) 228-8696
                    </a>
                </p>
            </div>
            <div className="flex flex-col items-center py-12 pt-12 space-y-12">
                <h3 className="font-semibold uppercase text-xl">social</h3>
                <div className="grid grid-cols-2 gap-12">
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://twitter.com/emilelearning"
                    >
                        <FaTwitter color="white" size="32px" />
                    </a>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://www.linkedin.com/company/emileschool/"
                    >
                        <FaLinkedin color="white" size="32px" />
                    </a>
                </div>
            </div>
        </div>
    </div>
);

export default Footer;
