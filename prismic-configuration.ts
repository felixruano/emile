import Prismic from 'prismic-javascript';
import { DefaultClient } from 'prismic-javascript/types/client';

export const apiEndpoint = process.env.NEXT_PUBLIC_PRISMIC_API_ENDPOINT;
export const accessToken = process.env.PRISMIC_ACCESS_TOKEN;

// Client method to query documents from the Prismic repo
export const Client = (req = null): DefaultClient => Prismic.client(apiEndpoint, createClientOptions(req, accessToken));

const createClientOptions = (req: unknown = null, prismicAccessToken = null) => {
    const reqOption = req ? { req } : {};
    const accessTokenOption = prismicAccessToken
        ? { accessToken: prismicAccessToken }
        : {};
    return {
        ...reqOption,
        ...accessTokenOption,
    };
};

// -- Link resolution rules
// Manages the url links to internal Prismic documents
export const linkResolver = (doc: Record<string, unknown>): string => {
    if (doc.type === 'course') {
        return `/courses/${doc.uid}`;
    }
    return '/';
};

// Additional helper function for Next/Link components
export const hrefResolver = (doc: Record<string, unknown>): string => {
    if (doc.type === 'course') {
        return '/courses/[uid]';
    }
    return '/';
};
