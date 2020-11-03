// import { useForm } from 'react-hook-form';
// import Container from '../../components/Container';

// const profileCreationFields = [
//     {
//         key: 'first-name',
//         text: 'First Name',
//         type: 'text',
//         message: 'Please enter a first name',
//     },
//     {
//         key: 'last-name',
//         text: 'Last Name',
//         type: 'text',
//         message: 'Please enter a last name',
//     },
//     {
//         key: 'phone-number',
//         text: 'Phone Number',
//         type: 'tel',
//         label: 'Example: 123-345-3456',
//         value: /^(\([0-9]{3}\)\s*|[0-9]{3}\-)[0-9]{3}-[0-9]{4}$/,
//         message: 'Please enter a valid phone number',
//     },
//     {
//         key: 'preferred-pronoun',
//         type: 'text',
//         label: 'Example: He/him/his',
//         text: 'Preferred Pronoun',
//     },
// ];

// const CreateProfile = () => {
//     const { handleSubmit, register, errors } = useForm();

//     const onSubmit = (values) => console.log(values);

//     return (
//         <Container>
//             <div className="px-0 lg:px-16">
//                 <div className="space-y-8">
//                     <h2 className="max-w-xl text-5xl font-bold text-gray-800">
//                         Welcome! Let’s start by setting up your profile.
//                     </h2>
//                     <h3 className="text-2xl text-gray-500">
//                         Don’t worry, you can always change this information
//                         later.
//                     </h3>
//                 </div>
//                 <div className="py-8 font-semibold tracking-widest text-gray-800 uppercase border-b border-gray-300">
//                     Profile Information
//                 </div>
//                 <form className="mt-4" onSubmit={handleSubmit(onSubmit)}>
//                     {profileCreationFields.map((field) => (
//                         <div
//                             key={field.key}
//                             className="flex flex-col items-center justify-between py-4 space-y-8 lg:space-y-0 lg:flex-row"
//                         >
//                             <div className="space-y-2">
//                                 <h3 className="mr-8 font-semibold tracking-widest text-gray-800 uppercase">
//                                     {field.text}
//                                 </h3>
//                                 <p className="text-gray-500">{field.label}</p>
//                             </div>
//                             <div className="flex flex-col">
//                                 <input
//                                     aria-label={field.text}
//                                     name={field.key}
//                                     type={field.type}
//                                     className="py-2 pl-4 pr-32 text-base leading-6 text-gray-900 placeholder-gray-500 transition duration-150 ease-in-out bg-white border border-gray-300 rounded appearance-none focus:outline-none focus:shadow-outline-blue focus:border-blue-300 lg:max-w-lg"
//                                     ref={register({
//                                         required: true,
//                                         pattern: {
//                                             value: field?.value,
//                                             message: field.message,
//                                         },
//                                     })}
//                                 />
//                                 <span className="mt-2 text-red-500">
//                                     {errors?.[field.key]?.message}
//                                 </span>
//                             </div>
//                         </div>
//                     ))}
//                     <div className="flex justify-center w-full md:justify-end">
//                         <button className="max-w-md px-12 py-4 mt-8 bg-indigo-600 border-indigo-600 rounded shadow-lg outline-none hover:bg-indigo-500">
//                             <p className="font-semibold tracking-widest text-white uppercase">
//                                 Create Profile
//                             </p>
//                         </button>
//                     </div>
//                 </form>
//             </div>
//         </Container>
//     );
// };

// export default CreateProfile;
