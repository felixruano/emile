import PropTypes from 'prop-types';

/*
 * Simple uncontrolled select component.
 */
const Select = ({ name, text, options, required, register, errors }) => (
    <div>
        <label
            htmlFor={name}
            className="block text-sm font-medium leading-5 text-gray-700"
        >
            {text}
        </label>
        <div className="mt-1 relative rounded-md shadow-sm">
            <select
                name={name}
                className="form-select py-3 px-4 block w-full bg-transparent text-gray-500 transition ease-in-out duration-150"
                defaultValue="DEFAULT"
                ref={register({
                    required,
                    validate: (value) => value !== 'DEFAULT' || 'One option must be chosen',
                })}
            >
                <option disabled hidden value="DEFAULT">
                    -- select an option --
                </option>
                {options.map((option) => (
                    <option key={option} value={option}>
                        {option}
                    </option>
                ))}
            </select>
        </div>
        <span className="text-red-500 text-xs italic">
            {errors?.[name]?.message}
        </span>
    </div>
);

Select.propTypes = {
    name: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    options: PropTypes.array.isRequired,
    register: PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired,
};

Select.defaultProps = {
    required: false,
};

export default Select;
