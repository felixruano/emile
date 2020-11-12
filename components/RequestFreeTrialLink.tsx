import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';

import { useAuth } from '../utils/use-auth';

const RequestFreeTrialLink = ({ color }) => {
    const auth = useAuth();

    if (auth?.user) return null;

    return (
        <Link href="/signup">
            <button
                className={`${color} flex flex-row items-center space-x-2 font-semibold uppercase tracking-widest`}
            >
                <span>Request Free Trial</span>
                <FaArrowRight />
            </button>
        </Link>
    );
};

export default RequestFreeTrialLink;
