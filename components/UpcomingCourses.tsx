import { FaArrowRight } from 'react-icons/fa';
import DnaIcon2 from '@components/icons/DnaIcon2';
import HistoryIcon from '@components/icons/HistoryIcon';
import LiteratureIcon from '@components/icons/LiteratureIcon';

const courses = [
    {
        title: 'AP Biology',
        icon: <DnaIcon2 boxSize={12} color="#4F46E8" />,
        description:
            'Learn the core scientific principles, theories, and processes that govern living organisms and biological systems.',
    },
    {
        title: 'AP U.S. Government and Politics',
        icon: <HistoryIcon boxSize={12} color="#4F46E8" />,
        description:
            'Dive into the concepts and institutions of the political system and culture of the United States.',
    },
    {
        title: 'AP Literature and Composition',
        icon: <LiteratureIcon boxSize={12} color="#4F46E8" />,
        description:
            'Cultivate your understanding of literature through reading and analyzing texts by exploring concepts like character, setting, structure, perspective, figurative language, and literary analysis in the context of literary works.',
    },
];

const CourseItem = ({ title, icon, description }) => (
    <li className="flex flex-row max-w-xl p-6 my-8 bg-white border border-gray-100 rounded shadow-xl">
        <div className="pr-6">{icon}</div>
        <div className="flex flex-col space-y-4">
            <h3 className="text-2xl font-medium text-gray-800">{title}</h3>
            <p className="text-gray-500">{description}</p>
        </div>
        <div className="flex items-center justify-end flex-grow">
            {/* <FaArrowRight color="#4F46E8" /> */}
        </div>
    </li>
);

const UpcomingCourses = () => (
    <div className="mt-12 md:mt-0">
        <p className="tracking-widest text-center text-gray-600 uppercase md:text-left">
            Courses enrolling now
        </p>
        <ul>
            {courses.map((courseItem) => (
                <CourseItem
                    key={courseItem.title}
                    title={courseItem.title}
                    icon={courseItem.icon}
                    description={courseItem.description}
                />
            ))}
        </ul>
    </div>
);

export default UpcomingCourses;
