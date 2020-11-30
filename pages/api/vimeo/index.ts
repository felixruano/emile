import { NextApiRequest, NextApiResponse } from 'next';
const Vimeo = require('vimeo').Vimeo;

const client = new Vimeo(process.env.VIMEO_CLIENT_ID, process.env.VIMEO_CLIENT_SECRET, process.env.VIMEO_ACCESS_TOKEN);

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    try {
      client.request({
        path: '/users/user127919823/videos',
        // This adds the parameters to request page two, and 10 items per
        // page
        query: {
          page: 1,
          per_page: 10,
          fields: 'uri,name,description,duration,created_time,modified_time,link'
        }
      }, function (error, body, status_code, headers) {
        if (error) {
          console.log(error);
        }
      
        res.status(200).json(body);
      })
    } catch (err) {
      res.status(400).json({ statusCode: 400, message: err.message });
    }
  }
}