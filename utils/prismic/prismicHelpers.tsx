import Link from 'next/link';
import {
    linkResolver,
    hrefResolver,
} from '../../prismic-configuration';

// Helper function to convert Prismic Rich Text links to Next/Link components
export const customLink = (type, element, content, children, index) => (
    <Link
        key={index}
        href={hrefResolver(element.data)}
        as={linkResolver(element.data)}
    >
        <a>{content}</a>
    </Link>
);

export default customLink;
