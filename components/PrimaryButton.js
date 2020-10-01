import PropTypes from 'prop-types';

const PrimaryButton = ({ text, isLoading, isDisabled, type }) => (
    <span className="w-full inline-flex rounded-md shadow-sm">
        <button
            type={type}
            className="w-full inline-flex items-center justify-center px-6 py-3 border
                border-transparent text-base leading-6 font-medium rounded-md text-white
                bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700
                focus:shadow-outline-indigo active:bg-indigo-700 transition ease-in-out duration-150"
            disabled={isDisabled || isLoading}
        >
            {isLoading && (
                <svg
                    className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                >
                    <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                    />
                    <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    />
                </svg>
            )}
            {text}
        </button>
    </span>
);

PrimaryButton.propTypes = {
    isDisabled: PropTypes.bool,
    isLoading: PropTypes.bool,
    text: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
};

PrimaryButton.defaultProps = {
    isDisabled: false,
    isLoading: false,
};

export default PrimaryButton;
