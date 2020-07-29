import React from 'react'
import { Client } from 'path/to/prismic-configuration'

export default class extends React.Component {
    static async getInitialProps(context) {
        const req = context.req
        const home = await Client(req).getSingle('homepage')
        return {
            doc: home
        }
    }

    // Render method ...
}