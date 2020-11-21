import Prismic from 'prismic-javascript';

export const apiEndpoint = 'https://emile-learning.cdn.prismic.io/api/v2';
export const accessToken = process.env.NEXT_PUBLIC_PRISMIC_ACCESS_TOKEN;

// Client method to query documents from the Prismic repo
export const Client = (req = null) =>
    Prismic.client(apiEndpoint, createClientOptions(req, accessToken));

const createClientOptions = (req = null, prismicAccessToken = null) => {
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
export const linkResolver = (doc) => {
    if (doc.type === 'course') {
        return `/courses/${doc.uid}`;
    }
    return '/';
};

// Additional helper function for Next/Link components
export const hrefResolver = (doc) => {
    if (doc.type === 'course') {
        return '/courses/[uid]';
    }
    return '/';
};
