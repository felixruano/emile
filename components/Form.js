import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import Select from './Select';
import Input from './Input';
import Checkbox from './Checkbox';
import PrimaryButton from './PrimaryButton';

function encode(data) {
    return Object.keys(data)
        .map(
            (key) =>
                encodeURIComponent(key) + '=' + encodeURIComponent(data[key])
        )
        .join('&');
}

/*
 * Form component for request pages.
 * Takes in form object with formConsent child object.
 */
const Form = ({ form }) => {
    const { formData, formConsent } = form;
    const { handleSubmit, register, errors } = useForm();

    const onSubmit = (data, e) => {
        e.preventDefault();
        fetch('/thankyou', {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: encode({
                'form-name': 'contact',
                ...data,
            }),
        })
            .then((data) => console.log(data))
            .catch((error) => alert(error));
    };

    return (
        <div className="mt-12">
            <form
                name="contact"
                className="grid grid-cols-1 row-gap-6 sm:grid-cols-2 sm:col-gap-8"
                netlify-honeypot="bot-field"
                data-netlify="true"
                onSubmit={handleSubmit(onSubmit)}
            >
                <input type="hidden" name="form-name" value="contact" />
                {formData.map((formItem) =>
                    'options' in formItem ? (
                        <Select
                            key={formItem.name}
                            name={formItem.name}
                            text={formItem.text}
                            options={formItem.options}
                            register={register}
                            errors={errors}
                            required
                        />
                    ) : (
                        <Input
                            key={formItem.name}
                            spanCol={formItem.spanCol}
                            name={formItem.name}
                            text={formItem.text}
                            type={formItem.type}
                            register={register}
                            errors={errors}
                            required
                        />
                    )
                )}
                <Checkbox
                    id={formConsent.id}
                    name={formConsent.name}
                    text={formConsent.text}
                    spanCol={formConsent.spanCol}
                    value={formConsent.value}
                    register={register}
                    errors={errors}
                    required
                />
                <p className="hidden">
                    <label>
                        Don’t fill this out if you're human:
                        <input name="bot-field" />
                    </label>
                </p>
                <div className="sm:col-span-2">
                    <PrimaryButton text="Submit" type="submit" />
                </div>
            </form>
        </div>
    );
};

Form.propTypes = {
    form: PropTypes.object.isRequired,
};

export default Form;
