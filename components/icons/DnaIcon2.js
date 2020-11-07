import { Icon } from '@chakra-ui/core';

const DnaIcon2 = (props) => (
    <Icon viewBox="0 0 48 48" {...props}>
        <circle opacity=".8" cx="24" cy="24" r="24" fill="#EDEDFD" />
        <path
            d="M14.415 17.934l-3.695-2.133a.4.4 0 10-.4.693l3.695 2.134a.399.399 0 00.547-.147.4.4 0 00-.147-.547zM8.4 24.34h4.267a.4.4 0 100-.8H8.4a.4.4 0 100 .8zM13.955 29.268L10.26 31.4a.4.4 0 00.4.693l3.695-2.133a.4.4 0 00-.4-.693zM33.585 30.065L37.28 32.2a.398.398 0 00.546-.147.4.4 0 00-.146-.546l-3.695-2.134a.4.4 0 10-.4.693zM40 24.06a.4.4 0 00-.4-.4h-4.267a.4.4 0 100 .8H39.6a.4.4 0 00.4-.4zM33.846 18.786a.398.398 0 00.2-.054L37.74 16.6a.4.4 0 00-.4-.693l-3.695 2.133a.4.4 0 00.2.747zM28.767 8.4a.4.4 0 10-.8 0c0 .736-.083 1.396-.23 2h-7.475a8.458 8.458 0 01-.229-2 .4.4 0 10-.8 0c0 3.874 2.064 5.912 4.167 7.8-2.103 1.888-4.167 3.926-4.167 7.8 0 3.874 2.064 5.912 4.167 7.8-2.103 1.888-4.167 3.926-4.167 7.8a.4.4 0 10.8 0c0-.736.083-1.396.23-2h7.475c.146.604.229 1.264.229 2a.4.4 0 10.8 0c0-3.874-2.064-5.912-4.167-7.8 2.103-1.888 4.167-3.926 4.167-7.8 0-3.874-2.064-5.912-4.167-7.8 2.103-1.888 4.167-3.926 4.167-7.8zm-.8 15.6c0 .75-.087 1.42-.238 2.033H20.27A8.427 8.427 0 0120.033 24c0-.75.087-1.42.238-2.033h7.458c.15.613.238 1.283.238 2.033zm-.474 12.8h-6.986c.688-1.874 2.044-3.164 3.493-4.463 1.45 1.298 2.805 2.59 3.493 4.463zM24 31.263c-1.44-1.29-2.79-2.574-3.482-4.43h6.964c-.692 1.856-2.041 3.14-3.482 4.43zm3.482-10.096h-6.964c.692-1.856 2.041-3.14 3.482-4.43 1.44 1.29 2.79 2.574 3.482 4.43zM24 15.663c-1.45-1.299-2.805-2.59-3.493-4.463h6.986c-.688 1.874-2.044 3.165-3.493 4.463z"
            fill={props.color}
        />
    </Icon>
);

export default DnaIcon2;