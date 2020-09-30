import PropTypes from 'prop-types';

const Checkbox = ({ spanCol, id, name, value, text, required }) => (
    <div className={spanCol ? 'sm:col-span-2' : undefined}>
        <fieldset>
            <div className="mt-4">
                <div className="flex items-center">
                    <input
                        id={id}
                        name={name}
                        value={value}
                        type="checkbox"
                        className="form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                        required={required}
                    />
                    <label htmlFor="consent" className="ml-3">
                        <span className="block text-sm leading-5 text-gray-700">
                            {text}
                        </span>
                    </label>
                </div>
            </div>
        </fieldset>
    </div>
);

Checkbox.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    spanCol: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    required: PropTypes.bool.isRequired,
};

export default Checkbox;