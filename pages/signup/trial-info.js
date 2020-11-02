import Link from 'next/link';
import { FiCheckCircle } from 'react-icons/fi';
import Container from '../../components/Container';
import EmileShortIcon from '../../components/icons/EmileShortIcon';

const marketingData = [
    {
        title: 'Unlimited access to our learning platform and 30+ courses',
        subtitle:
            'Livestream the best instructors or watch recordings on-demand, participate in our vibrant global community, and more.',
    },
    {
        title: 'Our proven mastery techniques to accelerate learning progress',
        subtitle:
            'Track your progress through your ability to articulate a concept, not just a quiz score, with our proprietary learning platform.',
    },
    {
        title: '$19.99 per month to continue learning after trial ends',
        subtitle:
            'No need to break the bank! We are intentionally affordable to make high-quality education accessible to all.',
    },
    {
        title: 'Cancel anytime',
        subtitle:
            'No penalties, just cancel before the trial ends if it’s not the right fit.',
    },
];

const MarketingCardContent = ({ title, subtitle }) => (
    <div className="flex space-x-6 md:p-4">
        <div className="mt-1">
            <FiCheckCircle size="2rem" color="#4F46E8" />
        </div>
        <div>
            <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
            <p className="text-cool-gray-500">{subtitle}</p>
        </div>
    </div>
);

const MarketingCard = () => (
    <div className="max-w-3xl p-8 overflow-hidden bg-white rounded shadow-lg">
        <div className="space-y-8">
            {marketingData.map((data) => (
                <MarketingCardContent
                    key={data.title}
                    title={data.title}
                    subtitle={data.subtitle}
                />
            ))}
        </div>
    </div>
);

const TrialInfo = () => (
    <Container backgroundColor="bg-gray-50">
        <div className="flex flex-col items-center justify-center h-full px-4 pt-12 mx-auto space-y-8 ">
            <EmileShortIcon />
            <h1 className="text-6xl font-bold text-center text-gray-800">
                The learning starts{' '}
                <span className="pb-4 text-indigo-600 border-b-8 border-indigo-600">
                    now!
                </span>
            </h1>
            <p className="text-2xl text-center text-gray-600">
                Your free trial includes:
            </p>
            <MarketingCard />
            <div className="py-12">
              <Link href="/">
                <button className="max-w-lg px-32 py-4 bg-indigo-600 border-indigo-600 rounded shadow-lg outline-none hover:bg-indigo-500">
                  <p className="font-bold text-white uppercase">Start Free Trial</p>
                </button>
              </Link>
            </div>
        </div>
    </Container>
);

export default TrialInfo;
