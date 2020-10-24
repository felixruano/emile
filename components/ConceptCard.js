import { FaPencilAlt } from 'react-icons/fa';
import { BsStar } from 'react-icons/bs';

const Labels = ({ icon, label, numberOfDefinitions }) => (
    <div className="mb-4 inline-flex items-center text-xs">
        <div className="mr-2">{icon}</div>
        <div>
            <span className="uppercase tracking-widest text-gray-700 mr-1">
                {label}
            </span>
            <span className="text-gray-400">{`(${numberOfDefinitions})`}</span>
        </div>
    </div>
);

const Body = ({ listItems }) => (
    <div className="mb-4 max-h-32 overflow-auto shadow-inner border border-gray-100 rounded-lg p-4">
        {listItems.map((concept, index) => {
            if (concept.type === 'definition') {
                if (concept.isLocked) {
                    return (
                        <div className="mb-4 text-gray-700">
                            <div className="flex items-center space-x-2">
                                <span>{index + 1}.</span>
                                <span className="text-indigo-700 font-bold capitalize">
                                    {concept.concept}
                                </span>
                                <span>-</span>
                                <div className="h-4 animate-pulse bg-gray-200 rounded-lg w-full"></div>
                            </div>
                            <div className="animate-pulse flex space-x-4">
                                <div className="flex-1 space-y-4 py-1">
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
                    <div className="mb-4 text-gray-700">
                        {index + 1}.{' '}
                        <span className="text-indigo-700 font-bold capitalize">
                            {concept.concept}
                        </span>
                        <span> - {concept.content}</span>
                    </div>
                );
            } else if (concept.type === 'mastery') {
                if (concept.isLocked) {
                    return (
                        <div className="mb-4">
                            <div className="flex items-center text-gray-700 space-x-1">
                                <span>{index + 1}.</span>
                                <div className="h-4 animate-pulse bg-gray-200 rounded-lg w-full"></div>
                            </div>
                            <div className="animate-pulse flex space-x-4">
                                <div className="flex-1 space-y-4 py-1">
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
                    <div className="mb-4 text-gray-700">
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
        className="m-4 w-72 rounded-lg shadow-lg"
    >
        <div className="flex items-center justify-center w-full h-16 rounded-t-lg bg-purple-100">
            <div className="text-lg font-medium text-indigo-700">
                <h3>{title}</h3>
            </div>
        </div>
        <div className="p-4">
            <Labels
                icon={<FaPencilAlt color="#A7A2F4" />}
                label="definitons"
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
