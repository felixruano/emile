import Link from 'next/link';

import { useAuth } from '../utils/use-auth';

const SignUpButton = ({ text }) => {
    const auth = useAuth();

    if (auth?.user) return null;

    return (
        <Link href="/signup">
            <button className="p-3 font-semibold tracking-widest text-white uppercase bg-indigo-700 rounded shadow-lg">
                {text}
            </button>
        </Link>
    );
};

export default SignUpButton;
