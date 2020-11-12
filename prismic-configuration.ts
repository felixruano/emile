import Prismic from 'prismic-javascript'

export const apiEndpoint = 'https://emileclasses.cdn.prismic.io/api/v2'
export const accessToken = 'MC5YMEgxREJJQUFCTWdNeVNy.77-9Zy0VMe-_ve-_ve-_vQLvv70CR--_vVXvv73vv70077-9UyDvv73vv73vv718PWN977-9awY877-9'

// Client method to query documents from the Prismic repo
export const Client = (req = null) => (
    Prismic.client(apiEndpoint, createClientOptions(req, accessToken))
)

const createClientOptions = (req = null, prismicAccessToken = null) => {
    const reqOption = req ? { req } : {}
    const accessTokenOption = prismicAccessToken ? { accessToken: prismicAccessToken } : {}
    return {
        ...reqOption,
        ...accessTokenOption,
    }
}

// -- Link resolution rules
// Manages the url links to internal Prismic documents
export const linkResolver = (doc) => {
    if (doc.type === 'course') {
        return `/classes/${doc.uid}`
    }
    if (doc.type === 'teacher') {
        return `/team/${doc.uid}`
    }
    return '/'
}

// Additional helper function for Next/Link components
export const hrefResolver = (doc) => {
    if (doc.type === 'course') {
        return '/classes/[uid]'
    }
    if (doc.type === 'teacher') {
        return '/team/[uid]'
    }
    return '/'
}