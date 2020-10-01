import PropTypes from 'prop-types';

const Input = ({ spanCol, name, text, type, required, register, errors }) => {
    const handleValidation = (type) => {
        if (type === 'email') {
            return register({
                required,
                pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: 'Invalid email address',
                },
            });
        } else if (type === 'tel') {
            return register({
                required,
                pattern: {
                    value: /^[0-9]*$/,
                    message: 'Only numbers please!'
                },
                validate: (value) => value.length >= 10 || 'Please include area code. Ex: 4242288696',
            });
        } else {
            return register({
                required,
                validate: (value) => value.length >= 2 || 'Must be more than 2 characters',
            });
        }
    };

    return (
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
                    ref={handleValidation(type)}
                />
            </div>
            <span className="text-red-500 text-xs italic">
                {errors?.[name]?.message}
            </span>
        </div>
    );
};

Input.propTypes = {
    name: PropTypes.string.isRequired,
    required: PropTypes.bool,
    spanCol: PropTypes.bool,
    text: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    register: PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired,
};

Input.defaultProps = {
    spanCol: false,
    required: false,
};

export default Input;
