import { FaPencilAlt } from 'react-icons/fa';
import { BsStar } from 'react-icons/bs';

const Labels = ({ icon, label, numberOfDefinitions }) => (
    <div className="inline-flex items-center mb-4 text-xs">
        <div className="mr-2">{icon}</div>
        <div>
            <span className="mr-1 tracking-widest text-gray-700 uppercase">
                {label}
            </span>
            <span className="text-gray-400">{`(${numberOfDefinitions})`}</span>
        </div>
    </div>
);

const Body = ({ listItems }) => (
    <div className="p-4 mb-4 overflow-auto border border-gray-100 rounded-lg shadow-inner max-h-32">
        {listItems.map((concept, index) => {
            if (concept.type === 'definition') {
                if (concept.isLocked) {
                    return (
                        <div key={concept.index} className="mb-4 text-gray-700">
                            <div className="flex items-center space-x-2">
                                <span>{index + 1}.</span>
                                <span className="font-bold text-indigo-700 capitalize">
                                    {concept.concept}
                                </span>
                                <span>-</span>
                                <div className="w-full h-4 bg-gray-200 rounded-lg animate-pulse"></div>
                            </div>
                            <div className="flex space-x-4 animate-pulse">
                                <div className="flex-1 py-1 space-y-4">
                                    <div className="space-y-2">
                                        <div className="h-4 bg-gray-200 rounded-lg"></div>
                                        <div className="h-4 bg-gray-200 rounded-lg"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                }
                return (
                    <div key={concept.index} className="mb-4 text-gray-700">
                        {index + 1}.{' '}
                        <span className="font-bold text-indigo-700 capitalize">
                            {concept.concept}
                        </span>
                        <span> - {concept.content}</span>
                    </div>
                );
            } else if (concept.type === 'mastery') {
                if (concept.isLocked) {
                    return (
                        <div key={concept.index} className="mb-4">
                            <div className="flex items-center space-x-1 text-gray-700">
                                <span>{index + 1}.</span>
                                <div className="w-full h-4 bg-gray-200 rounded-lg animate-pulse"></div>
                            </div>
                            <div className="flex space-x-4 animate-pulse">
                                <div className="flex-1 py-1 space-y-4">
                                    <div className="space-y-2">
                                        <div className="h-4 bg-gray-200 rounded-lg"></div>
                                        <div className="h-4 bg-gray-200 rounded-lg"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                }
                return (
                    <div key={concept.index} className="mb-4 text-gray-700">
                        <span>
                            {index + 1}. {concept.content}
                        </span>
                    </div>
                );
            }
        })}
    </div>
);

const ConceptCard = ({
    title,
    definitionsData,
    masteryData,
}) => (
    <div
        data-attribute="concept-card"
        className="m-4 bg-white rounded-lg shadow-lg w-72"
    >
        <div className="flex items-center justify-center w-full h-16 bg-purple-100 rounded-t-lg">
            <div className="text-lg font-medium text-indigo-700">
                <h3>{title}</h3>
            </div>
        </div>
        <div className="p-4">
            <Labels
                icon={<FaPencilAlt color="#A7A2F4" />}
                label="definitions"
                numberOfDefinitions={definitionsData.length}
            />
            <Body listItems={definitionsData} />
            <Labels
                icon={<BsStar color="#A7A2F4" />}
                label="mastery checks"
                numberOfDefinitions={masteryData.length}
            />
            <Body listItems={masteryData} />
        </div>
    </div>
);

export default ConceptCard;
