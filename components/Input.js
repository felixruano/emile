import PropTypes from 'prop-types';

const Input = ({ spanCol, name, text, type, required }) => (
    <div className={spanCol ? 'sm:col-span-2' : undefined}>
        <label
            htmlFor={name}
            className="block text-sm font-medium leading-5 text-gray-700"
        >
            {text}
        </label>
        <div className="mt-1 relative rounded-md shadow-sm">
            <input
                name={name}
                id={name}
                type={type}
                className="form-input py-3 px-4 block w-full transition ease-in-out duration-150"
                required={required}
            />
        </div>
    </div>
);

Input.propTypes = {
    name: PropTypes.string.isRequired,
    required: PropTypes.bool,
    spanCol: PropTypes.bool,
    text: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
};

Input.defaultProps = {
    spanCol: false,
    required: false,
};

export default Input;