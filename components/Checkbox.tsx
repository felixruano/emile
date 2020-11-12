import PropTypes from 'prop-types';

const Checkbox = ({ spanCol, id, name, value, text, required, register, errors }) => (
    <div className={spanCol ? 'sm:col-span-2' : undefined}>
        <fieldset>
            <div className="mt-4">
                <div className="flex items-center">
                    <input
                        id={id}
                        name={name}
                        value={value}
                        type="checkbox"
                        className="w-4 h-4 text-indigo-600 transition duration-150 ease-in-out form-checkbox"
                        ref={register({ required })}
                    />
                    <label htmlFor="consent" className="ml-3">
                        <span className="block text-sm leading-5 text-gray-700">
                            {text}
                        </span>
                    </label>
                </div>
            </div>
            <span className="text-xs italic text-red-500">
                {errors?.[name] && 'Checkbox must be checked to submit'}
        </span>
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

Checkbox.defaultProps = {
    required: false,
};

export default Checkbox;