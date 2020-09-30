import PropTypes from 'prop-types';

/*
 * Simple uncontrolled select component.
 */
const Select = ({ name, text, options, required }) => (
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
                required={required}
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
    </div>
);

Select.propTypes = {
    options: PropTypes.array.isRequired,
    text: PropTypes.string.isRequired,
};

export default Select;
