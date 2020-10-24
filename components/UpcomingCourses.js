import { FaArrowRight } from 'react-icons/fa';
import DnaIcon from './icons/DnaIcon';
import HistoryIcon from './icons/HistoryIcon';
import LiteratureIcon from './icons/LiteratureIcon';

const courses = [
    {
        title: 'AP Biology',
        icon: <DnaIcon color="#4F46E8" />,
        description: 'Learn the core scientific principles, theories, and processes that govern living organisms and biological systems.',
    },
    {
        title: 'AP U.S. History',
        icon: <HistoryIcon color="#4F46E8" />,
        description: 'Learn about the cultural, economic, political, and social developments that have shaped the United States from 1491 to the present.',
    },
    {
        title: 'AP Literature and Composition',
        icon: <LiteratureIcon color="#4F46E8" />,
        description: 'Cultivate your understanding of literature through reading and analyzing texts by exploring concepts like character, setting, structure, perspective, figurative language, and literary analysis in the context of literary works.',
    },
];

const CourseItem = ({ title, icon, description }) => (
    <li className="flex flex-row py-6 border-b">
        <div className="pr-6">{icon}</div>
        <div className="flex flex-col space-y-4">
            <h3 className="text-2xl font-medium text-gray-600">{title}</h3>
            <p className="text-gray-500">{description}</p>
        </div>
        <div className="flex flex-grow items-center justify-end">
            {/* <FaArrowRight color="#4F46E8" /> */}
        </div>
    </li>
);

const UpcomingCourses = () => (
    <div className="mt-12 w-full md:mt-0 md:w-1/2">
        <span className="text-gray-500 tracking-widest uppercase">
            courses enrolling soon
        </span>
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
